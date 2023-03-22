import React, { useState, useEffect } from 'react';
import { BackHandler, I18nManager } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ChooseLanguageView from './ChooseLanguageView';
import * as LoginActions from '../../actions/LoginActions';
import RNRestart from 'react-native-restart';
import _ from 'lodash';

const ChooseLanguageScreen = props => {
  useEffect(() => handleComponentMounted(), []);

  const handleComponentMounted = () => {
    BackHandler.addEventListener(
      'hardwareBackPress',
      (backPressed = () => {
        BackHandler.exitApp();
        return true;
      }),
    );
  };

  const selectLanguage = selectedLanguage => {
    if (selectedLanguage === 'EN') {
      I18nManager.forceRTL(false);
      setTimeout(() => {
        RNRestart.Restart();
      }, 500);
    } else if (selectedLanguage === 'AR') {
      I18nManager.forceRTL(true);
      setTimeout(() => {
        RNRestart.Restart();
        props.saveSelectedLanguage(selectedLanguage, props.token ? props.token : null);
      }, 500);
    }
    props.saveSelectedLanguage(selectedLanguage, props.token ? props.token : null);
  };

  return <ChooseLanguageView selectLanguage={selectLanguage} />;
};

const mapStateToProps = (state, props) => {
  return {
    chosenLanguage: _.get(state, 'loginReducer.chosenLanguage', ''),
    token: _.get(state, 'loginReducer.userData.data.access_token', null),
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      saveSelectedLanguage: LoginActions.saveSelectedLanguage,
    },
    dispatch,
  );
};

const chooseLanguageWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChooseLanguageScreen);

chooseLanguageWithRedux.navigationOptions = ({ navigation }) => ({
  header: null,
});

export default chooseLanguageWithRedux;
