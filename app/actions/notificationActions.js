import * as ActionTypes from './types';

export function receivedAction(is_recived) {
  return {
    type: ActionTypes.NOTIFICATION_RECEIVED,
    responseData: is_recived,
  };
}

export function notificationReceived(is_recived) {
  return async dispatch => {
    dispatch(receivedAction(is_recived));
  };
}

export function notificationDataAction(data) {
  return {
    type: ActionTypes.NOTIFICATION_RECEIVED_DATA,
    responseData: data,
  };
}

export function notificationData(data) {
  return async dispatch => {
    dispatch(notificationDataAction(data));
  };
}

export function redirectToNotificationDetailsAction(data) {
  return {
    type: ActionTypes.NOTIFICATION_REDIRECT,
    responseData: data,
  };
}

export function redirectToNotificationDetails(data) {
  return async dispatch => {
    dispatch(redirectToNotificationDetailsAction(data));
  };
}
