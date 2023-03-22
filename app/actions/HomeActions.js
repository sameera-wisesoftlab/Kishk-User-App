import {GET_HOME_CONTENT, RESET_HOME_ERROR} from './types';
import {executeApiAction} from '../lib/apiHelper';
import {
  getHomeAPI,
  getGuestHomeAPI,
  getFeatCategoriesAPI,
  getTopBrandsAPI,
} from '../constants/apiConstants';

export const getHomeContent = is_guest_logged_in => {
  const is_auth_required = is_guest_logged_in !== true;
  const home_api = is_auth_required ? getHomeAPI : getGuestHomeAPI;
  return async dispatch => {
    dispatch(
      executeApiAction('get', home_api, GET_HOME_CONTENT, is_auth_required),
    );
  };
};

export const getFeatCategories = ({page}, onSuccess, onError) => {
  const featCatApi = `${getFeatCategoriesAPI}?page=${page}`;

  return async dispatch => {
    dispatch(
      executeApiAction(
        'get',
        featCatApi,
        'GET_FEAT_CATEGORIRES',
        true,
        {},
        onSuccess,
        onError,
      ),
    );
  };
};

export const getTopBrands = ({page}, onSuccess, onError) => {
  const topBrandApi = `${getTopBrandsAPI}?page=${page}`;

  return async dispatch => {
    dispatch(
      executeApiAction(
        'get',
        topBrandApi,
        'GET_TOP_BRANDS',
        true,
        {},
        onSuccess,
        onError,
      ),
    );
  };
};

export const resetHomeError = () => {
  return {
    type: RESET_HOME_ERROR,
  };
};
