import React, { useEffect, useState } from 'react';
import CartScreenView from './CartScreenView';
import globals from '../../lib/globals';
import { useDispatch, useSelector } from 'react-redux';
import {
  /** Cart */
  getCartContent,
  resetCartError,
  /** Add cart */
  addToCart,
  resetAddToCartError,
  resetAddToCartSuccess,
  /** Remove cart */
  removeCart,
  resetRemoveCartError,
  resetRemoveCartSuccess,
  /** Save cart key */
  saveCartKey,
  resetCartKey,
  /** Promocode */
  savePromocode,
  resetPromocode,
  /** Move to wishlist */
  moveToWishlistFromCart,
  resetWishlistMessage,
  addRemoveToWishlist,
  /** Custom attr edit */
  custom_attr_edit,
  reset_custom_attr_edit_error,
  reset_custom_attr_edit_success,
  reset_custom_attr_dataloaded_success,
  /** Custom attr */
  custom_attr_save,
  reset_custom_attr_error,
  reset_custom_attr_success,
  /** save cart count */
  saveCartCount,
  /** Remove cust attr */
  removeCustomAttr,
  resetRemoveCustomAttrSuccess,
  resetRemoveCustomAttrError,
  /** Sms enabled */
  getSettingsContent,
  resetSettingsError,
  resetSettingsTempData,
} from '../../actions';

import functions from '../../lib/functions';
import appTexts from '../../lib/appTexts';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import _ from 'lodash';
import { Alert, BackHandler, ToastAndroid } from 'react-native';
import { cos } from 'react-native-reanimated';

