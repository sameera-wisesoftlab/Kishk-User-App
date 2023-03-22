import {
  /** Products */
  GET_PRODUCT_CONTENT,
  RESET_PRODUCT_ERROR,
  GET_PRODUCT_CONTENT_SUCCESS,
  /** Add to cart */
  ADD_TO_CART,
  RESET_ADD_TO_CART_ERROR,
  ADD_TO_CART_SUCCESS,
  /** Cart key */
  SAVE_CART_KEY,
  REST_CART_KEY,
  /** Cart fetch */
  GET_CART_CONTENT,
  GET_CART_CONTENT_SUCCESS,
  RESET_CART_ERROR,
  /** Remove cart */
  REMOVE_CART,
  RESET_REMOVE_CART_ERROR,
  REMOVE_CART_SUCCESS,
  /** Address */
  GET_B_ADDR_CONTENT,
  RESET_GET_B_ADDR_ERROR,
  GET_B_ADDR_CONTENT_SUCCESS,
  /** Address */
  GET_D_ADDR_CONTENT,
  RESET_GET_D_ADDR_ERROR,
  GET_D_ADDR_CONTENT_SUCCESS,
  /** Checkout data */
  SAVE_CHECKOUT_DATA,
  RESET_CHECKOUT_DATA,
  /** Checkout order */
  CHECKOUT_CONTENT,
  CHECKOUT_CONTENT_SUCCESS,
  RESET_CHECKOUT_CONTENT_ERROR,
  /** Order details */
  GET_ORDER_DET_CONTENT,
  GET_ORDER_DET_CONTENT_SUCCESS,
  RESET_ORDER_DET_ERROR,
  /** Settings */
  GET_SETTINGS_CONTENT,
  RESET_GET_SETTINGS_CONTENT_ERROR,
  RESET_SETTINGS_TEMP_DATA,
  /** Promocode */
  SAVE_PROMOCODE,
  /** Reorder */
  REORDER,
  REORDER_SUCCESS,
  RESET_REORDER_ERROR,
  /** Custom attr save*/
  CUSTOM_ATTR,
  CUSTOM_ATTR_SUCCESS,
  RESET_CUSTOM_ATTR_ERROR,
  CUSTOM_ATTR_DATA_LOADED_SUCCESS,
  /** Custom attr edit*/
  CUSTOM_ATTR_EDIT,
  CUSTOM_ATTR_EDIT_SUCCESS,
  RESET_CUSTOM_ATTR_EDIT_ERROR,
  /** Update wishlist item Ids list */
  UPDATE_USER_WISHLIST_ITEM_IN_STATE,
  /** Cart count */
  SAVE_CART_COUNT,
  /** Remove cust attr */
  REMOVE_CUST_ATTR,
  RESET_REMOVE_CUST_ATTR_ERROR,
  REMOVE_CUST_ATTR_SUCCESS,
  /** Payment url */
  PAYMENT_URL,
  PAYMENT_URL_SUCCESS,
  RESET_PAYMENT_URL_ERROR,
  /** SELECT_ADDR */
  SELECT_ADDR,
} from './types';

import apiHelper, { executeApiAction } from '../lib/apiHelper';
import { getMoreReviewAPI } from '../constants/apiConstants';

/** Product fetch */
export const getProductContent = (id, uniqueId) => {
  return async dispatch => {
    dispatch(
      executeApiAction(
        'get',
        apiHelper.getProductsAPI() + `/${id}?uniqueid=${uniqueId}`,
        GET_PRODUCT_CONTENT,
        false,
      ),
    );
  };
};

export const resetProductContent = () => {
  return {
    type: GET_PRODUCT_CONTENT_SUCCESS,
    payload: {},
  };
};

export const resetProductError = () => {
  return {
    type: RESET_PRODUCT_ERROR,
  };
};

/** Cart add */
export const addToCart = (data, key, is_guest) => {
  const _data = {
    product_id: data.product_id,
    cart_item_quantity: data.cart_item_quantity,
    product_type: data.product_type,
  };
  if (data.variant_id1) {
    _data.variant_id1 = data.variant_id1;
  }
  if (data.variant_id2) {
    _data.variant_id2 = data.variant_id2;
  }
  if (data.from) {
    _data.from = data.from;
  }
  if (key) {
    _data.cart_key = key;
  }
  if (data.attribute) {
    _data.attribute = data.attribute;
  }
  if (data.item_id) {
    _data.item_id = data.item_id;
  }

  return async dispatch => {
    const is_auth_required = is_guest !== true;
    dispatch(
      executeApiAction(
        'post',
        apiHelper.getAddToCartAPI(is_auth_required),
        ADD_TO_CART,
        is_auth_required, // Auth not required for guest
        _data,
        res => {
          // if (data.from && data.from === 'wishlist') {
          // If already wishlisted product added on cart successfully, then remove that product from wishlist item list from state
          // dispatch({
          //   type: UPDATE_USER_WISHLIST_ITEM_IN_STATE,
          //   productId: _data.product_id,
          // });
          // }
        },
      ),
    );
  };
};

