import * as ActionTypes from '../actions/types';

const defaultOrderState = {
  isLoading: false,
  error: null,
  successMsg: '',
  orderDetails: null,
  cancelExecuting: false,
  orderReviewExecuting: false,
  prodReviewExecuting: false,
};

export default function orderReducer(state = defaultOrderState, action) {
  switch (action.type) {
    /**
     * product details fetch
     */
    case ActionTypes.GET_ORDER_DET_CONTENT:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.GET_ORDER_DET_CONTENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        orderDetails: action.payload.data,
      };
    case ActionTypes.GET_ORDER_DET_CONTENT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ActionTypes.RESET_ORDER_DET_ERROR:
      return {
        ...state,
        successMsg: '',
        error: null,
      };
    /**
     * cancel order
     */
    case ActionTypes.CANCEL_MY_ORDER:
      return {
        ...state,
        cancelExecuting: true,
      };
    case ActionTypes.CANCEL_MY_ORDER_SUCCESS:
      return {
        ...state,
        cancelExecuting: false,
        successMsg: action.payload.msg,
      };
    case ActionTypes.CANCEL_MY_ORDER_ERROR:
      return {
        ...state,
        cancelExecuting: false,
        error: action.payload,
      };
    /**
     * review order
     */
    case ActionTypes.ADD_ORDER_REVIEW:
      return {
        ...state,
        orderReviewExecuting: true,
      };
    case ActionTypes.ADD_ORDER_REVIEW_SUCCESS:
      return {
        ...state,
        orderReviewExecuting: false,
        successMsg: action.payload.message,
      };
    case ActionTypes.ADD_ORDER_REVIEW_ERROR:
      return {
        ...state,
        orderReviewExecuting: false,
        error: action.payload,
      };
    /**
     * product review
     */
    case ActionTypes.ADD_PRODUCT_REVIEW:
      return {
        ...state,
        prodReviewExecuting: true,
      };
    case ActionTypes.ADD_PRODUCT_REVIEW_SUCCESS:
      return {
        ...state,
        prodReviewExecuting: false,
        successMsg: action.payload.message,
      };
    case ActionTypes.ADD_PRODUCT_REVIEW_ERROR:
      return {
        ...state,
        prodReviewExecuting: false,
        error: action.payload,
      };
    /** default */
    default:
      return state;
  }
}
