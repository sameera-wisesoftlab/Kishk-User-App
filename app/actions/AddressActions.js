import * as ActionTypes from './types';
import axios from 'react-native-axios';
import globals from '../lib/globals';
import {I18nManager} from 'react-native';
import apiHelper from '../lib/apiHelper';

export const apiServiceActionLoading = () => ({
  type: ActionTypes.ADDNEWADDRESS_LOADING,
});

export const addressLoading = () => ({
  type: ActionTypes.EDIT_ADDRESS_LOADING,
});

export const deleteLoading = () => ({
  type: ActionTypes.DELETE_LOADING,
});

export const apiServiceActionError = error => ({
  type: ActionTypes.LOGIN_SERVICE_ERROR,
  error: error,
});

export function editAddressActionSuccess(responseData) {
  return {
    type: ActionTypes.EDIT_ADDRESS_ACTION_SUCCESS,
    responseData: responseData,
  };
}

export function resetEditAddressActionSuccess() {
  return {
    type: ActionTypes.EDIT_ADDRESS_ACTION_SUCCESS,
    responseData: {},
  };
}

export function addressActionResetSuccessData() {
  return async dispatch => {
    dispatch(resetEditAddressActionSuccess());
  };
}

export const editAddressActionError = error => ({
  type: ActionTypes.EDIT_ADDRESS_ERROR,
  error: error,
});

export function addressActionSuccess(responseData) {
  return {
    type: ActionTypes.GET_ADDRESS_SUCCESS,
    responseData: responseData,
  };
}

export function singleDataSuccess(responseData) {
  return {
    type: ActionTypes.SINGLE_DATA_SUCCESS,
    responseData: responseData,
  };
}

export function createAddressActionSuccess(responseData) {
  return {
    type: ActionTypes.ADDNEWADDRESS_SUCCESS,
    responseData: responseData,
  };
}

export const createAddressActionError = error => ({
  type: ActionTypes.ADDNEWADDRESS_ERROR,
  error: error,
});

export function addressdetailsActionReset() {
  return {
    type: ActionTypes.ADDNEWADDRESS_SUCCESS,
    responseData: {},
  };
}

export function addressActionReset() {
  return async dispatch => {
    dispatch(addressdetailsActionReset());
  };
}

export function deliveryAddressActionSuccess(responseData) {
  return {
    type: ActionTypes.DELIVERYADDRESS_SUCCESS,
    responseData: responseData,
  };
}
export function billingAddressActionSuccess(responseData) {
  return {
    type: ActionTypes.BILLINGADDRESS_SUCCESS,
    responseData: responseData,
  };
}

export function getAddressActionSuccess(responseData) {
  return {
    type: ActionTypes.EDIT_ADDRESS_SUCCESS,
    responseData: responseData,
  };
}

export function resetAddressActionSuccess() {
  return {
    type: ActionTypes.EDIT_ADDRESS_SUCCESS,
    responseData: {},
  };
}

export function deleteAddressActionSuccess(responseData) {
  return {
    type: ActionTypes.DELETE_SUCCESS,
    responseData: responseData,
  };
}

export function deleteResetAddressActionSuccessAction() {
  return {
    type: ActionTypes.DELETE_SUCCESS,
    responseData: {},
  };
}

export function deleteResetAddressActionSuccess() {
  return async dispatch => {
    dispatch(deleteResetAddressActionSuccessAction());
  };
}

export const deleteAddressActionError = error => ({
  type: ActionTypes.DELETE_ERROR,
  error: error,
});

export const getAddressActionError = error => ({
  type: ActionTypes.EDIT_ADDRESS_ERROR,
  error: error,
});

export const billingAddressActionError = error => ({
  type: ActionTypes.BILLINGADDRESS_ERROR,
  error: error,
});

export const deliveryAddressActionError = error => ({
  type: ActionTypes.DELIVERYADDRESS_ERROR,
  error: error,
});

export function addressSubmitSend(params, token) {
  return async dispatch => {
    dispatch(apiServiceActionLoading());
    await axios
      .post(apiHelper.createnewAddress(), params, apiHelper.getAPIHeader(token))
      .then(response => {
        dispatch(createAddressActionSuccess(response.data));
      })
      .catch(error => {
        dispatch(createAddressActionError(error.response.data));
      });
  };
}

export function getdeliveryAddress(token) {
  return async dispatch => {
    dispatch(apiServiceActionLoading());
    await axios
      .get(apiHelper.getdeliveryAddress(), apiHelper.getAPIHeader(token))
      .then(response => {
        dispatch(deliveryAddressActionSuccess(response.data));
      })
      .catch(error => {
        dispatch(deliveryAddressActionError(error.response.data));
      });
  };
}

export function getbillingAddress(token) {
  return async dispatch => {
    dispatch(apiServiceActionLoading());
    await axios
      .get(apiHelper.getbillingAddress(), apiHelper.getAPIHeader(token))
      .then(response => {
        dispatch(billingAddressActionSuccess(response.data));
      })
      .catch(error => {
        dispatch(billingAddressActionError(error.response.data));
      });
  };
}

