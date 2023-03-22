import * as ActionTypes from '../actions/types';

const defaultEditUserState = {
  userData: {},
  editUserData: {},
  updateUserData: {},
  isLogged: false,
  selectedLanguage: null,
  isLoading: false,
  isLoggedOut: false,
  phone_to_verify: '',
  logoutflag: false,
  logoutError: {},
};

export default function editUserReducer(state = defaultEditUserState, action) {
  switch (action.type) {
    case ActionTypes.EDIT_USER_LOADING:
      return Object.assign({}, state, {
        isLoading: true,
        isLogged: true,
      });
    case ActionTypes.EDIT_USER_SUCCESS:
      return Object.assign({}, state, {
        editUserData: action.responseData,
        updateUserData: '',
        isLoading: false,
        isLogged: true,
      });
    case ActionTypes.UPDATE_USER_SUCCESS:
      return Object.assign({}, state, {
        updateUserData: action.responseData,
        isLoading: false,
        isLogged: true,
      });
    case ActionTypes.EDIT_USER_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        logoutError: action.error,
      });
    case ActionTypes.LOGOUT_ERROR_RESET:
      return Object.assign({}, state, {
        logoutError: action.error,
        userData: {},
        isLogged: false,
      });
    case ActionTypes.RESET_LOGOUT_DATA:
      return Object.assign({}, state, {
        logoutData: {},
      });
    case ActionTypes.PHONE_TO_VERIFY:
      return Object.assign({}, state, {
        phone_to_verify: action.responseData,
        isLoading: false,
      });
    case ActionTypes.LOGIN:
      return {
        isLoggedOut: false,
        isLoading: false,
      };
    case ActionTypes.GUEST_LOGIN:
      return {
        isLoading: false,
      };
    case ActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        logoutflag: true,
        error: undefined,
        success: undefined,
        isIntroFinished: false,
        isLoggedOut: true,

        userData: {},
        editUserData: {},
        updateUserData: {},
        isLogged: false,
        isLoading: false,
        phone_to_verify: '',
      };
    default:
      return state;
  }
}
