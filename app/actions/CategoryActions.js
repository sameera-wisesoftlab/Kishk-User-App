import {GET_ALL_CATEGORIES} from './types';
import {executeApiAction} from '../lib/apiHelper';
import {getAllCatAPI} from '../constants/apiConstants';

export const getAllCategories = () => {
  return async dispatch => {
    dispatch(executeApiAction('get', getAllCatAPI, GET_ALL_CATEGORIES, true));
  };
};
