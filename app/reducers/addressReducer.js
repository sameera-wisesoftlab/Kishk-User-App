import * as ActionTypes from '../actions/types';

const defaultState = {
  addressData: [],
  addressdetailData: [],
  isLoading: false,
  error: undefined,
  success: undefined,
  singleData: [],
  addresssendsuccessmsg: '',
  editAddressDataSuccess: {},
  deleteAddressSucccess: {},
  isSelectAddressLoading: false,
};

export default function addressReducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.EDIT_ADDRESS_LOADING:
      return Object.assign({}, state, {
        isLoading: true,
        isLogged: true,
      });
    case ActionTypes.DELETE_LOADING:
      return Object.assign({}, state, {
        isLoading: true,
        isLogged: true,
      });
    case ActionTypes.DELETE_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        deleteAddressSucccess: action.responseData,
      });
    case ActionTypes.DELETE_ERROR:
      return Object.assign({}, state, {});

    case ActionTypes.ADDNEWADDRESS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error,
        pullRefresh: action.responseData.success,
        addresssendsuccessmsg: action.responseData,
      });

    case ActionTypes.ADDNEWADDRESS_LOADING:
      return Object.assign({}, state, {
        isLoading: true,
      });

    case ActionTypes.ADDNEWADDRESS_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        addresserror: action.error,
      });
    case ActionTypes.SERVICE_LOADING:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case ActionTypes.HOWTOUSE_LOADING:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case ActionTypes.DELIVERYADDRESS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isLoggedOut: false,
        getdeliveryaddress: action.responseData.data,
      });
    case ActionTypes.BILLINGADDRESS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isLoggedOut: false,
        getbillingaddress: action.responseData.data,
      });
    case ActionTypes.EDIT_ADDRESS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        isLoggedOut: false,
        getidaddress: action.responseData.data,
      });
    case ActionTypes.EDIT_ADDRESS_ACTION_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        editAddressDataSuccess: action.responseData,
      });
    case ActionTypes.EDIT_ADDRESS_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        isLoggedOut: false,
        getidaddresserreor: action.error,
      });

    case ActionTypes.DELIVERYADDRESS_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        isLoggedOut: false,
        howToUseDataError: action.error,
      });
    case ActionTypes.SERVICE_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error,
      });
    case ActionTypes.GET_ADDRESS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        addressData: action.responseData,
      });
    case ActionTypes.GET_ADDRESS_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        addressdetailData: action.responseData,
      });
    case ActionTypes.SINGLE_DATA_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        singleData: action.responseData,
      });
    /** Chose address on checkout */
    case ActionTypes.SELECT_ADDR:
      return Object.assign({}, state, {
        isSelectAddressLoading: true,
      });
    case ActionTypes.SELECT_ADDR_SUCCESS:
      return Object.assign({}, state, {
        isSelectAddressLoading: false,
      });
    case ActionTypes.SELECT_ADDR_ERROR:
      return Object.assign({}, state, {
        isSelectAddressLoading: false,
      });
    default:
      return state;
  }
}
