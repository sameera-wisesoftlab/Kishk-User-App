import React, {useState, useEffect} from 'react';
import {View, ScrollView, StatusBar} from 'react-native';

import globals from '../../lib/globals';
import appTexts from '../../lib/appTexts';
import {styles, images} from './styles';
import Header from '../../components/Header';
import {WebView} from 'react-native-webview';
import Loader from '../../components/Loader';
import functions from '../../lib/functions';

import {
  /** cart checkout*/
  checkoutOrder,
  resetCheckoutError,
  resetCheckoutContent,
  resetCartKey,
  resetCheckoutData,
  resetCartContent,
  /** Promocode */
  resetPromocode,
  /** save cart count */
  saveCartCount,
} from '../../actions';
import {useDispatch, useSelector} from 'react-redux';

const OnlinePayment = props => {
  const benefitPaymentUrl = props?.route?.params?.url;
  const [isWebLoading, setIsWebLoading] = useState(true);
  const [checkoutProgress, setCheckoutProgress] = useState(false);

  const dispatch = useDispatch();
  const {
    checkoutData,
    checkoutOrderData,
    error,
    cartKey,
    isLoading,
    benefitEndpoint,
  } = useSelector(state => state.product);

  useEffect(() => handleComponentUpdated());
  const handleComponentUpdated = () => {
    /** Order checkout success */
    if (checkoutOrderData && checkoutOrderData?.success == true) {
      dispatch(resetCheckoutContent());
      dispatch(resetCartKey());
      dispatch(resetCheckoutData());
      dispatch(resetCartContent());
      dispatch(resetPromocode());
      dispatch(saveCartCount(''));
      props.navigation.navigate('CheckoutScreen3', checkoutOrderData.data);
    }
    if (checkoutOrderData && checkoutOrderData?.success == false) {
      dispatch(resetCheckoutContent());
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        checkoutOrderData?.message,
      );
      dispatch(resetCheckoutError());
      setCheckoutProgress(false);
    }
    /** Order checkout error */
    if (error && error?.data?.success === false) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        error?.data?.error?.msg || '',
      );
      dispatch(resetCheckoutError());
      dispatch(resetPaymentUrlError());
      setCheckoutProgress(false);
      props.navigation.navigate('CheckoutScreen1');
    }
  };

  const onPaySuccess = () => {
    if (checkoutProgress == true) {
      return false;
    }
    setCheckoutProgress(true);
    const checkoutData = props?.route?.params?.checkoutData || {};
    const cartKey = props?.route?.params?.cartKey || '';
    const selectedMethod = props?.route?.params?.selectedMethod;
    const data = {
      cart_key: cartKey,
      payment_method: selectedMethod,
      delivery_date: checkoutData.dateFormatted,
      time_slot: checkoutData.timeSlotFormatted,
      billing_address: checkoutData.billingAddress.toString(),
      delivery_address: checkoutData.deliveryAddress.toString(),
    };
    dispatch(checkoutOrder(data));
  };

  return (
    <View style={[styles.screenMain]}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={globals.COLOR.screenBackground}
      />
      <Header
        navigation={props.navigation}
        isBackButtonRequired={true}
        onBackButtonClick={() => props.navigation.goBack()}
        isLeftTitleRequired={true}
        title={appTexts.CHECKOUT.online}
        customHeaderStyle={{
          height: globals.INTEGER.headerHeight,
          alignItems: 'center',
          backgroundColor: globals.COLOR.headerColor,
        }}
      />

      {(isWebLoading || isLoading) && <Loader />}
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <WebView
          source={{uri: benefitPaymentUrl}}
          onLoadEnd={() => setIsWebLoading(false)}
          onNavigationStateChange={event => {
            if (event?.url && event.url.indexOf('pg/approved') != -1) {
              onPaySuccess();
            } else if (
              event?.url &&
              (event.url.indexOf('pg/error') != -1 ||
                event.url.indexOf('pg/declined') != -1)
            ) {
              functions.displayToast(
                'error',
                'top',
                appTexts.ALERT_MESSAGES.error,
                event.url.indexOf('pg/declined') != -1
                  ? 'Payment declined. Please try again!'
                  : 'Transaction failed. Please try again!',
              );
              props.navigation.navigate('CheckoutScreen2');
            }
          }}
        />
      </View>
    </View>
  );
};

export default OnlinePayment;
