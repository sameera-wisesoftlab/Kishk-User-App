import React, { useEffect, useState } from 'react';
import OrderDetailsView from './OrderDetailsView';
import globals from '../../lib/globals';
import { BackHandler } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import {
  getOrderDetailsContent,
  resetOrderDetailsContent,
  resetOrderDetailsError,
  /** Reorder */
  reorder,
  resetReorderError,
  resetReorderSuccess,
  /** Save cart key */
  saveCartKey,
  resetCartKey,
  /** Add to cart */
  addToCart,
  resetAddToCartError,
  resetAddToCartSuccess,
  /** Add order review */
  addOrderReview,
  addProductReview,
} from '../../actions';
import _ from 'lodash';

import functions from '../../lib/functions';
import appTexts from '../../lib/appTexts';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';

const OrderDetailsScreen = props => {
  const dispatch = useDispatch();

  const [isSupportModalVisible, setIsSupportModalVisibile] = useState(false);
  const [isCancelModalVisible, setIsCancelModalVisibile] = useState(false);
  const [isRateOrderModalVisible, setIsRateOrderModalVisible] = useState(false);
  const [isRateProdModalVisible, setIsRateProdModalVisible] = useState(false);
  const [prodIdForReview, setProdIdForReview] = useState(null);

  const {
    orderDetails,
    error,
    isLoading,
    successMsg,
    orderReviewExecuting,
    prodReviewExecuting,
  } = useSelector(state => state.order);
  const { reorderData, reorderError, isReorderLoading, addCartData, cartKey } =
    useSelector(state => state.product);

  const addCartIsLoading = useSelector(state => state.product.isLoading);
  const addToCartError = useSelector(state => state.product.error);

  const [tabIndex, setTabIndex] = useState(0);
  const [subOrderIndex, setSubOrderIndex] = useState([]);
  const _params = props?.route?.params;
  const id = _params?.id;
  const subOrderId = _params?.subOrderId;
  const orderStatus = _params?.orderStatus || '';

  // mounted
  // fetch order detail if order id changed or status of order is changed
  useEffect(() => handleComponentMounted(), [id, orderStatus]);
  const handleComponentMounted = () => {
    BackHandler.addEventListener(
      'hardwareBackPress',
      (backPressed = () => {
        props.navigation.goBack();
        return true;
      }),
    );
    dispatch(resetOrderDetailsContent());
    dispatch(getOrderDetailsContent({ order_id: id }));
  };

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      dispatch(getOrderDetailsContent({ order_id: id }));
    });

    return () => unsubscribe();
  }, [props.navigation]);

  //updated
  useEffect(
    () => handleComponentUpdated(),
    [error, successMsg, addCartData, reorderError, reorderData, addToCartError],
  );
  const handleComponentUpdated = () => {
    if ((error && _.get(error, 'data.success') === false) || successMsg) {
      if (successMsg) {
        functions.displayToast(
          'success',
          'top',
          appTexts.CHECKOUT.success,
          successMsg,
        );
      } else {
        functions.displayToast(
          'error',
          'top',
          appTexts.ALERT_MESSAGES.error,
          _.get(error, 'data.error.msg'),
        );
      }

      dispatch(resetOrderDetailsError());
      if (isRateOrderModalVisible) {
        setIsRateOrderModalVisible(false);
      }
      if (isRateProdModalVisible) {
        setIsRateProdModalVisible(false);
      }
      if (isCancelModalVisible) {
        setIsCancelModalVisibile(false);
        onBackButtonClick();
      }
    }
    /** Reorder error */
    if (reorderError && _.get(reorderError, 'data.success') === false) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        _.get(reorderError, 'data.error.msg'),
      );
      dispatch(resetReorderError());
    }
    /** Reorder success */
    if (reorderData && reorderData?.success == true) {
      dispatch(saveCartKey(reorderData?.data?.cart_key));
      // functions.displayToast(
      //   'success',
      //   'top',
      //   appTexts.CHECKOUT.success,
      //   _.get(reorderData, 'data.message'),
      // );
      dispatch(resetReorderSuccess());
      props.navigation.navigate('CartScreen');
    }

    /** Add to cart error */
    if (addToCartError && _.get(addToCartError, 'data.success') === false) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        _.get(addToCartError, 'data.error.msg'),
      );
      dispatch(resetAddToCartError());
    }
    /** Add to cart success */
    if (addCartData && addCartData.success == true) {
      functions.displayToast(
        'success',
        'top',
        appTexts.CHECKOUT.success,
        _.get(addCartData, 'message'),
      );
      if (addCartData.cart_key) {
        dispatch(saveCartKey(addCartData.cart_key));
      }
      dispatch(resetAddToCartSuccess());
      props.navigation.navigate('CartScreen');
    } else if (addCartData && addCartData.success === false) {
      if (addCartData.message === 'Cart key not exists') {
        functions.displayToast(
          'error',
          'top',
          _.get(addCartData, 'message'),
          'Please try again!',
        );
        dispatch(resetCartKey());
      }
      dispatch(resetAddToCartSuccess());
    }

    /** To make clicked suborder accordion active */
    if (orderDetails?.sub_orders && subOrderIndex.length === 0) {
      let found = false;
      orderDetails.sub_orders.map((item, index) => {
        if (item.id == subOrderId) {
          found = true;
          setSubOrderIndex([index]);
        }
      });
      if (found == false) {
        setSubOrderIndex([0]);
      }
    }
  };

  const onBackButtonClick = () => {
    props.navigation.navigate('ActiveDeliverScreen');
  };

  const itemClick = () => {
    props.navigation.navigate('EditaddressScreen');
  };

  const changeTab = index => {
    if (tabIndex !== index) {
      setTabIndex(index);
    }
    if (index === 0) {
    } else if (index === 1) {
    }
  };

  const openSupportModal = () => {
    setIsSupportModalVisibile(!isSupportModalVisible);
  };

  const supportCloseModal = () => {
    setIsSupportModalVisibile(!isSupportModalVisible);
  };

  const reorderAll = () => {
    Alert.alert(appTexts.ORDER.reorder, appTexts.ALERT_MESSAGES.reorderthis, [
      {
        text: appTexts.LOGOUT.cancel,
        onPress: () => console.log('Cancel Pressed'),
        // style: 'cancel',
      },
      {
        text: appTexts.STRING.yes,
        onPress: () => dispatch(reorder(id)),
      },
    ]);
  };

  reorderProduct = item => {
    const product_id = item?.product?.id;
    const product_type = item?.product?.product_type;
    const data = {
      product_id: product_id,
      cart_item_quantity: item?.item_count,
      product_type: product_type,
      variant_id1: item?.variant_id1,
      variant_id2: item?.variant_id2,
      item_id: item?.id,
    };
    Alert.alert(appTexts.ORDER.reorder, appTexts.ALERT_MESSAGES.reorderpro, [
      {
        text: appTexts.LOGOUT.cancel,
        onPress: () => console.log('Cancel Pressed'),
        // style: 'cancel',
      },
      {
        text: appTexts.STRING.yes,
        onPress: () => dispatch(addToCart(data, cartKey, false)),
      },
    ]);
  };

  const openCancelModal = () => {
    setIsCancelModalVisibile(!isCancelModalVisible);
  };

  const cancelCloseModal = () => {
    setIsCancelModalVisibile(!isCancelModalVisible);
  };

  const openrateOrderModal = () => {
    setIsRateOrderModalVisible(!isRateOrderModalVisible);
  };

  const closeratrorderModal = () => {
    setIsRateOrderModalVisible(!isRateOrderModalVisible);
  };

  const openRateProdModal = prodId => {
    setProdIdForReview(prodId);
    setIsRateProdModalVisible(!isRateProdModalVisible);
  };

  const closeRateProdModal = () => {
    setProdIdForReview(null);
    setIsRateProdModalVisible(!isRateProdModalVisible);
  };

  /** Add order review */
  const onSubmitOrderReview = reviewData => {
    const order_id = id;
    const newReviewData = { ...reviewData, order_id };
    dispatch(addOrderReview(newReviewData));
  };

  const onSubmitProductReview = reviewData => {
    dispatch(
      addProductReview({
        ...reviewData,
        product_id: prodIdForReview,
        order_id: id,
      }),
    );
  };

  const delivered = ['Delivered'].indexOf(orderDetails?.order_status) !== -1;

  return (
    <OrderDetailsView
      deliveredOrder={delivered}
      onBackButtonClick={onBackButtonClick}
      tabIndex={tabIndex}
      changeTab={changeTab}
      listData={[]}
      itemClick={itemClick}
      orderData={orderDetails}
      isSupportModalVisible={isSupportModalVisible}
      openSupportModal={openSupportModal}
      supportCloseModal={supportCloseModal}
      isLoading={isReorderLoading || isLoading || addCartIsLoading}
      reorder={reorderAll}
      openCancelModal={openCancelModal}
      cancelCloseModal={cancelCloseModal}
      isCancelModalVisible={isCancelModalVisible}
      reorderProduct={reorderProduct}
      onSubmitOrderReview={onSubmitOrderReview}
      openrateOrderModal={openrateOrderModal}
      closeratrorderModal={closeratrorderModal}
      isRateOrderModalVisible={isRateOrderModalVisible}
      orderReviewExecuting={orderReviewExecuting}
      onSubmitProductReview={onSubmitProductReview}
      prodReviewExecuting={prodReviewExecuting}
      openRateProdModal={openRateProdModal}
      closeRateProdModal={closeRateProdModal}
      isRateProdModalVisible={isRateProdModalVisible}
      subOrderIndex={subOrderIndex}
      setSubOrderIndex={setSubOrderIndex}
    />
  );
};

export default OrderDetailsScreen;
