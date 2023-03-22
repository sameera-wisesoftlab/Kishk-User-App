import * as ActionTypes from './types';
import apiHelper from '../lib/apiHelper';
import axios from 'react-native-axios';

export const apiServiceActionLoading = () => ({
  type: ActionTypes.GET_ORDER_LOADING,
});

export const apiServiceActionError = error => ({
  type: ActionTypes.GET_ORDER_ERROR,
  error: error,
});

export function updateOderToDeliver(responseData) {
  return {
    type: ActionTypes.GET_ORDER_TO_DELIVER_SUCCESS,
    responseData: responseData,
  };
}

export function updateOderToCollect(responseData) {
  return {
    type: ActionTypes.GET_ORDER_TO_COLLECT_SUCCESS,
    responseData: responseData,
  };
}
export function updateOderToReturn(responseData) {
  return {
    type: ActionTypes.GET_ORDER_TO_RETURN_SUCCESS,
    responseData: responseData,
  };
}
export const restTypesActionLoading = () => ({
  type: ActionTypes.REST_TYPE_LOADING,
});

export const notificationActiveAction = data => ({
  type: ActionTypes.NOTIFICATION_ACTIVE,
  data: data,
});

export const languageSwitchScreenAction = data => ({
  type: ActionTypes.LANGUAGE_SWITCH_SCREEN,
  data: data,
});

export function notificationActive(is_active) {
  return async dispatch => {
    dispatch(notificationActiveAction(is_active));
  };
}

export function languageSwitchScreen(screen) {
  return async dispatch => {
    dispatch(languageSwitchScreenAction(screen));
  };
}
export const NotificationCountSuccess = count => ({
  type: ActionTypes.NOTIFICATION_COUNT,
  responseData: count,
});
export function restTypesActionSuccess(responseData) {
  return {
    type: ActionTypes.REST_TYPE_SUCCESS,
    responseData: responseData,
  };
}
export const restTypesActionError = error => ({
  type: ActionTypes.REST_TYPE_ERROR,
  error: error,
});
export function getRestTypes() {
  return async dispatch => {
    dispatch(restTypesActionLoading());
    await axios
      .get(apiHelper.getRestTypeAPI())
      .then(response => {
        dispatch(restTypesActionSuccess(response.data.data));
      })
      .catch(error => {
        dispatch(restTypesActionError(error.response.data));
      });
  };
}

export function getNotificationCount(token) {
  return async dispatch => {
    // dispatch(apiServiceActionLoading());
    await axios
      .get(apiHelper.getNotificationCount(), apiHelper.getAPIHeader(token))
      .then(response => {
        dispatch(NotificationCountSuccess(response.data.data.count));
      })
      .catch(error => {
        // dispatch(apiServiceActionError(error.response.data.error));
      });
  };
}
export function notificationBadgeReset(token) {
  return async dispatch => {
    dispatch(apiServiceActionLoading());
    await axios
      .get(apiHelper.getNotificationBadgeReset(), apiHelper.getAPIHeader(token))
      .then(response => {
        // dispatch(NotificationCountSuccess(response.data.data.badge));
      })
      .catch(error => {
        // dispatch(apiServiceActionError(error.response.data.error));
      });
  };
}
