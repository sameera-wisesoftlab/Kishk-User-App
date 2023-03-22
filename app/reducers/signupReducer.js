import * as ActionTypes from '../actions/types';

const defaultsignupState = {
  isLoading: false,
  error: null,
  signupsendsuccessmsg: '',
};

export default function signupReducer(state = defaultsignupState, action) {
  switch (action.type) {
    case ActionTypes.SIGNUP_LOADING:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case ActionTypes.SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error,
        pullRefresh: action.responseData.success,
        signupsendsuccessmsg: action.responseData,
        isLoading: false,
      });
    case ActionTypes.SIGNUP_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        signuperror: action.error,
      });
    case ActionTypes.CLEAR_SIGNUP_CHAT_MSG:
      return Object.assign({}, state, {
        isLoading: false,
        resetNavigation: undefined,
        signupsendsuccessmsg: '',
        isLoading: false,
        error: undefined,
        selectedLanguage: null,
      });
    default:
      return state;
  }
}
