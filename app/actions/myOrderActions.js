import { executeApiAction } from '../lib/apiHelper';
import * as ActionTypes from './types';
import {
  GET_MY_ORDERS,
  CANCEL_MY_ORDER,
  ADD_ORDER_REVIEW,
  ADD_PRODUCT_REVIEW,
  GET_CANCEL_REASONS,
} from './types';
import {
  getMyOrderAPI,
  cancelOrderAPI,
  addOrderReviewAPI,
  addProductReviewAPI,
  cancelReasonAPI,
} from '../constants/apiConstants';
import { I18nManager } from 'react-native';

export const getMyOrders = ({ page, status }, onSuccess, onError) => {
  const lang = I18nManager.isRTL ? 'ar' : 'en';
  const url = `${getMyOrderAPI}/${status}?page=${page}&language=${lang}`;
  return async dispatch => {
    dispatch(
      executeApiAction('get', url, GET_MY_ORDERS, true, {}, onSuccess, onError),
    );
  };
};

// Cancel Orders
export const getCancellationReasons = (onSuccess, onError) => {
  return async dispatch => {
    dispatch(
      executeApiAction(
        'get',
        cancelReasonAPI,
        GET_CANCEL_REASONS,
        true,
        {},
        onSuccess,
        onError,
      ),
    );
  };
};

// Cancel Order
export const cancelOrder = data => {
  let lang = I18nManager.isRTL ? '?language=ar' : '?language=en';
  return async dispatch => {
    dispatch(
      executeApiAction('post', cancelOrderAPI + lang, CANCEL_MY_ORDER, true, data),
    );
  };
};

// Add Order Review
export const addOrderReview = data => {
  return async dispatch => {
    dispatch(
      executeApiAction('post', addOrderReviewAPI, ADD_ORDER_REVIEW, true, data),
    );
  };
};
export function setProductID(responseData) {
  return {
    type: ActionTypes.PRODUCT_ID_TEMP,
    responseData: responseData,
  };
}
// Add Product Order Review
export const addProductReview = data => {
  return async dispatch => {
    dispatch(
      executeApiAction(
        'post',
        addProductReviewAPI,
        ADD_PRODUCT_REVIEW,
        true,
        data,
      ),
    );
  };
};
