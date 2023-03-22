import {
  GET_PRODUCT_LIST,
  UPDATE_SEARCH_FILTER_DATA,
  RESET_AND_UPDATE_SEARCH_FILTER_DATA,
  GET_PRODUCT_FILTER_DATA,
  /** ealstic search */
  GET_ELASTIC_SEARCH_DATA,
  GET_ELASTIC_SEARCH_DATA_SUCCESS,
} from './types';
import {executeApiAction} from '../lib/apiHelper';
import {
  getProductListAPI,
  productFilterAPI,
  elasticSearchAPI,
} from '../constants/apiConstants';

export const getallProducts = ({page}, onSuccess, onError) => {
  return async (dispatch, getState) => {
    const _filterData = getState().search.filterParams;
    const searchApi = `${getProductListAPI}?page=${page}`;
    let newFilterData = {..._filterData};

    if (_filterData.subSubCats !== null) {
      newFilterData.category_id = _filterData.subSubCats;
    }

    dispatch(
      executeApiAction(
        'post',
        searchApi,
        GET_PRODUCT_LIST,
        true,
        newFilterData,
        onSuccess,
        onError,
      ),
    );
  };
};

export const updateSearchFilterData = filterData => {
  return {
    type: UPDATE_SEARCH_FILTER_DATA,
    payload: filterData,
  };
};

export const resetUpdateSearchFilterData = filterData => {
  return {
    type: RESET_AND_UPDATE_SEARCH_FILTER_DATA,
    payload: filterData,
  };
};

export const getAllFilterDatas = (params = {}) => {
  return executeApiAction(
    'post',
    productFilterAPI,
    GET_PRODUCT_FILTER_DATA,
    true,
    params,
  );
};

/** Elastic search */
export const elasticSearch = searchTerm => {
  return async (dispatch, getState) => {
    dispatch(
      executeApiAction(
        'get',
        elasticSearchAPI + `?search_data=${searchTerm}`,
        GET_ELASTIC_SEARCH_DATA,
        false,
        {},
      ),
    );
  };
};

export const resetElasticSearch = () => {
  return async (dispatch, getState) => {
    return dispatch({
      type: GET_ELASTIC_SEARCH_DATA_SUCCESS,
      payload: {data: {}},
    });
  };
};
