import * as ActionTypes from '../actions/types';

const defaultProductState = {
  isLoading: false,
  error: null,
  successMsg: '',
  productData: null,
  addCartData: {},
  cartKey: '',
  cartData: {},
  removeCartData: {},
  billingAddress: [],
  deliveryAddress: [],
  checkoutData: {},
  checkoutOrderData: {},
  promocode: null,
  reorderData: {},
  customAttrData: {},
  customAttrError: {},
  customAttrEditData: {},
  customAttrEditError: {},
  editDataLoaded: false,
  cartCount: '',
  product_idd: '',
  removeCustAttrData: {},
  benefitEndpoint: {},
};

export default function productReducer(state = defaultProductState, action) {
  switch (action.type) {
    /**
     * product details fetch
     */
    case ActionTypes.GET_PRODUCT_CONTENT:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.GET_PRODUCT_CONTENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        productData: action.payload.data,
      };
    case ActionTypes.GET_PRODUCT_CONTENT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ActionTypes.RESET_PRODUCT_ERROR:
      return {
        ...state,
        successMsg: '',
        error: null,
      };
    /**
     * cart details fetch
     */
    case ActionTypes.GET_CART_CONTENT:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.GET_CART_CONTENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cartData: action.payload.data,
      };
    case ActionTypes.PRODUCT_ID_TEMP:
      console.log("@@@@@@@@@@@@@@@@FROM REDUCER", action.responseData)
      return Object.assign({}, state, {
        product_idd: action.responseData,
      });
    // return {
    //   ...state,
    //   product_idd: action.payload.data,
    // };
    case ActionTypes.GET_CART_CONTENT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ActionTypes.RESET_CART_ERROR:
      return {
        ...state,
        successMsg: '',
        error: null,
      };
    /**
     * Add to cart
     */
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        addCartData: action.payload,
      };
    case ActionTypes.ADD_TO_CART_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ActionTypes.RESET_ADD_TO_CART_ERROR:
      return {
        ...state,
        successMsg: '',
        error: null,
      };
    /**
     * Save cart key
     */
    case ActionTypes.SAVE_CART_KEY:
      return {
        ...state,
        cartKey: action.payload,
      };
    case ActionTypes.REST_CART_KEY:
      return {
        ...state,
        cartKey: '',
      };
    /**
     * Save cart count
     */
    case ActionTypes.SAVE_CART_COUNT:
      return {
        ...state,
        cartCount: action.payload,
      };
    /**
     * Add to cart
     */
    case ActionTypes.REMOVE_CART:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.REMOVE_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        removeCartData: action.payload,
      };
    case ActionTypes.REMOVE_CART_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ActionTypes.RESET_REMOVE_CART_ERROR:
      return {
        ...state,
        successMsg: '',
        error: null,
      };
    /**
     * billing Address fetch
     */
    case ActionTypes.GET_B_ADDR_CONTENT:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.GET_B_ADDR_CONTENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        billingAddress: action.payload.data,
      };
    case ActionTypes.GET_B_ADDR_CONTENT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ActionTypes.RESET_GET_B_ADDR_ERROR:
      return {
        ...state,
        successMsg: '',
        error: null,
      };
    /**
     * Delivery Address fetch
     */
    case ActionTypes.GET_D_ADDR_CONTENT:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.GET_D_ADDR_CONTENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        deliveryAddress: action.payload.data,
      };
    case ActionTypes.GET_D_ADDR_CONTENT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ActionTypes.RESET_GET_D_ADDR_ERROR:
      return {
        ...state,
        successMsg: '',
        error: null,
      };
    /**
     * Save checkout data
     */
    case ActionTypes.SAVE_CHECKOUT_DATA:
      return {
        ...state,
        checkoutData: action.payload,
      };
    case ActionTypes.RESET_CHECKOUT_DATA:
      return {
        ...state,
        checkoutData: {},
      };
    /**
     * Checkout Address fetch
     */
    case ActionTypes.CHECKOUT_CONTENT:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.CHECKOUT_CONTENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        checkoutOrderData: action.payload,
      };
    case ActionTypes.CHECKOUT_CONTENT_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ActionTypes.RESET_CHECKOUT_CONTENT_ERROR:
      return {
        ...state,
        successMsg: '',
        error: null,
      };
    /** Promocde */
    case ActionTypes.SAVE_PROMOCODE:
      return {
        ...state,
        promocode: action.payload,
      };
    /**
     * Add to cart
     */
    case ActionTypes.REORDER:
      return {
        ...state,
        isReorderLoading: true,
      };
    case ActionTypes.REORDER_SUCCESS:
      return {
        ...state,
        isReorderLoading: false,
        reorderData: action.payload,
      };
    case ActionTypes.REORDER_ERROR:
      return {
        ...state,
        isReorderLoading: false,
        reorderError: action.payload,
      };
    case ActionTypes.RESET_REORDER_ERROR:
      return {
        ...state,
        reorderError: null,
      };
    /**
     * Custom Attr save
     */
    case ActionTypes.CUSTOM_ATTR:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.CUSTOM_ATTR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        customAttrData: action.payload,
      };
    case ActionTypes.CUSTOM_ATTR_ERROR:
      return {
        ...state,
        isLoading: false,
        customAttrError: action.payload,
      };
    case ActionTypes.RESET_CUSTOM_ATTR_ERROR:
      return {
        ...state,
        customAttrError: null,
      };
    /**
     * Custom Attr save
     */
    case ActionTypes.CUSTOM_ATTR_EDIT:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.CUSTOM_ATTR_EDIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        customAttrEditData: action.payload,
        editDataLoaded: action.payload?.data !== null,
      };
    case ActionTypes.CUSTOM_ATTR_DATA_LOADED_SUCCESS:
      return {
        ...state,
        editDataLoaded: false,
      };
    case ActionTypes.CUSTOM_ATTR_EDIT_ERROR:
      return {
        ...state,
        isLoading: false,
        customAttrEditError: action.payload,
      };
    case ActionTypes.RESET_CUSTOM_ATTR_EDIT_ERROR:
      return {
        ...state,
        customAttrEditError: null,
      };

    /**
     * Remove cust attr
     */
    case ActionTypes.REMOVE_CUST_ATTR:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.REMOVE_CUST_ATTR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        removeCustAttrData: action.payload,
      };
    case ActionTypes.REMOVE_CUST_ATTR_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ActionTypes.RESET_REMOVE_CUST_ATTR_ERROR:
      return {
        ...state,
        error: null,
      };

    /**
     * Payment Url
     */
    case ActionTypes.PAYMENT_URL:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.PAYMENT_URL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        benefitEndpoint: action.payload,
      };
    case ActionTypes.PAYMENT_URL_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ActionTypes.RESET_PAYMENT_URL_ERROR:
      return {
        ...state,
        error: null,
      };

    /** default */
    default:
      return state;
  }
}
