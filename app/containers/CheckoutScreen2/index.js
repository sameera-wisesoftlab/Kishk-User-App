import React, { useEffect, useState } from 'react';
import CheckoutView2 from './CheckoutView2';
import globals from '../../lib/globals';
import { useDispatch, useSelector } from 'react-redux';

import {
  /** cart checkout*/
  checkoutOrder,
  resetCheckoutError,
  resetCheckoutContent,
  resetCartKey,
  resetCheckoutData,
  resetCartContent,
  /** Settings */
  getSettingsContent,
  resetSettingsError,
  /** Promocode */
  resetPromocode,
  /** save cart count */
  saveCartCount,
  /** payment url */
  paymentUrl,
  resetPaymentUrl,
  resetPaymentUrlError,
} from '../../actions';
import _ from 'lodash';

import functions from '../../lib/functions';
import appTexts from '../../lib/appTexts';

import { launchCamera, launchImageLibrary } from "react-native-image-picker"
import apiHelper from '../../lib/apiHelper';
import RNFetchBlob from 'rn-fetch-blob';
import DocumentPicker from 'react-native-document-picker';
import { Platform } from 'react-native';

const CheckoutScreen2 = props => {
  const root_url = apiHelper.getBaseUrl();
  const [selectedMethod, setSelectedMethod] = useState('online');
  const [imageData, setImageData] = useState({ selected: false });
  const [loader, setLoader] = useState(false);
  const [choseFileModalVisible, setChoseFileModalVisible] = useState(false);

  const dispatch = useDispatch();
  const {
    checkoutData,
    checkoutOrderData,
    error,
    cartKey,
    isLoading,
    benefitEndpoint,
  } = useSelector(state => state.product);
  const { settingsData, settingsError, isSettingsLoading } = useSelector(
    state => state.settings,
  );
  const { userData } = useSelector(state => state.loginReducer);
  const from = props?.route?.params?.cartDataDetails?.cartDetails?.grant_total;
  const cartData = props?.route?.params?.cartDataDetails;
  //will focus
  useEffect(() => { }, [props.navigation]);

  //mounted
  useEffect(() => handleComponentMounted(), []);

  const handleComponentMounted = () => {
    dispatch(getSettingsContent());
  };

  //updated
  useEffect(() => handleComponentUpdated());
  const handleComponentUpdated = () => {
    /** Order checkout success */
    if (checkoutOrderData && _.get(checkoutOrderData, 'success') == true) {
      dispatch(resetCheckoutContent());
      dispatch(resetCartKey());
      dispatch(resetCheckoutData());
      dispatch(resetCartContent());
      dispatch(resetPromocode());
      dispatch(saveCartCount(''));
      props.navigation.navigate('CheckoutScreen3', checkoutOrderData.data);
    }
    if (checkoutOrderData && _.get(checkoutOrderData, 'success') == false) {
      dispatch(resetCheckoutContent());
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        _.get(checkoutOrderData, 'message'),
      );
      dispatch(resetCheckoutError());
    }
    /** Order checkout error */
    if (error && _.get(error, 'data.success') === false) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        _.get(error, 'data.error.msg'),
      );
      dispatch(resetCheckoutError());
      dispatch(resetPaymentUrlError());
    }
    /** Settings error */
    if (settingsError && _.get(settingsError, 'data.success') === false) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        _.get(settingsError, 'data.error.msg'),
      );
      dispatch(resetSettingsError());
    }
    /** Payment url */
    if (benefitEndpoint && _.get(benefitEndpoint, 'success') === true) {
      props.navigation.navigate('OnlinePayment', {
        url: benefitEndpoint?.data?.url,
        checkoutData: checkoutData,
        cartKey: cartKey,
        selectedMethod: selectedMethod,
      });
      dispatch(resetPaymentUrl({}));
    }
  };

  const onBackButtonClick = () => {
    props.navigation.goBack();
  };

  const onCategoryPress = () => {
    props.navigation.navigate('CategoryFilterScreen');
  };

  const onBrandsPress = () => {
    props.navigation.navigate('BrandsScreen');
  };

  const onPayClick = () => {
    if (selectedMethod == '') {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        appTexts.ALERT_MESSAGES.payModeNotSelected,
      );
      return false;
    }
    const data = {
      cart_key: cartKey,
      payment_method: selectedMethod,
      delivery_date: checkoutData.dateFormatted,
      time_slot: checkoutData.timeSlotFormatted,
      billing_address: checkoutData.billingAddress.toString(),
      delivery_address: checkoutData.deliveryAddress.toString(),
    };
    if (selectedMethod == 'ofline') {
      if (imageData.selected == false) {
        functions.displayToast(
          'error',
          'top',
          appTexts.ALERT_MESSAGES.error,
          appTexts.ALERT_MESSAGES.reciptNotSelected,
        );
        return false;
      }
      offlinePayment(data);
    } else if (selectedMethod == 'online') {
      dispatch(paymentUrl());
    } else {
      dispatch(checkoutOrder(data));
    }
  };

  const choseFile = type => {
    setChoseFileModalVisible(false);
    setTimeout(() => {
      if (type == 'image') {
        pickFile('image');
      } else if (type == 'pdf') {
        pickReciptPdf();
      } else {
        pickFile('camera');
      }
    }, 50);
  };

  const pickFile = async type => {
    const options = {
      title: 'Select payment slip',
    };
    const _library = type == 'image' ? launchImageLibrary : launchCamera;
    try {
      _library(options, resp => {
        if (resp.didCancel) {
          return false;
        }
        if (resp.error) {
          return false;
        }
        const res = resp?.assets?.[0];
        if (res.fileSize / 1000000 > 10) {
          functions.displayToast(
            'error',
            'top',
            'Error',
            appTexts.STRING.fileSizeExceede,
          );
          return false;
        }

        setImageData({
          receipt: res,
          selected: true,
          typeImage: res.type,
          nameImage: res.fileName,
          type: type,
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

  const pickReciptPdf = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      if (res.size / 1000000 > 10) {
        functions.displayToast(
          'error',
          'top',
          'Error',
          appTexts.STRING.fileSizeExceede,
        );
        return false;
      }
      setImageData({
        receipt: res,
        selected: true,
        typeImage: res.type,
        nameImage: res.name,
        type: 'pdf',
      });
    } catch (err) { }
  };

  const offlinePayment = _data => {
    let _file = {};
    if (imageData.receipt != null) {
      const realPath =
        Platform.OS == 'ios'
          ? imageData.receipt.uri.replace('file://', '')
          : imageData.receipt.uri;
      _file = {
        name: 'payment_slip',
        filename: imageData.nameImage,
        type: imageData.typeImage,
        data:
          imageData.type == 'pdf'
            ? realPath
            : RNFetchBlob.wrap(decodeURIComponent(realPath)),
      };
    }
    setLoader(true);

    let params = [];
    for (var key in _data) {
      if (_data.hasOwnProperty(key)) {
        params.push({
          name: key,
          data: _data[key],
        });
      }
    }
    params.push(_file);

    RNFetchBlob.fetch(
      'POST',
      root_url + 'api/placeorder',
      {
        Authorization: 'Bearer ' + userData?.data?.access_token,
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
      params,
    )
      .then(response => {
        setImageData({ selected: false });
        setLoader(false);
        let resp_data = response.data;
        if (typeof resp_data == 'string') {
          resp_data = JSON.parse(resp_data);
        }
        if (resp_data && _.get(resp_data, 'success') == true) {
          dispatch(resetCheckoutContent());
          dispatch(resetCartKey());
          dispatch(resetCheckoutData());
          dispatch(resetCartContent());
          dispatch(resetPromocode());
          dispatch(saveCartCount(''));
          props.navigation.navigate('CheckoutScreen3', resp_data.data);
        }
        if (resp_data && _.get(resp_data, 'success') == false) {
          dispatch(resetCheckoutContent());
          functions.displayToast(
            'error',
            'top',
            appTexts.ALERT_MESSAGES.error,
            _.get(resp_data, 'message'),
          );
          dispatch(resetCheckoutError());
        }
      })
      .catch(err => {
        setImageData({ selected: false });
        functions.displayToast(
          'error',
          'top',
          'Error',
          err?.data?.message || '',
        );
        setLoader(false);
      });
  };

  console.log(checkoutData, 'data');

  return (
    <CheckoutView2
      onBackButtonClick={onBackButtonClick}
      onPayClick={onPayClick}
      selectedMethod={selectedMethod}
      setSelectedMethod={setSelectedMethod}
      isLoading={isLoading || isSettingsLoading || loader}
      settingsData={settingsData}
      choseFile={choseFile}
      choseFileModalVisible={choseFileModalVisible}
      setChoseFileModalVisible={setChoseFileModalVisible}
      imageData={imageData}
      removeFile={() => setImageData({ selected: false })}
      cartdata={cartData}
    />
  );
};

export default CheckoutScreen2;