export const resetAddToCartError = () => {
  return {
    type: RESET_ADD_TO_CART_ERROR,
  };
};

export const resetAddToCartSuccess = () => {
  return {
    type: ADD_TO_CART_SUCCESS,
    payload: {
      data: null,
    },
  };
};

/** Cart key */
export const saveCartKey = key => {
  return {
    type: SAVE_CART_KEY,
    payload: key,
  };
};

export const resetCartKey = () => {
  return {
    type: REST_CART_KEY,
  };
};

/** Cart count */
export const saveCartCount = count => {
  return {
    type: SAVE_CART_COUNT,
    payload: count,
  };
};

/** Cart fetch */
export const getCartContent = (
  coupon_code = '',
  callBack = () => { },
  coupon_code_appy = false,
  cartKey,
) => {
  return async dispatch => {
    dispatch(
      executeApiAction(
        'get',
        apiHelper.getCartsAPI(coupon_code, coupon_code_appy, cartKey),
        GET_CART_CONTENT,
        false,
        {},
        callBack,
      ),
    );
  };
};

export const resetCartContent = () => {
  return {
    type: GET_CART_CONTENT_SUCCESS,
    payload: {},
  };
};

export const resetCartError = () => {
  return {
    type: RESET_CART_ERROR,
  };
};

/** Cart remove */
export const removeCart = (data, key) => {
  const _data = {
    product_id: data.product_id,
    qty: data.cart_item_quantity,
    product_type: data.product_type,
  };
  if (data.variant_id1) {
    _data.variant_id1 = data.variant_id1;
  }
  if (data.variant_id2) {
    _data.variant_id2 = data.variant_id2;
  }
  if (key) {
    _data.cart_key = key;
  }
  if (data.attribute) {
    _data.attribute = data.attribute;
  }
  return async dispatch => {
    dispatch(
      executeApiAction(
        'post',
        apiHelper.getRemoveCartAPI(),
        REMOVE_CART,
        true,
        _data,
      ),
    );
  };
};

export const resetRemoveCartError = () => {
  return {
    type: RESET_REMOVE_CART_ERROR,
  };
};

export const resetRemoveCartSuccess = () => {
  return {
    type: REMOVE_CART_SUCCESS,
    payload: {
      data: null,
    },
  };
};

/** Del Address fetch*/
export const getDelAddressContent = () => {
  return async dispatch => {
    dispatch(
      executeApiAction(
        'get',
        apiHelper.getDelAddrAPI(),
        GET_D_ADDR_CONTENT,
        true,
      ),
    );
  };
};

export const resetDelAddressContent = () => {
  return {
    type: GET_D_ADDR_CONTENT_SUCCESS,
    payload: { data: [] },
  };
};

export const resetDelAddressError = () => {
  return {
    type: RESET_GET_D_ADDR_ERROR,
  };
};

/** Bill Address fetch*/
export const getBillAddressContent = () => {
  return async dispatch => {
    dispatch(
      executeApiAction(
        'get',
        apiHelper.getBillAddrAPI(),
        GET_B_ADDR_CONTENT,
        true,
      ),
    );
  };
};

export const resetBillAddressContent = () => {
  return {
    type: GET_B_ADDR_CONTENT_SUCCESS,
    payload: { data: [] },
  };
};

export const resetBillAddressError = () => {
  return {
    type: RESET_GET_B_ADDR_ERROR,
  };
};

/** Save deliver date, time slot, address id */
export const saveCheckoutData = key => {
  return {
    type: SAVE_CHECKOUT_DATA,
    payload: key,
  };
};

export const resetCheckoutData = () => {
  return {
    type: RESET_CHECKOUT_DATA,
  };
};

/** Checkout */
export const checkoutOrder = data => {
  return async dispatch => {
    dispatch(
      executeApiAction(
        'post',
        apiHelper.getCheckoutAPI(),
        CHECKOUT_CONTENT,
        true,
        data,
      ),
    );
  };
};

export const resetCheckoutContent = () => {
  return {
    type: CHECKOUT_CONTENT_SUCCESS,
    payload: {},
  };
};

export const resetCheckoutError = () => {
  return {
    type: RESET_CHECKOUT_CONTENT_ERROR,
  };
};

/** Order details fetch */
export const getOrderDetailsContent = data => {
  return async dispatch => {
    dispatch(
      executeApiAction(
        'post',
        apiHelper.getOrderDetAPI(),
        GET_ORDER_DET_CONTENT,
        true,
        data,
      ),
    );
  };
};

export const resetOrderDetailsContent = () => {
  return {
    type: GET_ORDER_DET_CONTENT_SUCCESS,
    payload: {},
  };
};

export const resetOrderDetailsError = () => {
  return {
    type: RESET_ORDER_DET_ERROR,
  };
};

