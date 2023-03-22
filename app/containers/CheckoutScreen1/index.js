import React, { useEffect, useState } from 'react';
import CheckoutView1 from './CheckoutView1';
import globals from '../../lib/globals';
import * as AddressActions from '../../actions/AddressActions';
import { useDispatch, useSelector } from 'react-redux';

import {
  /** cart */
  getCartContent,
  resetCartError,
  /** Del Addr */
  getDelAddressContent,
  resetDelAddressError,
  resetDelAddressContent,
  resetBillAddressContent,
  /** Bill Addr */
  getBillAddressContent,
  resetBillAddressError,
  /** Chose adddress */
  selectCheckoutAddress,
  /** Save Checkout Data */
  saveCheckoutData,
} from '../../actions';
import _ from 'lodash';
import functions from '../../lib/functions';
import appTexts from '../../lib/appTexts';
import { BackHandler } from 'react-native';

const CheckoutScreen1 = props => {
  const dispatch = useDispatch();
  const {
    isLoading,
    cartData,
    error,
    deliveryAddress,
    billingAddress,
    checkoutData,
    promocode,
    cartKey,
  } = useSelector(state => state.product);

  const { isSelectAddressLoading } = useSelector(state => state.addressReducer);

  const [isOnlineVisible, setIsOnlineVisible] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(0);

  const [selectedDeliveryAddress, setSelectedDeliveryAddress] = useState('');
  const [selectedBillingAddress, setSelectedBillingAddress] = useState('');

  /** will focus */
  useEffect(() => {
    return props.navigation.addListener('focus', () => {
      setSelectedBillingAddress('');
      setSelectedDeliveryAddress('');
      dispatch(getCartContent(promocode, () => { }, false, cartKey));
      dispatch(resetDelAddressContent());
      dispatch(resetBillAddressContent());
      dispatch(getDelAddressContent());
      dispatch(getBillAddressContent());
    });
  }, [props.navigation, promocode]);

  /** mounted */
  useEffect(() => handleComponentMounted(), []);

  const handleComponentMounted = () => {
    dispatch(getCartContent(promocode, () => { }, false, cartKey));
    dispatch(resetDelAddressContent());
    dispatch(resetBillAddressContent());
    dispatch(getDelAddressContent());
    dispatch(getBillAddressContent());
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      (backPressed = () => {
        props.navigation.goBack();
        return true;
      }),
    );
    return () => backHandler.remove();
  }, []);

  /** unmount */
  useEffect(() => {
    return () => {
      handleComponentUnmount();
    };
  }, []);

  const handleComponentUnmount = () => { };

  /** updated */
  useEffect(() => handleComponentUpdated());

  const handleComponentUpdated = () => {
    if (error && _.get(error, 'data.success') === false) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        _.get(error, 'data.error.msg'),
      );
      dispatch(resetCartError());
      dispatch(resetBillAddressError());
      dispatch(resetDelAddressError());
    }
  };

  const onBackButtonClick = () => {
    props.navigation.goBack();
  };

  const onlineClick = () => {
    setIsOnlineVisible(!isOnlineVisible);
  };

  const onPayClick = () => {
    props.navigation.navigate('CheckoutScreen3');
  };

  const addnewAddress = () => {
    props.navigation.navigate('AddnewaddressScreen', {
      from: 'checkout',
      tabIndex: tabIndex,
      length: tabIndex == 0 ? deliveryAddress.length : billingAddress.length,
      lengthAll: billingAddress.length + deliveryAddress.length,
      addr_flag: tabIndex == 0 ? 'D' : 'B',
    });
  };

  const editAddress = addressId => {
    props.navigation.navigate('EditaddressScreen', {
      addressId: addressId,
      from: 'checkout',
      length: billingAddress.length + deliveryAddress.length,
    });
  };

  const onProceedClick = () => {
    let _checkoutData = Object.assign({}, checkoutData);
    const del_dates = cartData?.delivery_dates;
    const time_slots = cartData?.time_slots;
    const dateSelectedIndex = checkoutData.date ? checkoutData.date : 0;
    const timeSelectedIndex = checkoutData.timeSlot ? checkoutData.timeSlot : 0;
    let dateFormatted = '';
    let timeSlotFormatted = '';
    if (del_dates && del_dates.length > 0) {
      dateFormatted = del_dates?.[dateSelectedIndex]?.date;
    }
    if (time_slots && time_slots.length > 0) {
      timeSlotFormatted = time_slots?.[timeSelectedIndex]?.time_slot;
    }
    if (dateFormatted === '' || timeSlotFormatted === '') {
      return false;
    }
    if (!selectedDeliveryAddress) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.noAddress,
        appTexts.ALERT_MESSAGES.noDeliveryAddress,
      );
      return false;
    }
    if (!selectedBillingAddress) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.noAddress,
        appTexts.ALERT_MESSAGES.noBillingAddress,
      );
      return false;
    }
    _checkoutData.dateFormatted = dateFormatted;
    _checkoutData.timeSlotFormatted = timeSlotFormatted;
    dispatch(saveCheckoutData(_checkoutData));
    props.navigation.navigate('CheckoutScreen2', {
      cartDataDetails: cartData,
    });
  };

  const _len = deliveryAddress.length;

  const changeTab = index => {
    if (tabIndex !== index) {
      setTabIndex(index);
    }
  };

  const confirmDeliveryDate = (date, timeSlot) => {
    let _checkoutData = Object.assign({}, checkoutData);
    _checkoutData.date = date;
    _checkoutData.timeSlot = timeSlot;
    dispatch(saveCheckoutData(_checkoutData));
    setSelectedDate(date);
    setSelectedTimeSlot(timeSlot);
  };

  /** Set selected date from local store if already selected*/
  if (
    checkoutData &&
    checkoutData.date &&
    checkoutData.date != selectedDate &&
    selectedDate == ''
  ) {
    setSelectedDate(checkoutData.date);
  }
  /** Set selected time from local store if already selected */
  if (
    checkoutData &&
    checkoutData.timeSlot &&
    checkoutData.timeSlot != selectedTimeSlot &&
    selectedTimeSlot == ''
  ) {
    setSelectedTimeSlot(checkoutData.timeSlot);
  }

  const select_address = (id, address_flag, action = 'select') => {
    let _checkoutData = Object.assign({}, checkoutData);
    if (address_flag == 'B') {
      _checkoutData.billingAddress = id;
      setSelectedBillingAddress(id);
      dispatch(
        selectCheckoutAddress(
          { type: 'billing', id: id, action: action },
          successHere,
        ),
      );
    }
    if (address_flag == 'D') {
      _checkoutData.deliveryAddress = id;
      setSelectedDeliveryAddress(id);
      dispatch(
        selectCheckoutAddress(
          { type: 'delivery', id: id, action: action },
          successHere,
        ),
      );
    }
    dispatch(saveCheckoutData(_checkoutData));
  };

  const deliverySelected = deliveryAddress.filter(item => {
    return item.selected == 'yes';
  });
  const isDeliverySelected = deliverySelected.length > 0 ? 'yes' : 'no';
  if (
    isDeliverySelected == 'yes' &&
    selectedDeliveryAddress === '' &&
    deliverySelected?.[0]?.id
  ) {
    // setSelectedDeliveryAddress(deliverySelected[0].id);

    select_address(deliverySelected[0].id, 'D');
  }

  const billingSelected = billingAddress.filter(item => {
    return item.selected == 'yes';
  });
  const isBillingSelected = billingSelected.length > 0 ? 'yes' : 'no';
  if (
    isBillingSelected == 'yes' &&
    selectedBillingAddress === '' &&
    billingSelected?.[0]?.id
  ) {
    // setSelectedBillingAddress(billingSelected[0].id);
    setTimeout(() => {
      select_address(billingSelected[0].id, 'B');
    }, 800);
  }

  const successHere = () => {
    dispatch(getDelAddressContent());
    dispatch(getBillAddressContent());
  };

  return (
    <CheckoutView1
      addnewAddress={addnewAddress}
      changeTab={changeTab}
      onProceedClick={onProceedClick}
      tabIndex={tabIndex}
      onBackButtonClick={onBackButtonClick}
      onlineClick={onlineClick}
      isOnlineVisible={isOnlineVisible}
      onPayClick={onPayClick}
      listData={props.addressData}
      billingAddress={billingAddress}
      deliveryAddress={deliveryAddress}
      cartData={cartData}
      isLoading={isLoading || isSelectAddressLoading}
      selectedDate={selectedDate}
      selectedTimeSlot={selectedTimeSlot}
      confirmDeliveryDate={confirmDeliveryDate}
      selectedDeliveryAddress={isDeliverySelected}
      selectedBillingAddress={isBillingSelected}
      itemClick={select_address}
      createAddress={addnewAddress}
      editAddress={editAddress}
    />
  );
};

export default CheckoutScreen1;
