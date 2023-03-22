import globals from './globals';
import { ERROR_SUFFIX, SUCCESS_SUFFIX } from '../actions/types';
import NetworkUtils from '../utility/NetworkUtility';
import callApi from './callApi';
import { I18nManager } from 'react-native';
//---------Dont forgot to change in constants/apiConstants--------//
//
const under_dev = false; //
// let productionURL = 'https://demo.kishk.app/'; //
let productionURL = 'https://kishk.app/'; //
let developmentURL = 'https://kishk.ourdemo.online/'; //
let baseURL = under_dev ? developmentURL : productionURL; //
//
//----------------------------------------------------------------//
let lang = I18nManager.isRTL ? '?language=ar' : '?language=en';
let getOtpAPI = 'api/login';
let getLogoutAPI = 'api/user-logout';
let loginAPI = 'api/verify';
let getPrivacyAPI = 'api/privacy-policy';
let getfaqAPI = 'api/faq';
let requestSupportApi = 'api/support';
let getTermsAPI = 'api/terms-and-conditions';
let getAboutAsAPI = 'api/about-as';
let termsAndConditionApi = 'api/terms-and-conditions';
let signupAPi = 'api/register';
let howToUse = 'api/useapp';
let resendAPI = 'api/resend';
let getEditUserAPI = 'api/profile';
let wishlistAPI = 'api/wishlist';
let NotificationCount = 'api/notification/count';
let NotificationBadgeReset = 'api/notification/badge';
let productsAPI = 'api/product_details';
let getSmsAPI = 'api/smscheck';
let addToCart = 'api/add-to-cart';
let guestAddToCart = 'api/guest_cart';
let cartsAPI = 'api/getCart';
let removeCart = 'api/remove-cart';
let removeCustAttr = 'api/delete-custom';

let delAddrAPI = 'api/address/delivery';
let billAddrAPI = 'api/address/billing';
let checkoutAPI = 'api/placeorder' + lang;
let paymentAPI = 'api/initialize-pay';
let orderDetailsApi = 'api/order-details';

let createaddressAPI = 'api/address/create';
let getdeliveryaddressAPI = 'api/address/delivery';
let getbillingaddressAPI = 'api/address/billing';
let selectAddressAPI = 'api/address/selected';

let editaddressAPI = 'api/edit-address';
let updateaddressAPI = 'api/address/update' + lang;
let removeaddressAPI = 'api/address/remove';

let reorderAPI = 'api/reorder/';
let customAttrSaveAPI = 'api/save-custom';
let customAttrEditAPI = 'api/edit-custom';

let changeLanguageApi = 'api/language';

export const GOOGLE_API_KEY = 'AIzaSyCPatOpRZSUVZpQCu-XpZBbhMM-mGXG030';
export const apiBaseURL = baseURL;

