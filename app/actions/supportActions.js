import * as ActionTypes from './types';
import apiHelper from '../lib/apiHelper';
import {defaultLoginState} from '../reducers/loginReducer';
import axios from 'react-native-axios';
import globals from '../lib/globals';
import _ from 'lodash';

export const apiServiceActionLoading = () => ({
  type: ActionTypes.SUPPORT_CHAT_SERVICE_LOADING,
});

export function requestSupportActionSuccess(responseData) {
  return {
    type: ActionTypes.SUPPORT_CHAT_SERVICE_SUCCESS,
    responseData: responseData,
  };
}
export function requestSupportActionError(responseData) {
  return {
    type: ActionTypes.SUPPORT_CHAT_SERVICE_ERROR,
    error: error,
  };
}
export function supportRequestSend(params, token) {
  return async dispatch => {
    dispatch(apiServiceActionLoading());
    await axios
      .post(
        apiHelper.RequestSupportApi(),
        params,
        apiHelper.getAPIHeader(token),
      )
      .then(response => {
        dispatch(requestSupportActionSuccess(response.data));
      })
      .catch(error => {
        dispatch(requestSupportActionError(error.response.data.error));
      });
  };
}
export function resetSuccess() {
  return {
    type: ActionTypes.CLEAR_SUPPORT_CHAT_MSG,
  };
}

export function resetError() {
  return {
    type: ActionTypes.RESET_ERROR,
  };
}
