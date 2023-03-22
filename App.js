/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, View, I18nManager, Text } from 'react-native';
import globals from './app/lib/globals';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoginContainer, HomeContainer } from './app/lib/navigationRoutes';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';

import {
  notificationReceived,
  redirectToNotificationDetails,
} from './app/actions';
import { useDispatch } from 'react-redux';
import * as NotificationActions from './app/actions/notificationActions';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

import InAppNotificationModal from './app/containers/NotificationPopup/InAppNotificationModal';

const App: () => React$Node = props => {
  const dispatch = useDispatch();

  useEffect(() => handleComponentMounted(), []);
  const handleComponentMounted = () => {
    SplashScreen.hide();
  };

  const onCloseNotification = () => {
    dispatch(notificationReceived(false));
    dispatch(redirectToNotificationDetails(true));
  };

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        hidden={false}
        backgroundColor={'transparent'}
      />

      <InAppNotificationModal
        hide={() => onCloseNotification()}
        visible={props.isNotificationReceived}
        title={props?.notificationReceivedData?.title || ''}
        body={props?.notificationReceivedData?.body || ''}
        redirect={() => {
          onCloseNotification();
        }}
      />

      <View style={{ width: '100%', height: '100%' }}>
        <HomeContainer cartCount={props.cartCount} />
      </View>
      <Toast ref={ref => Toast.setRef(ref)} />
    </>
  );
};

const mapStateToProps = (state, props) => {
  return {
    isLogged: state.loginReducer.isLogged,
    cartCount: state.product.cartCount,
    isNotificationReceived: state.notificationReducer.isNotificationReceived,
    notificationReceivedData:
      state.notificationReducer.notificationReceivedData,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

const appWithRedux = connect(mapStateToProps, mapDispatchToProps)(App);

appWithRedux.navigationOptions = ({ navigation }) => ({
  header: null,
});

export default appWithRedux;
