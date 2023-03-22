import {I18nManager} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {store} from '../../configureStore';
import apiHelper from '../lib/apiHelper';

import functions from '../lib/functions';
import appTexts from '../lib/appTexts';
import _ from 'lodash';

export default class serviceWrapperAwait {
  root_url = apiHelper.getBaseUrl();

  async post(url, params, contentType = 'application/json') {
    this.checkConnection();

    const api_url = this.root_url + url;
    let data = params;
    if (contentType == 'application/json') {
      data = JSON.stringify(data);
    }

    let options = {
      method: 'POST',
      headers: {
        'Content-Type': contentType,
        Accept: 'application/json',
      },
      body: data,
    };
    const userData = store.getState().loginReducer.userData;
    if (userData && _.get(userData, 'data.access_token', '')) {
      try {
        options.headers['Authorization'] =
          'Bearer ' + _.get(userData, 'data.access_token', '');
      } catch (error) {
        console.log('Servicewrapper async: No key found');
      }
    }

    try {
      const response = await fetch(api_url, options);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.log('srvce err', error);
      return 'errors';
    }
  }

  async put(url, params) {
    this.checkConnection();

    const api_url = this.root_url + url;

    let data = params;
    data = JSON.stringify(data);

    let options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: data,
    };
    const userData = store.getState().loginReducer.userData;
    if (userData && userData.data && _.get(userData, 'data.access_token', '')) {
      try {
        options.headers['Authorization'] =
          'Bearer ' + _.get(userData, 'data.access_token', '');
      } catch (error) {
        console.log('Servicewrapper async: No key found');
      }
    }

    try {
      const response = await fetch(api_url, options);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async get(url, options_params) {
    this.checkConnection();
    let url_with_lang = url;

    if (options_params.language_attach) {
      const language = I18nManager.isRTL ? 'ar' : 'en';
      if (
        url_with_lang.indexOf('language') == -1 &&
        url_with_lang.indexOf('?') == -1
      ) {
        url_with_lang = url + '?language=' + language;
      } else if (
        url_with_lang.indexOf('language') == -1 &&
        url_with_lang.indexOf('?') != -1
      ) {
        url_with_lang = url + '&language=' + language;
      }
    }

    const api_url = this.root_url + url_with_lang;
    let options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };

        if(options_params.is_auth_required) {

            const userData = store.getState().loginReducer.userData;
            if (userData && _.get(userData, "data.access_token", '')) {
                try {
                    options.headers['Authorization'] = 'Bearer ' + _.get(userData, "data.access_token", '');
                     }
                catch (error) {
                    console.log('Servicewrapper async: No key found');
                }
            }
      }
   
      try {
      const response = await fetch(api_url, options);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async delete(url) {
    this.checkConnection();

    const api_url = this.root_url + url;

    let data = {};
    data.language = I18nManager.isRTL ? 'ar' : 'en';
    data = JSON.stringify(data);

    let options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: data,
    };
    const isLoggedIn = store.getState().authReducer.loggedIn;
    const langSelected = store.getState().langReducer.isRTL ? 'ar' : 'en';
    if (isLoggedIn) {
      try {
        options.headers['Authorization'] =
          'Bearer ' + store.getState().userReducer.userInfo.key;
      } catch (error) {
        console.log('Servicewrapper async: No key found');
      }
    }

    try {
      const response = await fetch(api_url, options);
      const responseJson = await response.json();
      responseJson.langSelected = langSelected;
      return responseJson;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  checkConnection = () => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.type == 'unknown' || state.type == 'none') {
        functions.displayToast(
          'error',
          'top',
          appTexts.ALERT_MESSAGES.error,
          appTexts.ALERT_MESSAGES.noInternet,
        );
      }
    });

    unsubscribe();
  };
}
