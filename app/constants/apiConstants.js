import { I18nManager } from 'react-native';
const under_dev = false;

// let productionURL = 'https://demo.kishk.app/';
let productionURL = 'https://kishk.app/';
// let developmentURL = 'https://kiskdev.ourdemo.online/';
let developmentURL = 'https://kishk.ourdemo.online/';
let apiBaseURL = under_dev ? developmentURL : productionURL;
let lang = I18nManager.isRTL ? '?language=ar' : '?language=en';
export const baseURL = apiBaseURL;

export const getHomeAPI = 'api/home';
export const getGuestHomeAPI = 'api/guest_home';
export const getDealsAPI = 'api/deals';
export const getAllCatAPI = 'api/category';
export const getProductListAPI = 'api/products';
export const productFilterAPI = 'api/products/filter';
export const elasticSearchAPI = 'api/autosuggest';

export const getFeatCategoriesAPI = 'api/featured_category';
export const getTopBrandsAPI = 'api/top_brands';
export const getWishlistAPI = 'api/wishlist';
export const getMyOrderAPI = 'api/order_list';
export const cancelOrderAPI = 'api/order/cancel';
export const cancelReasonAPI = 'api/cancellation-reason';
export const addOrderReviewAPI = 'api/add-order-review' + lang;
export const addProductReviewAPI = 'api/add-product-review' + lang;
export const moveToWishlistAPI = 'api/move-to-wishlist';
export const getMoreReviewAPI = 'api/more-reviews';