export function geteditaddressDetails(token, addressId) {
  return async dispatch => {
    dispatch(addressLoading());
    await axios
      .get(
        apiHelper.geteditaddressAPI(addressId),
        apiHelper.getAPIHeader(token),
      )
      .then(response => {
        dispatch(getAddressActionSuccess(response.data));
      })
      .catch(error => {
        dispatch(getAddressActionError(error.response.data));
      });
  };
}

export function resetEditAddr() {
  return async dispatch => {
    dispatch(resetAddressActionSuccess());
  };
}

export function removeAddress(addressId, token) {
  return async dispatch => {
    dispatch(deleteLoading());
    await axios
      .post(
        apiHelper.getremoveaddressAPI(addressId),
        {},
        apiHelper.getAPIHeader(token),
      )
      .then(response => {
        dispatch(deleteAddressActionSuccess(response.data));
      })
      .catch(error => {
        dispatch(deleteAddressActionError(error.response.data));
      });
  };
}

export function doaddressupdate(params, token) {
  return async dispatch => {
    dispatch(apiServiceActionLoading());
    await axios
      .post(
        apiHelper.getupdateaddressAPI(),
        params,
        apiHelper.getAPIHeader(token),
      )
      .then(response => {
        dispatch(editAddressActionSuccess(response.data));
      })
      .catch(error => {
        dispatch(editAddressActionError(error.response.data));
      });
  };
}

export function deliveryAddress(params) {
  let listItem = [
    {
      id: 1,
      office: 'Office',
      // default: 'Default',
      name: 'Anvar ali',
      description: '20 June 2020, 2pm to 5pm',
      uri: 'https://via.placeholder.com/600/771796',
      // type: 'default',
      name: 'Anwar Ali',
      number: '+966 7489328930',
      address: I18nManager.isRTL
        ? 'عندما يريد العالم أن ‪يتكلّم ‬ ،الآنالآن فهو يتحدّث بلغة يونيكود. تسجّل الآنالآنالآن لحضور ث بلغة'
        : 'Al Bassam 2 Al Naemia Street Near Al Naemia Juma Masjid , PO Box: 2211 , Al Nameem, Jeddah',
    },
  ];
  return async dispatch => {
    //dispatch(apiServiceActionLoading());
    dispatch(singleDataSuccess(listItem));
  };
}

export function addressdetailsActionSuccess(responseData) {
  return {
    type: ActionTypes.GET_ADDRESS_DETAILS_SUCCESS,
    responseData: responseData,
  };
}

export function getAddress(params) {
  let listData = [
    {
      id: 1,
      office: 'Office',
      default: 'Default',
      name: 'Anvar ali',
      description: '20 June 2020, 2pm to 5pm',
      uri: 'https://via.placeholder.com/600/771796',
      type: 'default',
      name: I18nManager.isRTL ? 'عندماq ' : 'sathffffffffeesh',
      number: '+966 7489328930',
      address: I18nManager.isRTL
        ? 'عندما يريد العالم أن ‪يتكلّم ‬ ،الآنالآن فهو يتحدّث بلغة يونيكود. تسجّل الآنالآنالآن لحضور ث بلغة'
        : 'Al Bassam 2 Al Naemia Street Near Al Naemia Juma Masjid , PO Box: 2211 , Al Nameem, Jeddah',
    },
  ];
  return async dispatch => {
    dispatch(addressActionSuccess(listData));
  };
}

export function getaddressDetails(params) {
  let listData = [
    {
      id: 1,
      office: 'Office',
      default: 'Default',
      name: 'Anvar ali',
      addressType: 'office',
      description: '20 June 2020, 2pm to 5pm',
      uri: 'https://via.placeholder.com/600/771796',
      type: 'default',
      name: I18nManager.isRTL ? 'عندما ' : 'satheesh kumar',
      number: '+966 7489328930',
      address: I18nManager.isRTL
        ? 'عندما يريد العالم أن ‪يتكلّم ‬ ،الآنالآن فهو يتحدّث بلغة يونيكود. تسجّل الآنالآنالآن لحضور ث بلغة'
        : 'Al Bassam 2 Al Naemia Street Near Al Naemia Juma Masjid , PO Box: 2211 , Al Nameem, Jeddah',
    },
    {
      id: 2,
      office: 'Home',
      addressType: 'home',
      name: I18nManager.isRTL ? 'عندما ' : 'satheeshr',
      number: '+966 74321000',
      description: '20 June 2020, 2pm to 5pm',
      uri: 'https://via.placeholder.com/600/92c952',
      type: 'home',
      address: I18nManager.isRTL
        ? 'عندما يريد العالم أن ‪يتكلّم ‬ ،الآنالآن فهو يتحدّث بلغة يونيكود. تسجّل الآنالآنالآن لحضور ث بلغة'
        : 'Al Bassam 2 Al Naemia Street Near Al Naemia Juma Masjid , PO Box: 2211 , Al Nameem, Jeddah',
    },
  ];
  return async dispatch => {
    //dispatch(apiServiceActionLoading());
    dispatch(addressdetailsActionSuccess(listData));
  };
}
