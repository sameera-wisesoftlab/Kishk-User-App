import * as ActionTypes from './types';
import apiHelper from '../lib/apiHelper';
import {defaultLoginState} from '../reducers/loginReducer';
import axios from 'react-native-axios';
import globals from '../lib/globals';
import _ from 'lodash';

export const apiServiceActionLoading = () => ({
  type: ActionTypes.SIGNUP_LOADING,
});
export const apiServiceActionError = () => ({
  type: ActionTypes.LOGIN_SERVICE_LOADING,
});

export const termsActionError = error => ({
  type: ActionTypes.TERMS_ERROR,
  error: error,
});

export function SignupActionSuccess(responseData) {
  return {
    type: ActionTypes.SIGNUP_SUCCESS,
    responseData: responseData,
  };
}

export const SignupActionError = error => ({
  type: ActionTypes.SIGNUP_ERROR,
  error: error,
});

export function resetSuccess() {
  return {
    type: ActionTypes.CLEAR_SIGNUP_CHAT_MSG,
    // type: ActionTypes.SIGNUP_SUCCESS,
    // responseData: {}
  };
}

export function signupdetailsActionReset() {
  return {
    type: ActionTypes.SIGNUP_SUCCESS,
    responseData: {},
  };
}

export function signupSubmitSend(params) {
  return async dispatch => {
    dispatch(apiServiceActionLoading());
    await axios
      .post(apiHelper.SignupAPI(), params)
      .then(response => {
        dispatch(SignupActionSuccess(response.data));
      })
      .catch(error => {
        dispatch(SignupActionError(error.response.data));
      });
  };
}

export function signupActionReset() {
  return async dispatch => {
    dispatch(signupdetailsActionReset());
  };
}
