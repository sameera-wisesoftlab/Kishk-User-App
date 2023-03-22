import * as ActionTypes from './types';
import apiHelper from '../lib/apiHelper';
import { defaultLoginState } from '../reducers/loginReducer';
import axios from 'react-native-axios';
import globals from '../lib/globals';

export const apiServiceActionLoading = () => ({
  type: ActionTypes.LOGIN_SERVICE_LOADING,
});

export const apiServiceActionError = error => ({
  type: ActionTypes.LOGIN_SERVICE_ERROR,
  error: error,
});

export function loginServiceActionSuccess(responseData, phone) {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    responseData: responseData,
    phone: phone,
  };
}
export function loginServiceActionError(responseData) {
  return {
    type: ActionTypes.LOGIN_ERROR,
    responseData: responseData,
  };
}

export function resendOtpServiceActionSuccess(responseData) {
  return {
    type: ActionTypes.RESEND_OTP_SUCCESS,
    responseData: responseData,
  };
}

export function resetError() {
  return {
    type: ActionTypes.RESET_ERROR,
  };
}
export function resetOtpError() {
  return {
    type: ActionTypes.RESET_OTP_ERROR,
  };
}
export function getOtpSuccess(responseData) {
  return {
    type: ActionTypes.GET_OTP_SUCCESS,
    responseData: responseData,
  };
}
export const otpServiceError = error => ({
  type: ActionTypes.GET_OTP_SERVICE_ERROR,
  error: error,
});
export const loginServiceError = error => ({
  type: ActionTypes.LOGIN_ERROR,
  error: error,
});
export const smsStatusServiceActionLoading = () => ({
  type: ActionTypes.SMSSTATUS_LOADING,
});
export const smsStatusServiceActionError = error => ({
  type: ActionTypes.SMS_ERROR,
  error: error,
});
export const loginServiceActionLoading = () => ({
  type: ActionTypes.LOGIN_SERVICE_LOADING,
});
export const smsStatusServiceActionSuccess = responseData => ({
  type: ActionTypes.SMSSTATUS_SUCCESS,
  responseData: responseData,
});
export function resetSmsStatus() {
  return async dispatch => {
    dispatch(smsStatusServiceActionSuccess(null));
  };
}
export function getSmsStatus() {
  return async dispatch => {
    dispatch(smsStatusServiceActionLoading());
    await axios
      .get(apiHelper.getSmsStatusAPI())
      .then(response => {
        dispatch(smsStatusServiceActionSuccess(response.data));
      })
      .catch(error => {
        dispatch(smsStatusServiceActionError(error.response.data.message));
      });
  };
}
export function getOtp(params) {
  return async dispatch => {
    dispatch(loginServiceActionLoading());
    await axios
      .post(apiHelper.getOtpAPI(), params)
      .then(response => {
        dispatch(getOtpSuccess(response.data));
      })
      .catch(error => {
        dispatch(otpServiceError(error.response.data));
      });
  };
}

export function resendOtp(apiParam) {
  return async dispatch => {
    dispatch(apiServiceActionLoading());
    await axios
      .post(apiHelper.resendOtpAPI(), apiParam)
      .then(response => {
        dispatch(resendOtpServiceActionSuccess(response.data));
      })
      .catch(error => {
        //dispatch(apiServiceActionError(error.response.data.message));
      });
  };
}

export function otpVerifyServiceActionSuccess(responseData) {
  return {
    type: ActionTypes.OTP_VERIFIED,
    responseData: responseData,
  };
}

export const verifyOtpApiServiceActionError = error => ({
  type: ActionTypes.OTP_VERIFY_SERVICE_ERROR,
  error: error,
});

export function introFinished(responseData) {
  return {
    type: ActionTypes.INTRO_FINISHED,
    responseData: responseData,
  };
}

export function reset_SMS(responseData) {
  return {
    type: ActionTypes.RESET_SMS,
    responseData: responseData,
  };
}

export function is_intro_finished(is_finished) {
  return async dispatch => {
    dispatch(introFinished(is_finished));
  };
}

export function languageSelectionSuccess(responseData) {
  return {
    type: ActionTypes.LANGUAGE_SELECTION_SUCCESS,
    responseData: responseData,
  };
}

export function saveSelectedLanguage(language, token) {

  let params = {
    "lang": language
  }

  return async dispatch => {
    dispatch(languageSelectionSuccess(language));
    //dispatch(apiServiceActionLoading());
    await axios
      .post(apiHelper.changeLanguage(), params, apiHelper.getAPIHeader(token))
      .then(response => {
        // console.log("!!!!!!!!!!!!!!!", response.data)
        // dispatch(loginServiceActionSuccess(response.data));
      })
      .catch(error => {
        // console.log("!!!!!!!!!!!!!!!", error.response.data)
        // dispatch(loginServiceError(error.response.data));
      });
  };
}

export function doLogin(params) {
  return async dispatch => {
    dispatch(apiServiceActionLoading());
    await axios
      .post(apiHelper.loginAPI(), params, apiHelper.getLoginAPIHeader())
      .then(response => {
        dispatch(loginServiceActionSuccess(response.data));
      })
      .catch(error => {
        dispatch(loginServiceError(error.response.data));
      });
  };
}

export function doVerifyOtp(params) {
  return async dispatch => {
    dispatch(apiServiceActionLoading());
    // await axios.post(apiHelper.getOtpVerifyAPI(), params)
    // 	.then(response => {
    // 		dispatch(otpVerifyServiceActionSuccess(response.data));
    // 	}).catch(error => {
    // 		dispatch(verifyOtpApiServiceActionError(error.response.data.error));
    // 	});
  };
}

export function resetLoginErrorMeesage() {
  return dispatch => {
    return dispatch({
      type: ActionTypes.RESET_LOGIN_ERROR_MESSAGE,
    });
  };
}

export function doLogout(resetNavigation: Function) {
  return dispatch => {
    dispatch({
      type: ActionTypes.LOGOUT_SUCCESS,
      ...defaultLoginState,
      resetNavigation,
    });
  };
}

export function enableLogin() {
  return dispatch => {
    return dispatch({
      type: ActionTypes.ENABLE_LOGIN_SUCCESS,
    });
  };
}

export function guestLoginAction(login) {
  return {
    type: ActionTypes.GUEST_LOGIN,
    responseData: login,
  };
}

export function guestLogin(login) {
  return async dispatch => {
    dispatch(guestLoginAction(login));
  };
}
