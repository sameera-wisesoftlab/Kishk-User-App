import * as ActionTypes from '../actions/types';
// import {wishlistDetailsMapper} from '../lib/helperMethods';

const defaultrestaurantDetailsState = {
  isLoading: false,
  resetNavigation: undefined,
  error: undefined,
  selectedLanguage: null,
  wishlistData: [],
  pullRefresh: '',
  wishlistError: null,
  wishlistSucess: '',
  wishExecuting: false,
};

export default function wishlistReducer(
  state = defaultrestaurantDetailsState,
  action,
) {
  switch (action.type) {
    case ActionTypes.UPDATE_USER_WISHLIST_ITEM_IN_STATE:
      return {
        ...state,
        wishlistData: state.wishlistData.filter(
          i => i.product_id !== action.productId,
        ),
        wishExecuting:
          'wishlistExecuting' in action && action?.wishlistExecuting
            ? true
            : false,
      };
    case ActionTypes.GET_WISHLIST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.GET_WISHLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        wishlistData: action.payload.data,
      };
    case ActionTypes.GET_WISHLIST_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    /**
     * Add/Remove from wishlist
     */
    case ActionTypes.ADD_REMOVE_TO_WISHLIST:
      return {
        ...state,
        wishExecuting: true,
      };
    case ActionTypes.ADD_REMOVE_TO_WISHLIST_SUCCESS:
      return {
        ...state,
        wishlistSucess: action.payload.msg,
        wishExecuting: false,
      };
    case ActionTypes.ADD_REMOVE_TO_WISHLIST_ERROR:
      return {
        ...state,
        wishlistError: action.payload.data.error.msg,
        wishExecuting: false,
      };
    case ActionTypes.RESET_WISHLIST_MESSAGE:
      return {
        ...state,
        wishlistSucess: '',
        wishlistError: null,
      };

    // case ActionTypes.WISH_SERVICE_LOADING:
    //   return Object.assign({}, state, {
    //     isLoading: true,
    //     pullRefresh: '',
    //   });
    // case ActionTypes.WISH_SERVICE_SUCCESS:
    //   return Object.assign({}, state, {
    //wishlistData: action.responseData,
    //     wishlistData: wishlistDetailsMapper(action.responseData.data),
    //     isLoading: false,
    //   });
    // case ActionTypes.WISH_SERVICE_ERROR:
    //   return Object.assign({}, state, {
    //     isLoading: false,
    //     error: action.error,
    //   });
    // case ActionTypes.CLEAR_WISH_DETAILS:
    //   return Object.assign({}, state, {
    //     isLoading: false,
    //     resetNavigation: undefined,
    //     error: undefined,
    //     selectedLanguage: null,
    //     relatedItemsData: {},

    //     pullRefresh: '',
    //   });
    case ActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        resetNavigation: undefined,
        error: undefined,
        selectedLanguage: null,
        relatedItemsData: {},
        pullRefresh: '',
      };
    default:
      return state;
  }
}
