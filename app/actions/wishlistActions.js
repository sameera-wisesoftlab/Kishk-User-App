import * as ActionTypes from './types';
import apiHelper from '../lib/apiHelper';
import axios from 'react-native-axios';
import { executeApiAction } from '../lib/apiHelper';
import { getWishlistAPI, moveToWishlistAPI } from '../constants/apiConstants';
import { I18nManager } from 'react-native';

export function getWishlistData() {
  return async dispatch => {
    dispatch(
      executeApiAction(
        'get',
        getWishlistAPI,
        ActionTypes.GET_WISHLIST,
        true,
        {},
      ),
    );
  };
}

export const moveToWishlistFromCart = (
  cartItemId,
  cartKey,
  productId,
  onSuccess = () => { },
  onError = () => { },
) => {
  let lang = I18nManager.isRTL ? '?language=ar' : '?language=en';
  return dispatch => {
    dispatch(
      executeApiAction(
        'post',
        moveToWishlistAPI + lang,
        'MOVE_TO_WISHLIST',
        true,
        {
          cart_key: cartKey,
          cart_item_id: cartItemId,
        },
        res => {
          // add in wishlisted id's list inside loginReducer-userData state
          dispatch({
            type: ActionTypes.ADD_USER_WISHLIST_ITEM_IN_STATE, //UPDATE_USER_WISHLIST_ITEM_IN_STATE,
            productId: productId,
          });
          onSuccess(res);
        },
        onError,
      ),
    );
  };
};

export const addRemoveToWishlist = productId => {
  return dispatch => {
    dispatch({
      type: ActionTypes.UPDATE_USER_WISHLIST_ITEM_IN_STATE,
      productId: productId,
      wishlistExecuting: true,
    });
    let lang = I18nManager.isRTL ? '?language=ar' : '?language=en';
    dispatch(
      executeApiAction(
        'get',
        `api/wishlist/add/${productId}` + lang,
        ActionTypes.ADD_REMOVE_TO_WISHLIST,
        true,
        {},
        res => {
          // on success update wishlist product ids on userData list
          // dispatch({
          //   type: ActionTypes.UPDATE_USER_WISHLIST_ITEM_IN_STATE,
          //   productId: productId,
          // });
        },
      ),
    );
  };
};

export const resetWishlistMessage = () => {
  return {
    type: ActionTypes.RESET_WISHLIST_MESSAGE,
  };
};

// export const wishlistApiServiceActionLoading = () => ({
//   type: ActionTypes.WISH_SERVICE_LOADING,
// });

// export function wishlistServiceActionSuccess(responseData) {
//   return {
//     type: ActionTypes.WISH_SERVICE_SUCCESS,
//     responseData: responseData,
//   };
// }
// export const wishlistServiceActionError = error => ({
//   type: ActionTypes.WISH_SERVICE_ERROR,
//   error: error,
// });

// return async dispatch => {
//   dispatch(wishlistApiServiceActionLoading());
//   await axios
//     .get(apiHelper.getWishlistAPI(), apiHelper.getAPIHeader(token))
//     .then(response => {
//       console.log('response wislist:: ', response);
//       dispatch(wishlistServiceActionSuccess(response.data));
//     })
//     .catch(error => {
//       dispatch(wishlistServiceActionError(error.response.data));
//     });
// };