const CartScreen = props => {
  const dispatch = useDispatch();
  const {
    isLoading,
    cartData,
    error,
    addCartData,
    removeCartData,
    cartKey,
    promocode,
    /** Edit cstm attr */
    customAttrEditData,
    customAttrEditError,
    editDataLoaded,
    /** Save cstm attr */
    customAttrData,
    customAttrError,
    successMsg,
    /** Cart count */
    cartCount,
    product_idd,
    /** Remove cust attr */
    removeCustAttrData,
  } = useSelector(state => state.product);
  // const { from, prID } = props?.route?.params

  const { wishlistSucess, wishlistError } = useSelector(
    state => state.wishlistReducer,
  );

  const { userData, is_guest_logged_in } = useSelector(
    state => state.loginReducer,
  );

  const { settingsData, settingsError, isSettingsLoading, tempSettingsData } =
    useSelector(state => state.settings);

  const [isEditModalVisible, setIsEditModalVisibile] = useState(false);
  const [loginRequired, setLoginRequired] = useState(false);
  const [cart_item_id, setCart_item_id] = useState('');
  const [editItemdata, setEditItemdata] = useState({});
  const [editItemCurrentQty, setEditItemCurrentQty] = useState(0);
  const [isWishlistModalVisible, setIsWishlistModalVisibile] = useState(false);
  const [isAddCustomAttr, setIsAddCustomAttr] = useState(false);
  const [isRemoveCustomItem, setIsRemoveCustomItem] = useState(false);
  const [isLoginPressed, setIsLoginPressed] = useState(false);
  const [isAddToWishList, setIsAddToWishList] = useState(false);
  const from = props?.route?.params?.from
  const prID = props?.route?.params?.prID
  //will focus
  useEffect(() => {

    return props.navigation.addListener('focus', () => {
      dispatch(getCartContent(promocode, () => { }, false, cartKey));
      const backAction = () => {
        props.navigation.navigate('HomeScreen');
        return true;
      };
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        (backPressed = () => {

          if (props?.route?.params?.from == 'otp') {
            props.navigation.setParams({ from: '' });
            props.navigation.navigate('HomeScreen');
          }
          else if (from === 'details') {
            props.navigation.setParams({ from: '' });
            props.navigation.navigate('ProductDetailScreen', {
              id: prID,
              from: 'cartScreen',
            });
          }
          else {
            props.navigation.goBack();
          }
          return true;
        }),
      );

      return () => backHandler.remove();
    });
  }, [props.navigation, promocode, prID, cartKey]);

  useEffect(() => {
    const backAction = () => {
      props.navigation.navigate('HomeScreen');
      return true;
    };
    // setProID(props?.route?.params?.prID)
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      (backPressed = () => {
        if (props?.route?.params?.from == 'otp') {
          props.navigation.setParams({ from: '' });
          props.navigation.navigate('HomeScreen');
        }
        else if (props?.route?.params?.from == 'details') {
          props.navigation.setParams({ from: '' });
          props.navigation.navigate('ProductDetailScreen', {
            id: prID,
            from: 'cartScreen',
          });
        }
        else {
          props.navigation.goBack();
        }
        return true;
      }),
    );

    return () => backHandler.remove();
  }, [props.navigation, promocode, prID, cartKey]);

  //mounted
  useEffect(() => handleComponentMounted(), []);

  const handleComponentMounted = () => {
    dispatch(getCartContent(promocode, () => { }, false, cartKey));
  };

  //unmount
  useEffect(() => {
    return () => {
      handleComponentUnmount();
    };
  }, []);

  const handleComponentUnmount = () => { };

  //updated
  useEffect(() => handleComponentUpdated());

  const handleComponentUpdated = () => {
    /** Product fetch */
    if (error && _.get(error, 'data.success') === false) {
      if (error?.data?.error?.coupon_code === false) {
        dispatch(getCartContent(null, () => { }, false, cartKey));
      }
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        _.get(error, 'data.error.msg'),
      );
      dispatch(resetCartError());
      dispatch(resetRemoveCartError());
      dispatch(resetAddToCartError());
      dispatch(resetRemoveCustomAttrError());
    }
    /** Custom attr fetch error*/
    if (
      customAttrEditError &&
      _.get(customAttrEditError, 'data.success') === false
    ) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        _.get(customAttrEditError, 'data.error.msg'),
      );
      dispatch(reset_custom_attr_edit_error());
    }
    /** Item removed success */
    if (removeCartData && removeCartData.success == true) {
      functions.displayToast(
        'success',
        'top',
        appTexts.CHECKOUT.success,
        _.get(removeCartData, 'message'),
      );
      setIsAddCustomAttr(false);
      setIsRemoveCustomItem(false);
      dispatch(resetRemoveCartSuccess());
      dispatch(getCartContent(promocode, callbackGetdata, false, cartKey));
    }
    /** Custom Attr removed success */
    if (removeCustAttrData && removeCustAttrData.success == true) {
      console.log(removeCustAttrData);
      functions.displayToast(
        'success',
        'top',
        appTexts.CHECKOUT.success,
        _.get(removeCustAttrData, 'msg'),
      );
      dispatch(resetRemoveCustomAttrSuccess());
      dispatch(getCartContent(promocode, () => { }, false, cartKey));
    }

    const coupon_code = cartData?.cartDetails?.coupon_code || '';
    if (coupon_code && promocode !== coupon_code) {
      dispatch(savePromocode(coupon_code));
    }
    if (promocode && !coupon_code) {
      dispatch(resetPromocode());
    }
    /** Cart count update */
    const items = cartData?.cartDetails?.items;
    if (items) {
      const _length = items.length;
      if (_length != cartCount) {
        dispatch(saveCartCount(_length));
      }
    }

    /** Custom attr save success */
    if (customAttrData && customAttrData.success == true) {
      functions.displayToast(
        'success',
        'top',
        appTexts.CHECKOUT.success,
        _.get(customAttrData, 'msg'),
      );
      dispatch(reset_custom_attr_edit_success());
      dispatch(reset_custom_attr_success());
      // props.navigation.navigate('CartScreen');
    }
    /** Custom attr save error */
    if (customAttrError && _.get(customAttrError, 'data.success') === false) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        _.get(customAttrError, 'data.error.msg'),
      );
      setTimeout(() => {
        setIsEditModalVisibile(true);
      }, 2000);
      dispatch(reset_custom_attr_error());
    }
    /** Custom attr data fetch success*/
    if (editDataLoaded) {
      dispatch(reset_custom_attr_dataloaded_success());
      setIsEditModalVisibile(true);
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

    /** Login for guest user */
    if (isLoginPressed == true && tempSettingsData?.success === true) {
      if (tempSettingsData?.data?.sms == 'enable') {
        props.navigation.navigate('LoginStackNavigator', {
          screen: 'LoginScreen',
        });
      } else {
        props.navigation.navigate('LoginStackNavigator', {
          screen: 'EmailLoginScreen',
        });
      }
      setIsLoginPressed(false);
      dispatch(resetSettingsTempData());
    }
  };

  useEffect(() => {
    if (wishlistSucess || wishlistError) {
      functions.displayToast(
        wishlistSucess ? 'success' : 'error',
        'top',
        wishlistSucess
          ? appTexts.CHECKOUT.success
          : appTexts.ALERT_MESSAGES.error,
        wishlistSucess || wishlistError,
      );
      dispatch(resetWishlistMessage());
    }
    if (isWishlistModalVisible) {
      setIsWishlistModalVisibile(false);
    }
  }, [wishlistSucess, wishlistError]);

  const callbackGetdata = data => {
    const items =
      typeof data?.data?.cartDetails?.items !== 'undefined'
        ? data?.data.cartDetails?.items
        : [];
    const _length = items.length;
    if (_length == 0 && cartKey != '') {
      dispatch(resetCartKey());
    }
    if (_length == 0) {
      dispatch(resetPromocode());
    }
  };

  const onCheckoutClick = () => {
    if (is_guest_logged_in === true) {
      setLoginRequired(true);
      return false;
    }
    props.navigation.navigate('CheckoutScreen1');
  };

  const onBackButtonClick = () => {
    if (props?.route?.params?.from == 'otp') {
      props.navigation.setParams({ from: '' });
      props.navigation.navigate('HomeScreen');
    } else {
      props.navigation.goBack();
    }
  };

  const updateCart = (data, qty, current_qty, item_type, all_attrs = []) => {
    let cart_item_quantity = parseInt(current_qty) + parseInt(qty);
    if (qty == 0) {
      cart_item_quantity = 0;
    }
    const product_id = data?.product_id;
    const product_type = data?.product_type;
    const _data = {
      product_id: product_id,
      cart_item_quantity: cart_item_quantity,
      product_type: product_type,
      variant_id1: data?.variant1,
      variant_id2: data?.variant2,
    };
    if (all_attrs.length > 0) {
      _data.attribute = all_attrs;
    }
    const _cartKey = cartData?.cartDetails?.cart_key;
    if (cart_item_quantity == 0) {
      Alert.alert(
        appTexts.CART.remove,
        appTexts.ALERT_MESSAGES.remove_cart,
        [
          { text: appTexts.STRING.yes, onPress: () => dispatch(removeCart(_data, _cartKey)) },
          {
            text: appTexts.LOGOUT.cancel,
            onPress: () => null,
          },
        ],
        { cancelable: true },
      );
    } else {
      if (item_type == 'custom' && qty === 1) {
        fetchEditDetails(data.id);
        setCart_item_id(cart_item_id);
        setEditItemdata(data);
        setEditItemCurrentQty(current_qty);
        setIsAddCustomAttr(true);
        // setIsEditModalVisibile(true);
      } else if (item_type == 'custom' && qty === -1) {
        fetchEditDetails(data.id);
        setCart_item_id(cart_item_id);
        setEditItemdata(data);
        setEditItemCurrentQty(current_qty);
        setIsRemoveCustomItem(true);
        // setIsEditModalVisibile(true);
      } else {
        dispatch(removeCart(_data, _cartKey));
      }
    }
  };

  const applyCode = coupon_code => {
    if (coupon_code == '' || coupon_code == null) {
      /** Remove promocode */
      dispatch(resetPromocode());
      // return true;
    }
    dispatch(getCartContent(coupon_code, () => { }, true, cartKey));
  };

  const moveToWishlist = data => {
    if (is_guest_logged_in === true) {
      setIsAddToWishList(true);
      setLoginRequired(true);
      return false;
    }

    const cartItemId = data?.id;
    const _cartKey = cartData?.cartDetails?.cart_key;
    const product_id = data?.product.id;

    Alert.alert(
      appTexts.CART.remove,
      appTexts.STRING.movewish,
      [
        {
          text: appTexts.STRING.yes,
          onPress: () => {
            dispatch(
              moveToWishlistFromCart(
                cartItemId,
                _cartKey,
                product_id,
                res => {
                  functions.displayToast(
                    'success',
                    'top',
                    appTexts.CHECKOUT.success,
                    res.msg,
                  );
                  // on success refresh cart content
                  dispatch(
                    getCartContent(
                      promocode,
                      res => {
                        // redirect to home if cart is empty
                        const cartItems = res.data?.cartDetails?.items;
                        if (cartItems && cartItems.length === 0) {
                          props.navigation.navigate('HomeScreen');
                        }
                      },
                      false,
                      cartKey,
                    ),
                  );
                  // dispatch(addRemoveToWishlist(product_id));
                },
                err => {
                  functions.displayToast(
                    'error',
                    'top',
                    appTexts.ALERT_MESSAGES.error,
                    err?.data?.error.msg,
                  );
                },
              ),
            );
          },
        },
        {
          text: appTexts.LOGOUT.cancel,
          onPress: () => null,
        },
      ],
      { cancelable: true },
    );
  };

  const loginpage = () => {
    setIsAddToWishList(false);
    setLoginRequired(false);
    setIsLoginPressed(true);
    dispatch(getSettingsContent());
  };

  const homePage = () => {
    setIsAddToWishList(false);
    setLoginRequired(false);
  };

  const addProductToCart = productId => {
    props.navigation.navigate('ProductDetailScreen', {
      id: productId,
      from: 'wishlist',
    });
  };

  const fetchEditDetails = cart_item_id => {
    setCart_item_id(cart_item_id);
    dispatch(custom_attr_edit({ cart_item_id: cart_item_id }));
  };

  const onSubmitData = (_data, isAdd) => {
    let all_attrs = [];
    for (dataKey in _data) {
      for (key in _data[dataKey]) {
        if (_data[dataKey].hasOwnProperty(key)) {
          all_attrs.push(_data[dataKey][key]);
        }
      }
    }
    setIsEditModalVisibile(false);
    if (isAdd === true) {
      updateCart(editItemdata, 1, editItemCurrentQty, '', all_attrs);
    } else {
      let formatted_data = {
        cart_item_id: cart_item_id,
        attribute: [],
      };
      formatted_data.attribute = all_attrs;
      dispatch(custom_attr_save(formatted_data));
    }
  };

  const openWishlistModal = () => {
    setIsWishlistModalVisibile(!isWishlistModalVisible);
  };

  const closeWishlistModal = () => {
    setIsWishlistModalVisibile(!isWishlistModalVisible);
  };

  const gotoHome = () => {
    props.navigation.navigate('HomeScreen');
  };

  const removeAttr = item_order => {
    setIsAddCustomAttr(false);
    setIsRemoveCustomItem(false);
    setIsEditModalVisibile(false);
    Alert.alert(
      appTexts.CART.remove,
      appTexts.ALERT_MESSAGES.remove_cart,
      [
        {
          text: appTexts.STRING.yes,
          onPress: () =>
            dispatch(
              removeCustomAttr({
                cart_item_id: cart_item_id,
                item_order: item_order,
              }),
            ),
        },
        {
          text: appTexts.LOGOUT.cancel,
          onPress: () => null,
        },
      ],
      { cancelable: true },
    );
  };

  return (
    <CartScreenView
      gotoHome={gotoHome}
      onBackButtonClick={onBackButtonClick}
      onCheckoutClick={onCheckoutClick}
      cartData={cartData}
      updateCart={updateCart}
      isLoading={isLoading || isSettingsLoading}
      applyCode={applyCode}
      userData={userData}
      onHeartClick={moveToWishlist}
      is_guest_logged_in={is_guest_logged_in}
      loginpage={loginpage}
      homePage={homePage}
      loginRequired={loginRequired}
      addProductToCart={addProductToCart}
      isEditModalVisible={isEditModalVisible}
      setIsEditModalVisibile={show => {
        if (show === false) {
          setIsAddCustomAttr(false);
          setIsRemoveCustomItem(false);
        }
        setIsEditModalVisibile(show);
      }}
      fetchEditDetails={fetchEditDetails}
      custom_attrs={customAttrEditData?.data?.data || []}
      custom_image={customAttrEditData?.data?.custom_image || null}
      onSubmitData={onSubmitData}
      isWishlistModalVisible={isWishlistModalVisible}
      openWishlistModal={openWishlistModal}
      closeWishlistModal={closeWishlistModal}
      isAddCustomAttr={isAddCustomAttr}
      isRemoveCustomItem={isRemoveCustomItem}
      removeAttr={removeAttr}
      isAddToWishList={isAddToWishList}
    />
  );
};
export default CartScreen;
