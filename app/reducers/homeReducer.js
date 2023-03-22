import * as ActionTypes from '../actions/types';

const defaultHomeState = {
  isLoading: false,
  error: null,
  successMsg: '',
  homeData: null,
};

export default function homeReducer(state = defaultHomeState, action) {
  switch (action.type) {
    case ActionTypes.GET_HOME_CONTENT:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.GET_HOME_CONTENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        homeData: action.payload.data,
      };
    case ActionTypes.GET_HOME_CONTENT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ActionTypes.RESET_HOME_ERROR:
      return {
        ...state,
        successMsg: '',
        error: null,
      };
    default:
      return state;
  }
}
