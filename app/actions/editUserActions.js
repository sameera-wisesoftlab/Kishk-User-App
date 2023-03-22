import * as ActionTypes from './types';
import apiHelper from '../lib/apiHelper';
import {defaultEditUserState} from '../reducers/editUserReducer';
import axios from 'react-native-axios';
import globals from '../lib/globals';
import {Alert} from 'react-native';

export const apiServiceActionLoading = () => ({
  type: ActionTypes.EDIT_USER_LOADING,
});

export const apiServiceActionError = error => ({
  type: ActionTypes.EDIT_USER_ERROR,
  error: error,
});

export const logoutErrorReset = error => ({
  type: ActionTypes.LOGOUT_ERROR_RESET,
  error: error,
});

export function resetLogoutError() {
  return async dispatch => {
    dispatch(logoutErrorReset(null));
    dispatch(LogoutSuccess({}));
  };
}

export function GetUserDetailsSuccess(responseData) {
  return {
    type: ActionTypes.EDIT_USER_SUCCESS,
    responseData: responseData,
  };
}
export function UpdateUserDetailsSuccess(responseData) {
  return {
    type: ActionTypes.UPDATE_USER_SUCCESS,
    responseData: responseData,
  };
}
export function LogoutSuccess(responseData) {
  return {
    type: ActionTypes.LOGOUT_SUCCESS,
    responseData: responseData,
  };
}

export const resetLogoutDataAction = () => ({
  type: ActionTypes.RESET_LOGOUT_DATA,
});

export function resetLogoutData(token) {
  return async dispatch => {
    dispatch(resetLogoutDataAction());
  };
}

export const resetallData = () => ({
  type: ActionTypes.LOGOUT_SUCCESS,
});

export function doLogout(token) {
  return async dispatch => {
    dispatch(apiServiceActionLoading());
    await axios
      .post(apiHelper.logoutApi(), {}, apiHelper.getAPIHeader(token))
      .then(response => {
        dispatch(LogoutSuccess(response.data));
      })
      .catch(error => {
        dispatch(apiServiceActionError(error.response.data.error));
      });
  };
}

export function doUserDetailsEdit(token) {
  return async dispatch => {
    dispatch(apiServiceActionLoading());
    await axios
      .get(apiHelper.getUserEditDetailsAPI(), apiHelper.getAPIHeader(token))
      .then(response => {
        dispatch(GetUserDetailsSuccess(response.data));
      })
      .catch(error => {
        dispatch(apiServiceActionError(error.response.data.error));
      });
  };
}
