import * as ActionTypes from '../actions/types';

const defaultLoginState = {
  userData: {},
  isLogged: false,
  resetNavigation: undefined,
  isLoading: false,
  error: undefined,
  success: undefined,
  isIntroFinished: false,
  languageSelected: null,
  getotpAPIResponse: {},
  getotpAPIResponseError: {},
  logoutData: {},
  resendOtp: {},
  phone: '',
  otpAPIError: {},
  chosenLanguage: '',
  smsstatus: {},
  intro_finished: false,
  notificationCount: null,
  is_notification_active: false,
  is_guest_logged_in: false,
  isSmsDataLoading: false,
};

export default function loginReducer(state = defaultLoginState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_SERVICE_LOADING:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case ActionTypes.LANG_SWITCH:
      return Object.assign({}, state, {
        languageSelected: action.languageSelected,
      });

    case ActionTypes.INTRO_FINISHED:
      return Object.assign({}, state, {
        intro_finished: action.responseData,
      });

    case ActionTypes.LOGIN_SERVICE_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error,
      });
    case ActionTypes.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        userData: action.responseData,
        isLogged: true,
      });
    case ActionTypes.SMSSTATUS_LOADING:
      return Object.assign({}, state, {
        isSmsDataLoading: true,
      });
    case ActionTypes.SMSSTATUS_SUCCESS:
      console.log("$$$$$$$$$$$$$$$$", action.responseData)
      return Object.assign({}, state, {
        isSmsDataLoading: false,
        smsstatus: action.responseData,
      });
    case ActionTypes.SMS_ERROR:
      return Object.assign({}, state, {
        isSmsDataLoading: false,
        error: action.error,
      });
    case ActionTypes.RESET_LOGOUT_DATA:
      return Object.assign({}, state, {
        logoutData: {},
      });
    case ActionTypes.RESET_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: null,
      });
    case ActionTypes.LOGIN_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        otpAPIError: action.error,
      });

    case ActionTypes.OTP_VERIFY_SERVICE_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error,
      });
    case ActionTypes.RESET_OTP_ERROR:
      return Object.assign({}, state, {
        getotpAPIResponseError: null,
      });
    case ActionTypes.OTP_VERIFIED:
      return Object.assign({}, state, {
        isLoading: false,
        userData: action.responseData,
        isLogged: true,
      });
    case ActionTypes.NOTIFICATION_ACTIVE:
      return Object.assign({}, state, {
        is_notification_active: action.data,
      });
    case ActionTypes.NOTIFICATION_COUNT:
      return Object.assign({}, state, {
        isLoading: false,
        notificationCount: action.responseData,
      });
    case ActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        logoutData: action.responseData,
        userData: {},
        isLogged: false,
        isLoading: false,
        error: undefined,
        success: undefined,
        resetNavigation: action.resetNavigation,
        isSessionExpired: true,
      };
    case ActionTypes.GET_OTP_SERVICE_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        getotpAPIResponseError: action.error,
      });
    case ActionTypes.GET_OTP_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        getotpAPIResponse: action.responseData,
      });
    case ActionTypes.RESEND_OTP_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        resendOtp: action.responseData,
      });
    case ActionTypes.LANGUAGE_SELECTION_SUCCESS:
      return Object.assign({}, state, {
        chosenLanguage: action.responseData,
      });
    case ActionTypes.ADD_USER_WISHLIST_ITEM_IN_STATE:
      return {
        ...state,
        userData: addToWishlistProduct(state.userData, action.productId),
      };
    case ActionTypes.UPDATE_USER_WISHLIST_ITEM_IN_STATE:
      return {
        ...state,
        userData: toggleWishlistProduct(state.userData, action.productId),
      };
    case ActionTypes.GUEST_LOGIN:
      return Object.assign({}, state, {
        ...state,
        is_guest_logged_in: action.responseData,
      });

    default:
      return state;
  }
}

const toggleWishlistProduct = (userData, productId) => {
  const userDataInfo = userData?.data;
  let newWishList = [];

  if (userDataInfo && 'wishlist' in userDataInfo) {
    const { wishlist } = userDataInfo;
    //if (wishlist) {
    // check product Id already added in wishlist
    if (wishlist && wishlist.some(e => e.product_id === productId)) {
      // remove from wishlist
      newWishList = wishlist.filter(item => item.product_id !== productId);
      return { ...userData, data: { ...userDataInfo, wishlist: newWishList } };
    } else {
      // add to wishlist
      newWishList = [...wishlist, { product_id: productId }];
      return { ...userData, data: { ...userDataInfo, wishlist: newWishList } };
    }
    //}
  }
  return userData;
};

const addToWishlistProduct = (userData, productId) => {
  const userDataInfo = userData?.data;
  let newWishList = [];

  if (userDataInfo && 'wishlist' in userDataInfo) {
    const { wishlist } = userDataInfo;
    if (wishlist && wishlist.some(e => e.product_id === productId)) {
      //
    } else {
      // add to wishlist
      newWishList = [...wishlist, { product_id: productId }];
      return { ...userData, data: { ...userDataInfo, wishlist: newWishList } };
    }
  }
  return userData;
};
