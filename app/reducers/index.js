import {combineReducers} from 'redux';
import addressReducer from './addressReducer';
import signupReducer from './signupReducer';
import termsFaqPrivacyReducer from './termsFaqPrivacyReducer';
import loginReducer from './loginReducer';
import editUserReducer from './editUserReducer';
import wishlistReducer from './wishlistReducer';
import supportChatReducer from './supportChatReducer';
import homeReducer from './homeReducer';
import categoryReducer from './categoryReducer';
import productReducer from './productReducer';
import searchProductReducer from './searchProductReducer';
import orderDetailsReducer from './orderReducer';
import settingsReducer from './settingsReducer';
import notificationReducer from './notificationReducer';

const rootReducer = combineReducers({
  addressReducer,
  supportChatReducer,
  signupReducer,
  termsFaqPrivacyReducer,
  loginReducer,
  editUserReducer,
  wishlistReducer,
  notificationReducer,
  home: homeReducer,
  allCats: categoryReducer,
  product: productReducer,
  search: searchProductReducer,
  order: orderDetailsReducer,
  settings: settingsReducer,
});

export default rootReducer;
