import React, {useEffect, useState} from 'react';

import NetInfo from '@react-native-community/netinfo';
import {connect} from 'react-redux';
import ChatView from './ChatView';
import {bindActionCreators} from 'redux';
import globals from '../../lib/globals';
import functions from '../../lib/functions';

const ChatScreen = props => {
  //will focus
  useEffect(() => {
    return props.navigation.addListener('focus', () => {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
        } else {
          functions.displayAlert(
            null,
            globals.ALERT_MESSAGES.noInternet,
            'Chat',
          );
        }
      });
    });
  }, [props.navigation]);

  //mounted
  useEffect(() => handleComponentMounted(), []);

  const handleComponentMounted = () => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
      } else {
        functions.displayAlert(null, globals.ALERT_MESSAGES.noInternet, 'Chat');
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

  const logoutButtonPress = () => {
    props.doLogout();
  };

  let chat_id = '';
  try {
    chat_id = props.route.params.chat_id;
  } catch (err) {
    chat_id = '';
  }

  return (
    <ChatView
      logoutButtonPress={logoutButtonPress}
      navigation={props.navigation}
      chat_id={chat_id}
      isFocused={props.navigation.isFocused}
      navigateToNotification={() =>
        props.navigation.navigate('NotificationScreen')
      }
    />
  );
};

const mapStateToProps = (state, props) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

const ChatScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatScreen);

ChatScreenWithRedux.navigationOptions = ({navigation}) => ({
  header: null,
});

export default ChatScreenWithRedux;
