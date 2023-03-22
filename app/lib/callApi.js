import axios from 'react-native-axios';
import {baseURL} from '../constants/apiConstants';

const constructUrl = api => `${baseURL}${api}`;
const callApi = async (method, api, authorizationToken, data = {}) => {
  const headers = () => {
    if (authorizationToken) {
      return {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authorizationToken}`,
      };
    }

    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  };

  try {
    if (method === 'get') {
      const response = await axios.get(constructUrl(api), {headers: headers()});
      return {status: response.status, data: response.data};
    }
    if (method === 'post') {
      const response = await axios.post(constructUrl(api), data, {
        headers: headers(),
      });
      return {status: response.status, data: response.data};
    }
  } catch (error) {
    console.log('CalApi Caught exception: ', error, 'Api: ', api);
    throw error;
  }
};

export default callApi;