const apiHelper = {
  getBaseUrl: () => {
    return baseURL;
  },

  getAPIHeaderForDelete: (params, token) => {
    const AuthStr = 'Bearer '.concat(token);
    let headerConfig = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: AuthStr,
        Accept: 'application/json',
      },
      data: params,
    };
    return headerConfig;
  },

  getAPIHeader: token => {
    const AuthStr = 'Bearer '.concat(token);
    let headerConfig = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: AuthStr,
        Accept: 'application/json',
      },
    };
    return headerConfig;
  },

  getDelAddrAPI: () => {
    return delAddrAPI;
  },
  getBillAddrAPI: () => {
    return billAddrAPI;
  },
  getCheckoutAPI: () => {
    return checkoutAPI;
  },
  getPaymentAPI: () => {
    return paymentAPI;
  },
  selectAddrAPI: () => {
    return selectAddressAPI;
  },
  getLoginAPIHeader: () => {
    let headerConfig = {
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    };
    return headerConfig;
  },
  getOtpAPI: () => {
    return baseURL + getOtpAPI + lang;
  },
  getSmsStatusAPI: () => {
    return baseURL + getSmsAPI;
  },
  getSettingsAPI: () => {
    return getSmsAPI;
  },
  getProductsAPI: () => {
    return productsAPI;
  },
  changeLanguage: () => {
    return baseURL + changeLanguageApi
  },
  getCartsAPI: (coupon_code, Couponcode_apply, cartKey) => {
    let appendCode = '';
    if (coupon_code == null || coupon_code == '') {
      /** Enter here when no coupon or coupon removed */
      /** Coupon error displayed only if couponcode_apply parameter added */
      appendCode =
        Couponcode_apply === true
          ? `&couponcode_apply=` + true
          : '&couponcode_apply=' + false;
    } else {
      appendCode =
        `&coupon_code=${coupon_code}` +
        (Couponcode_apply === true
          ? `&couponcode_apply=` + true
          : `&couponcode_apply=` + false);
    }
    appendCode += `&cart_key=${cartKey}`;
    let fullurl = cartsAPI + lang
    return `${fullurl}${appendCode}`;
  },
  getOrderDetAPI: () => {
    return orderDetailsApi;
  },
  getRemoveCartAPI: () => {
    return removeCart + lang;
  },
  getRemoveCustAttrAPI: () => {
    return removeCustAttr + lang;
  },
  getAddToCartAPI: is_auth_required => {
    return is_auth_required ? addToCart + lang : guestAddToCart + lang;
  },
  getReorderAPI: id => {
    return `${reorderAPI}${id}` + lang;
  },
  getCustomAttrSaveAPI: () => {
    return `${customAttrSaveAPI}` + lang;
  },
  getCustomAttrEditAPI: () => {
    return `${customAttrEditAPI}`;
  },
  resendOtpAPI: () => {
    return baseURL + resendAPI + lang;
  },
  loginAPI: () => {
    return baseURL + loginAPI + lang;
  },
  logoutApi: () => {
    return baseURL + getLogoutAPI + lang;
  },

  getAPIHeaderMultipart: token => {
    const AuthStr = 'Bearer '.concat(token);
    let headerConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: AuthStr,
        Accept: 'application/json',
      },
    };
    return headerConfig;
  },

  getTermsAndConditionAPI: () => {
    return baseURL + getTermsAPI;
  },
  getAboutAsAPI: () => {
    return baseURL + getAboutAsAPI;
  },

  getPrivacyPolicyAPI: () => {
    return baseURL + getPrivacyAPI;
  },

  getFaqsAPI: () => {
    return baseURL + getfaqAPI;
  },

  RequestSupportApi: () => {
    return baseURL + requestSupportApi + lang;
  },

  TermsAPI: () => {
    return baseURL + termsAndConditionApi;
  },
  SignupAPI: () => {
    return baseURL + signupAPi + lang;
  },
  getHowToUseAPI: () => {
    console.log("***************", baseURL + howToUse)
    return baseURL + howToUse;
  },
  getWishlistAPI: () => {
    return baseURL + wishlistAPI;
  },
  getUserEditDetailsAPI: () => {
    return baseURL + getEditUserAPI;
  },
  getNotificationBadgeReset: () => {
    return baseURL + NotificationBadgeReset;
  },

  geteditaddressAPI: address_id => {
    return baseURL + editaddressAPI + '/' + address_id;
  },
  getupdateaddressAPI: () => {
    return baseURL + updateaddressAPI;
  },
  getremoveaddressAPI: address_id => {
    return baseURL + removeaddressAPI + '/' + address_id + lang;
  },
  createnewAddress: () => {
    return baseURL + createaddressAPI + lang;
  },
  getdeliveryAddress: () => {
    return baseURL + getdeliveryaddressAPI;
  },
  getbillingAddress: () => {
    return baseURL + getbillingaddressAPI;
  },
  getNotificationCount: () => {
    return baseURL + NotificationCount;
  },
};

export default apiHelper;

export const executeApiAction = (
  method,
  api,
  action,
  authorize = false,
  data = {},
  onSuccess = () => { },
  onError = () => { },
) => {
  const actionSuccess = action + SUCCESS_SUFFIX;
  const actionError = action + ERROR_SUFFIX;

  return async (dispatch, getState) => {
    try {
      dispatch({ type: action });

      const isConnected = await NetworkUtils.isNetworkAvailable();
      if (!isConnected) {
        throw new Error('Network Error');
      }

      const authorizationToken =
        authorize && getState().loginReducer?.userData?.data
          ? getState().loginReducer.userData.data.access_token
          : '';

      const response = await callApi(method, api, authorizationToken, data);
      if (response.status !== 200) {
        throw new Error();
      }

      dispatch({ type: actionSuccess, payload: response.data });
      onSuccess(response.data);
    } catch (error) {
      // if (error && error.message && error.message === 'Network Error')
      //   dispatch({type: actionError, payload: {data: {sucess: false, error: {msg: 'No Internet Connection!'}}}});

      if (error.response) {
        dispatch({
          type: actionError,
          payload: error.response,
        });

        onError(error.response);
      }
    }
  };
};
