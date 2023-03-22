import React, { useEffect, useState } from 'react';
import { BackHandler, I18nManager, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  /**Products */
  getProductContent,
  resetProductError,
  resetProductContent,
  /** Add cart */
  addToCart,
  resetAddToCartError,
  resetAddToCartSuccess,
  /** Save cart key */
  saveCartKey,
  resetCartKey,
  /** Wishlist */
  addRemoveToWishlist,
  /** Custom attr */
  custom_attr_save,
  reset_custom_attr_error,
  reset_custom_attr_success,
} from '../../actions';

import ProductDetailView from './ProductDetailView';
import globals from '../../lib/globals';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import _ from 'lodash';
import functions from '../../lib/functions';
import appTexts from '../../lib/appTexts';
import DeviceInfo from 'react-native-device-info';
import * as myOrderActions from '../../actions/myOrderActions';

import { firebase } from '@react-native-firebase/dynamic-links';
import Share from 'react-native-share';

const ProductDetailScreen = props => {
  const dispatch = useDispatch();
  const {
    isLoading,
    productData,
    addCartData,
    error,
    successMsg,
    cartKey,
    customAttrData,
    customAttrError,
  } = useSelector(state => state.product);
  const { userData, is_guest_logged_in, wishExecuting } = useSelector(state => ({
    userData: state.loginReducer.userData,
    is_guest_logged_in: state.loginReducer.is_guest_logged_in,
    wishExecuting: state.wishlistReducer.wishExecuting,
  }));

  const [isEditModalVisible, setIsEditModalVisibile] = useState(false);
  const [isColorPressed, setIsColorPressed] = useState(false);
  const [addCartPressed, setAddCartPressed] = useState(false);

  const [selectedData, setSelectedData] = useState({
    variant_id1: '',
    variant_id2: '',
    variant_selected: false,
  });
  const [loginRequired, setLoginRequired] = useState(false);
  const [customAttrModalVisible, setCustomAttrModalVisible] = useState(false);
  const [loader, setLoader] = useState(false);
  const [cart_item_id, setCart_item_id] = useState('');
  const [isAddToWishList, setIsAddToWishList] = useState(false);
  const product_id = props.route?.params?.id;
  const from = props.route?.params?.from;
  const [isRefresh, setIsRefresh] = useState(false);
  console.log("DETAILS !!!!!!!!!! from", from)
  console.log("DETAILS ############ ID", product_id)

  let uniqueId = DeviceInfo.getUniqueId();



  //mounted
  useEffect(() => handleComponentMounted(), [product_id]);

  useEffect(() => {
    if (!isLoading) {
      setIsRefresh(false);
    }
  }, [isLoading]);

  const handleComponentMounted = () => {
    dispatch(resetProductContent());
    dispatch(getProductContent(product_id, uniqueId));
    // setIsRefresh(false);
    // device back handling
    const onBackPress = () => {
      props.navigation.navigate('HomeScreen');
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  };

  const onRefreshContent = () => {
    setIsRefresh(true);
    handleComponentMounted();
  };
  //updated
  useEffect(() => handleComponentUpdated());

  const handleComponentUpdated = () => {
    /** Prdct fetch and add to cart error */
    if (error && _.get(error, 'data.success') === false) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        _.get(error, 'data.error.msg'),
      );
      dispatch(resetProductError());
      dispatch(resetAddToCartError());
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
    /** Add to cart success */
    if (addCartData && addCartData.success == true) {
      setCart_item_id(addCartData.cart_item_id);
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
      /** {from: otp} added to navigate back to home from cart */

      let product_Id = productData?.Product?.id;
      props.setIdProduct(productData?.Product?.id)
      props.navigation.navigate('CartScreen', { from: 'details', prID: productData?.Product?.id });
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
  };

  const onBackButtonClick = () => {
    props.navigation.navigate('HomeScreen');
  };

  const onColorPress = () => {
    setIsColorPressed(true);
  };

  const onAddtoClick = (skip_custom_attr = false, attr_data = {}) => {
    const cstm_attrs = getCustomAttributes();
    if (cstm_attrs.length > 0 && skip_custom_attr == false) {
      setTimeout(() => {
        setIsEditModalVisibile(true);
      }, 400);

      return false;
    }
    let all_attrs = [];
    if (cstm_attrs.length > 0) {
      for (dataKey in attr_data) {
        for (key in attr_data[dataKey]) {
          if (attr_data[dataKey].hasOwnProperty(key)) {
            all_attrs.push(attr_data[dataKey][key]);
          }
        }
      }
    }
    const product_id = productData?.Product?.id;
    const product_type = productData?.Product?.product_type;
    const data = {
      product_id: product_id,
      cart_item_quantity: 1,
      product_type: product_type,
      variant_id1: selectedData.variant_id1,
      variant_id2: selectedData.variant_id2,
      attribute: all_attrs,
    };
    if (from) {
      data.from = from;
    }
    dispatch(addToCart(data, cartKey, is_guest_logged_in));
  };

  const updateProductDetails = id => {
    dispatch(getProductContent(id, uniqueId));
  };

  const onHeartClick = (
    type = 'product',
    productId = productData?.Product?.id,
  ) => {
    if (type == 'share') {
      shareProduct();
    } else {
      if (is_guest_logged_in === true) {
        setIsAddToWishList(true);
        setLoginRequired(true);
        return false;
      }
      if (!wishExecuting) {
        dispatch(addRemoveToWishlist(productId));
      }
    }
  };

  const loginpage = () => {
    setLoginRequired(false);
    setIsAddToWishList(false);
    props.navigation.navigate('LoginStackNavigator', { screen: 'LoginScreen' });
  };

  //Share product
  const shareProduct = async () => {
    try {
      const product = productData?.Product;
      const cover_image = product?.cover_image;
      const productId = productData?.Product?.id;
      setLoader(true);
      const link = await firebase.dynamicLinks().buildShortLink(
        {
          link: 'https://invertase.io/' + Platform.OS + '/' + productId,
          domainUriPrefix: 'https://kishk.page.link',
          android: {
            packageName: 'com.kishk',
            minimumVersion: '18',
          },
          ios: {
            bundleId: 'org.ewaantech.kishk',
            appStoreId: '1566159856',
            minimumVersion: '18',
          },
          social: {
            title: 'KishkApp',
            imageUrl: cover_image,
          },
          analytics: {
            campaign: 'banner',
          },
        },
        'SHORT',
      );

      const lang = I18nManager.isRTL ? 'ar' : 'en';
      const lang_p = product?.lang.filter(item => {
        return item.language == lang;
      });
      const name = lang_p?.[0]?.name;
      setLoader(false);
      setTimeout(() => {
        const shareOptions = {
          title: 'Kink App',
          message:
            '‎Hi' +
            ' - Awesome product from Kishk. "' +
            name +
            '". Have a look! ' +
            link,
          // url: link,
          subject: 'Share Kish product',
        };
        Share.open(shareOptions);
      }, 400);
    } catch (err) {
      setLoader(false);
      console.log('err - share', err);
    }
  };

  const getCustomAttributes = () => {
    const attrs = productData?.custom_attributes || [];
    return attrs;
  };

  const onSubmitData = data => {
    setIsEditModalVisibile(false);
    onAddtoClick(true, data);
  };

  const submitItem = () => {
    setCustomAttrModalVisible(false);
    onAddtoClick();
  };

  return (
    <ProductDetailView
      onBackButtonClick={onBackButtonClick}
      onColorPress={onColorPress}
      isColorPressed={isColorPressed}
      onAddtoClick={onAddtoClick}
      productDetails={productData}
      setSelectedData={setSelectedData}
      selectedData={selectedData}
      addCartPressed={addCartPressed}
      setAddCartPressed={setAddCartPressed}
      isLoading={isLoading || loader}
      updateProductDetails={updateProductDetails}
      product_id={productData?.Product?.id}
      userData={userData}
      onHeartClick={onHeartClick}
      wishExecuting={wishExecuting}
      is_guest_logged_in={is_guest_logged_in}
      loginRequired={loginRequired}
      setLoginRequired={setLoginRequired}
      loginpage={loginpage}
      setIsAddToWishList={setIsAddToWishList}
      isAddToWishList={isAddToWishList}
      isEditModalVisible={isEditModalVisible}
      setIsEditModalVisibile={setIsEditModalVisibile}
      getCustomAttributes={getCustomAttributes}
      onSubmitData={onSubmitData}
      onRefreshContent={onRefreshContent}
      isRefresh={isRefresh}
      setCustomAttrModalVisible={setCustomAttrModalVisible}
      customAttrModalVisible={customAttrModalVisible}
      submitItem={submitItem}
    />
  );
};

const mapStateToProps = (state, props) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setIdProduct: myOrderActions.setProductID,
  }, dispatch);
};
const ProductDetailsScreenWithdRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailScreen);

ProductDetailsScreenWithdRedux.navigationOptions = ({ navigation }) => ({
  header: null
});
export default ProductDetailsScreenWithdRedux;
// export default ProductDetailScreen;
