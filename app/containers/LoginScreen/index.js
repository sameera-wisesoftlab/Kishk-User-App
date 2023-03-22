import React, { useState, useEffect } from 'react';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import LoginView from './LoginView';
import functions from '../../lib/functions';
import appTexts from '../../lib/appTexts';
import _ from 'lodash';
import * as LoginActions from '../../actions/LoginActions';
import { bindActionCreators } from 'redux';

import { useDispatch, useSelector } from 'react-redux';
import { saveCartKey, saveCartCount } from '../../actions';

const LoginScreen = props => {
  const dispatch = useDispatch();
  const [phoneerrorflag, setphoneerrorflag] = useState(false);
  const [phone, setPhone] = useState('');

  useEffect(() => handleComponentMounted(), []);

  const handleComponentMounted = () => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      BackHandler.exitApp();
      return true;
    });
  };

  useEffect(() => {
    return props.navigation.addListener('focus', () => {
      setPhone('');
    });
  }, [props.navigation]);

  useEffect(() => handleComponentUpdated());

  const handleComponentUpdated = () => {
    if (
      _.get(props, 'otpAPIResponse') &&
      _.get(props, 'otpAPIResponse.success')
    ) {
      functions.displayToast(
        'success',
        'top',
        appTexts.ALERT_MESSAGES.success,
        _.get(props, 'otpAPIResponse.msg'),
      );

      props.navigation.navigate('OtpScreen', { type: phone, text: 'phone' });
      props.getOtpSuccess(null);
    } else if (
      _.get(props, 'otpAPIResponseError') &&
      _.get(props, 'otpAPIResponseError.success') === false
    ) {
      functions.displayToast(
        'error',
        'top',
        appTexts.LOGIN_TOASTMESSAGES.error,
        _.get(props, 'otpAPIResponseError.error.msg'),
      );
      props.resetOtpError(null);
    }
  };

  useEffect(() => componentDidMount());

  const componentDidMount = () => { };

  const loginButtonPress = () => {
    if (phone.trim() === '') {
      functions.displayToast(
        'error',
        'top',
        appTexts.LOGIN_TOASTMESSAGES.error,
        appTexts.LOGIN_TOASTMESSAGES.required,
      );
    } else if (!functions.isValidPhone(phone.trim())) {
      functions.displayToast(
        'error',
        'top',
        appTexts.LOGIN_TOASTMESSAGES.error,
        appTexts.LOGIN_TOASTMESSAGES.digit,
      );
    } else {
      props.guestLogin(false);
      let params = {
        type: 'phone',
        send_to: phone,
      };
      props.getOtp(params);
    }
  };

  const onRightWordClick = () => {
    if (props.is_guest_logged_in !== true) {
      props.guestLogin(true);
      dispatch(saveCartKey(''));
      dispatch(saveCartCount(''));
    }
    props.navigation.navigate('TabNavigator', { screen: 'HomeScreen' });
  };

  const validatePhone = flag => {
    setphoneerrorflag(flag);
  };

  const onBackButtonClick = () => {
    if (props.is_guest_logged_in === true) {
      props.navigation.navigate('TabNavigator');
    } else {
      props.navigation.navigate('LoginStackNavigator', {
        screen: 'AppIntrosliderloginScreen',
      });
    }
  };

  const onEmailSigninClick = () => {
    props.navigation.navigate('LoginStackNavigator', {
      screen: 'EmailLoginScreen',
    });
  };

  return (
    <LoginView
      loginButtonPress={loginButtonPress}
      validatePhone={validatePhone}
      signUpButtonPress={() => props.navigation.navigate('SignupScreen')}
      onBackButtonClick={onBackButtonClick}
      setPhone={setPhone}
      isLoading={props.isLoading}
      phone={phone}
      onEmailSigninClick={onEmailSigninClick}
      onRightWordClick={onRightWordClick}
    />
  );
};
const mapStateToProps = (state, props) => {
  return {
    otpAPIResponse: _.get(state, 'loginReducer.getotpAPIResponse', ''),
    isLoading: _.get(state, 'loginReducer.isLoading', ''),
    otpAPIResponseError: _.get(
      state,
      'loginReducer.getotpAPIResponseError',
      '',
    ),
    is_guest_logged_in: state.loginReducer.is_guest_logged_in,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getOtp: LoginActions.getOtp,
      getOtpSuccess: LoginActions.getOtpSuccess,
      resetOtpError: LoginActions.otpServiceError,
      guestLogin: LoginActions.guestLogin,
    },
    dispatch,
  );
};

const loginWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);

loginWithRedux.navigationOptions = ({ navigation }) => ({
  header: null,
});

export default loginWithRedux;
