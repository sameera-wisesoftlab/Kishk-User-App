import * as ActionTypes from '../actions/types';

const defaultNotificationState = {
  isNotificationReceived: false,
  notificationReceivedData: {},
  notificationRedirect: false,
};

export default function notificationReducer(
  state = defaultNotificationState,
  action,
) {
  switch (action.type) {
    case ActionTypes.NOTIFICATION_RECEIVED:
      return Object.assign({}, state, {
        ...state,
        isNotificationReceived: action.responseData,
      });
    case ActionTypes.NOTIFICATION_RECEIVED_DATA:
      return Object.assign({}, state, {
        ...state,
        notificationReceivedData: action.responseData,
      });
    case ActionTypes.NOTIFICATION_REDIRECT:
      return Object.assign({}, state, {
        ...state,
        notificationRedirect: action.responseData,
      });

    default:
      return state;
  }
}
