// Imports: Dependencies
import AsyncStorage from '@react-native-community/async-storage';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';

// Imports: Redux
import rootReducer from './app/reducers';
import termsFaqPrivacyReducer from './app/reducers/termsFaqPrivacyReducer';
// Middleware: Redux Thunk (Async/Await)
const middleware = [thunk];

// // Middleware: Redux Logger (For Development)
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger());
// }

// Middleware: Redux Persist Config
const persistConfig = {
  // Root?
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: [
    'loginReducer',
    'addressReducer',
    'signupReducer',
    'termsFaqPrivacyReducer',
    'supportChatReducer',
    'wishlistReducer',
    'editUserReducer',
    'product',
    'notificationReducer',
  ],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(persistedReducer, applyMiddleware(...middleware));

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export {store, persistor};
