import {GET_DEALS_CONTENT} from './types';
import {executeApiAction} from '../lib/apiHelper';
import {getDealsAPI} from '../constants/apiConstants';

export const getDealsContent = (onSuccess, onError) => {
  return async dispatch => {
    dispatch(
      executeApiAction(
        'get',
        getDealsAPI,
        GET_DEALS_CONTENT,
        true,
        {},
        onSuccess,
        onError,
      ),
    );
  };
};
