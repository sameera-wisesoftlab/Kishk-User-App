import * as ActionTypes from '../actions/types';

const defaultSettingsState = {
  isSettingsLoading: false,
  settingsError: null,
  settingsData: {},
  tempSettingsData: {},
};

export default function settingsReducer(state = defaultSettingsState, action) {
  switch (action.type) {
    /**
     * Settings fetch
     */
    case ActionTypes.GET_SETTINGS_CONTENT:
      return {
        ...state,
        isSettingsLoading: true,
      };
    case ActionTypes.GET_SETTINGS_CONTENT_SUCCESS:
      return {
        ...state,
        isSettingsLoading: false,
        settingsData: action.payload,
        tempSettingsData: action.payload,
      };
    case ActionTypes.GET_SETTINGS_CONTENT_ERROR:
      return {
        ...state,
        isSettingsLoading: false,
        settingsError: action.payload,
      };
    case ActionTypes.RESET_GET_SETTINGS_CONTENT_ERROR:
      return {
        ...state,
        settingsError: null,
      };
    case ActionTypes.RESET_SETTINGS_TEMP_DATA:
      return {
        ...state,
        tempSettingsData: {},
      };

    /** default */
    default:
      return state;
  }
}
