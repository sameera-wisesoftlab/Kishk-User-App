import * as ActionTypes from './types';
import apiHelper from '../lib/apiHelper';
import { defaultLoginState } from '../reducers/loginReducer';
import axios from 'react-native-axios';
import globals from '../lib/globals';
import _ from 'lodash';

export const apiServiceActionLoading = () => ({
  type: ActionTypes.HOWTOUSE_LOADING,
});
export const apiServiceActionError = () => ({
  type: ActionTypes.LOGIN_SERVICE_LOADING,
});

export function termsServiceActionSuccess(responseData) {
  return {
    type: ActionTypes.TERMS_SUCCESS,
    responseData: responseData,
  };
}
export function termsServiceActionError(responseData) {
  return {
    type: ActionTypes.TERMS_ERROR,
    responseData: responseData,
  };
}
export function aboutAsActionSuccess(responseData) {
  return {
    type: ActionTypes.ABOUT_SUCCESS,
    responseData: responseData,
  };
}
export function aboutAsActionError(responseData) {
  return {
    type: ActionTypes.ABOUT_ERROR,
    responseData: responseData,
  };
}

export function privacyActionSuccess(responseData) {
  return {
    type: ActionTypes.PRIVACY_SUCCESS,
    responseData: responseData,
  };
}
export function privacyActionError(responseData) {
  return {
    type: ActionTypes.TERMS_ERROR,
    responseData: responseData,
  };
}
export function faqsActionSuccess(responseData) {
  return {
    type: ActionTypes.FAQS_SUCCESS,
    responseData: responseData,
  };
}

export function faqsActionError(responseData) {
  return {
    type: ActionTypes.FAQS_ERROR,
    responseData: responseData,
  };
}

export function termsAndConditions() {
  return async dispatch => {
    dispatch(apiServiceActionLoading());
    await axios
      .get(apiHelper.getTermsAndConditionAPI())
      .then(response => {
        dispatch(termsServiceActionSuccess(response.data));
      })
      .catch(error => {
        dispatch(termsServiceActionError(error.response.data.error));
      });
  };
}
export function aboutAs() {
  return async dispatch => {
    dispatch(apiServiceActionLoading());
    await axios
      .get(apiHelper.getAboutAsAPI())
      .then(response => {
        dispatch(aboutAsActionSuccess(response.data));
      })
      .catch(error => {
        dispatch(aboutAsActionError(error.response.data.error));
      });
  };
}

export function privacyPolicy() {
  return async dispatch => {
    dispatch(apiServiceActionLoading());
    await axios
      .get(apiHelper.getPrivacyPolicyAPI())
      .then(response => {
        dispatch(privacyActionSuccess(response.data));
      })
      .catch(error => {
        dispatch(privacyActionError(error.response.data.error));
      });
  };
}

export function faqs() {
  return async dispatch => {
    dispatch(apiServiceActionLoading());
    await axios
      .get(apiHelper.getFaqsAPI())
      .then(response => {
        dispatch(faqsActionSuccess(response.data));
      })
      .catch(error => {
        dispatch(faqsActionError(error.response.data.error));
      });
  };
}
export function howToUseSuccess(responseData) {
  return {
    type: ActionTypes.HOWTOUSE_SUCCESS,
    responseData: responseData,
  };
}
export function howToUseError(responseData) {
  return {
    type: ActionTypes.HOWTOUSE_ERROR,
    responseData: responseData,
  };
}

export function howToUseApp() {
  return async dispatch => {
    dispatch(apiServiceActionLoading());
    await axios
      .get(apiHelper.getHowToUseAPI())
      .then(response => {
        dispatch(howToUseSuccess(response.data));
      })
      .catch(error => {
        dispatch(howToUseError(error.response.data.error));
      });
  };
}

export function resetError() {
  return {
    type: ActionTypes.RESET_ERROR,
  };
}