/** Fetch settings */
export const getSettingsContent = data => {
  return async dispatch => {
    dispatch(
      executeApiAction(
        'get',
        apiHelper.getSettingsAPI(),
        GET_SETTINGS_CONTENT,
        true,
        data,
      ),
    );
  };
};

export const resetSettingsError = () => {
  return {
    type: RESET_GET_SETTINGS_CONTENT_ERROR,
  };
};

export const resetSettingsTempData = () => {
  return {
    type: RESET_SETTINGS_TEMP_DATA,
  };
};

/** Promo code */
export const savePromocodeAction = code => {
  return {
    type: SAVE_PROMOCODE,
    payload: code,
  };
};

export const resetPromocodeAction = () => {
  return {
    type: SAVE_PROMOCODE,
    payload: null,
  };
};

export const savePromocode = data => {
  return async dispatch => {
    dispatch(savePromocodeAction(data));
  };
};

export const resetPromocode = () => {
  return async dispatch => {
    dispatch(resetPromocodeAction());
  };
};

/** Reorder - order */
export const reorder = id => {
  return async dispatch => {
    dispatch(
      executeApiAction('get', apiHelper.getReorderAPI(id), REORDER, true, {}),
    );
  };
};

export const resetReorderError = () => {
  return {
    type: RESET_REORDER_ERROR,
  };
};

export const resetReorderSuccess = () => {
  return {
    type: REORDER_SUCCESS,
    payload: {
      data: null,
    },
  };
};

/** Custom attr save */
export const custom_attr_save = data => {
  return async dispatch => {
    dispatch(
      executeApiAction(
        'post',
        apiHelper.getCustomAttrSaveAPI(),
        CUSTOM_ATTR,
        true,
        data,
      ),
    );
  };
};

export const reset_custom_attr_error = () => {
  return {
    type: RESET_CUSTOM_ATTR_ERROR,
  };
};

export const reset_custom_attr_success = () => {
  return {
    type: CUSTOM_ATTR_SUCCESS,
    payload: {
      data: null,
    },
  };
};

export const reset_custom_attr_dataloaded_successAction = () => {
  return {
    type: CUSTOM_ATTR_DATA_LOADED_SUCCESS,
  };
};

export const reset_custom_attr_dataloaded_success = () => {
  return async dispatch => {
    dispatch(reset_custom_attr_dataloaded_successAction());
  };
};

/** Custom attr fetch for edit */
export const custom_attr_edit = data => {
  return async dispatch => {
    dispatch(
      executeApiAction(
        'post',
        apiHelper.getCustomAttrEditAPI(),
        CUSTOM_ATTR_EDIT,
        true,
        data,
      ),
    );
  };
};

export const reset_custom_attr_edit_error = () => {
  return {
    type: RESET_CUSTOM_ATTR_EDIT_ERROR,
  };
};

export const reset_custom_attr_edit_success = () => {
  return {
    type: CUSTOM_ATTR_EDIT_SUCCESS,
    payload: {
      data: null,
    },
  };
};

/** Product View More Reviews */
export const getMoreReviews = ({ page, product_id }, onSuccess, onError) => {
  const url = `${getMoreReviewAPI}/${product_id}?page=${page}`;
  return async dispatch => {
    dispatch(
      executeApiAction(
        'get',
        url,
        'GET_PRODUCT_MORE_REVIEWS',
        true,
        {},
        onSuccess,
        onError,
      ),
    );
  };
};

/** Remove custom attr */
export const removeCustomAttr = _data => {
  console.log(_data, 'delete custom');
  return async dispatch => {
    dispatch(
      executeApiAction(
        'post',
        apiHelper.getRemoveCustAttrAPI(),
        REMOVE_CUST_ATTR,
        true,
        _data,
      ),
    );
  };
};

export const resetRemoveCustomAttrError = () => {
  return {
    type: RESET_REMOVE_CUST_ATTR_ERROR,
  };
};

export const resetRemoveCustomAttrSuccess = () => {
  return {
    type: REMOVE_CUST_ATTR_SUCCESS,
    payload: {
      data: null,
    },
  };
};

/** Online payment */
export const paymentUrl = data => {
  return async dispatch => {
    dispatch(
      executeApiAction(
        'post',
        apiHelper.getPaymentAPI(),
        PAYMENT_URL,
        true,
        data,
      ),
    );
  };
};

export const resetPaymentUrl = () => {
  return {
    type: PAYMENT_URL_SUCCESS,
    payload: {},
  };
};

export const resetPaymentUrlError = () => {
  return {
    type: RESET_PAYMENT_URL_ERROR,
  };
};

/** Address chose */
export const selectCheckoutAddress = (data, successHere) => {
  return async dispatch => {
    dispatch(
      executeApiAction(
        'post',
        apiHelper.selectAddrAPI(),
        SELECT_ADDR,
        true,
        data,
        successHere,
      ),
    );
  };
};
