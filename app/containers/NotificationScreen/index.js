import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {connect} from 'react-redux';
import NotificationView from './NotificationView';
import {bindActionCreators} from 'redux';

import globals from '../../lib/globals';
import functions from '../../lib/functions';
import * as notifyActions from '../../actions/notifyActions';
import _ from 'lodash';
const NotificationScreen = props => {
  //Initialising states
  const [istoggle, setIstoggle] = useState(false);

  //will focus
  useEffect(() => {
    return props.navigation.addListener("focus", () => {
      props.notificationBadgeReset(props.token)
      props.notificationActive(false);
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
        } else {
          functions.displayAlert(
            null,
            globals.ALERT_MESSAGES.noInternet,
            'Notification',
          );
        }
      });
    });
  }, [props.navigation]);

  //mounted
  useEffect(() => handleComponentMounted(), []);

  const handleComponentMounted = () => {
    props.notificationBadgeReset(props.token)
    props.notificationActive(false);
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
      } else {
        functions.displayAlert(
          null,
          globals.ALERT_MESSAGES.noInternet,
          'Notification',
        );
      }
    });
  };

  //unmount
  useEffect(() => {
    return () => {
      handleComponentUnmount();
    };
  }, []);

  const handleComponentUnmount = () => {};

  //updated
  useEffect(() => handleComponentUpdated());

  const handleComponentUpdated = () => {};

  const onBackButtonClick = () => {
    props.navigation.goBack();
  };

  const onValueChange = value => {
    setIstoggle({toggle: value});
  };

  return (
    <NotificationView
    istoggle={istoggle}
    onValueChange={onValueChange}
    onBackButtonClick={onBackButtonClick}
    navigateTochat={(id) => {
      props.navigation.navigate('ChatScreen', {chat_id: id});
    }}
    navigateToDetail={(id) => {
      props.navigation.navigate('OrderDetailsScreen', {id: id} );
    }}
     />
  );
};

const mapStateToProps = (state, props) => {
  return {
    token: _.get(state, 'loginReducer.userData.data.access_token', ''),
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
     notificationActive: notifyActions.notificationActive,
     notificationBadgeReset: notifyActions.notificationBadgeReset,
    },
    dispatch,
  );
};

const profileScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationScreen);

profileScreenWithRedux.navigationOptions = ({navigation}) => ({
  header: null,
});

export default profileScreenWithRedux;
