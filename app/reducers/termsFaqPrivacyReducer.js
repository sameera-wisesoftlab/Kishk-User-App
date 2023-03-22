import * as ActionTypes from '../actions/types';
import {howtouseDetailsMapper} from '../lib/helperMethods';

const defaulttermsFaqPrivacyState = {
  termsData: {},
  privacyData: {},
  isLoading: false,
  error: null,
  currentScreen: 'Home',
  termsAPIReponse: {},
  aboutAPIReponse: {},
  privacyAPIReponse: [],
  languageSelected: null,
  howToUseDataReponse: {},
};

export default function termsFaqPrivacyReducer(
  state = defaulttermsFaqPrivacyState,
  action,
) {
  switch (action.type) {
    case ActionTypes.TERMS_LOADING:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case ActionTypes.LANG_SWITCH:
      return Object.assign({}, state, {
        languageSelected: action.languageSelected,
      });

    case ActionTypes.TERMS_SUCCESS_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error,
      });
    case ActionTypes.TERMS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isLoggedOut: false,
        termsAPIReponse: action.responseData,
      });

    case ActionTypes.FAQS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isLoggedOut: false,
        faqsAPIReponse: action.responseData,
      });

    case ActionTypes.PRIVACY_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isLoggedOut: false,
        privacyAPIReponse: action.responseData,
      });
    case ActionTypes.ABOUT_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isLoggedOut: false,
        aboutAPIReponse: action.responseData,
      });

    case ActionTypes.ABOUT_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error,
      });

    case ActionTypes.HOWTOUSE_LOADING:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case ActionTypes.HOWTOUSE_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isLoggedOut: false,
        howToUseDataReponse: howtouseDetailsMapper(action.responseData.data),
      });
    case ActionTypes.HOWTOUSE_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        isLoggedOut: false,
        howToUseDataError: action.responseData,
      });

    default:
      return state;
  }
}
