import * as ActionTypes from '../actions/types';
import _ from 'lodash';

const initialVal = {
  min_price: 0,
  max_price: 100000,
  category_id: null,
  subSubCats: null,
  brand_id: null,
  rating: null,
  search: '',
  sort: '',
};
const defaultHomeState = {
  filterParams: initialVal,
  productFilterData: null,
  productCount: 0,
  elasticSearchData: {},
  isLoading: false,
  filterIsLoading: false
};

export default function searchProductReducer(state = defaultHomeState, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_SEARCH_FILTER_DATA:
      return {
        ...state,
        filterParams: {...state.filterParams, ...action.payload},
      };
    case ActionTypes.RESET_AND_UPDATE_SEARCH_FILTER_DATA:
      return {
        ...state,
        filterParams: resetAndSetNewParam(state.filterParams, action.payload),
      };
    case ActionTypes.GET_PRODUCT_FILTER_DATA_SUCCESS:
      return {
        ...state,
        productFilterData: action.payload.data,
      };
    case ActionTypes.GET_PRODUCT_LIST:
      return {
        ...state,
        filterIsLoading: true,
      };
    case ActionTypes.GET_PRODUCT_LIST_ERROR:
      return {
        ...state,
        filterIsLoading: false,
      };
    case ActionTypes.GET_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        productCount: action.payload.data.products.total,
        filterIsLoading: false,
      };
    /** Elastic search */
    case ActionTypes.GET_ELASTIC_SEARCH_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.GET_ELASTIC_SEARCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        elasticSearchData: action.payload.data,
      };
    case ActionTypes.GET_ELASTIC_SEARCH_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        elasticSearchData: {},
      };
    default:
      return state;
  }
}

const resetAndSetNewParam = (oldState, newParam) => {
  let newData = initialVal;
  // for (const [key, value] of Object.entries(newParam)) {
  //   delete oldState[key];
  //   oldState[key] = value;
  // }
  const newValue = _.assign(newData, newParam);
  return newValue;
};
