import React, { useState, useEffect } from 'react';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import EmailLoginView from './EmailLoginView';
import functions from '../../lib/functions';
import appTexts from '../../lib/appTexts';
import _ from 'lodash';
import * as LoginActions from '../../actions/LoginActions';
import { bindActionCreators } from 'redux';

import { useDispatch, useSelector } from 'react-redux';
import { saveCartKey, saveCartCount } from '../../actions';

const EmailLoginScreen = props => {
  const dispatch = useDispatch();
  const [mailerrorflag, setmailerrorflag] = useState(false);
  const [mail, setMail] = useState('');
  const [loader, setLoader] = useState(false);
  const [isSmsLogin, setIsSmsLogin] = useState('disable');

  useEffect(() => handleComponentMounted(), []);

  const handleComponentMounted = () => {
    props.smsStatusResponse();
    BackHandler.addEventListener('hardwareBackPress', () => {
      BackHandler.exitApp();
      return true;
    });
  };

  useEffect(() => {
    return props.navigation.addListener('focus', () => {
      // setIsSmsLogin('disable');
      // props.smsStatusResponse();
      setMail('');
    });
  }, [props.navigation]);

  useEffect(() => handleComponentUpdated());

  const handleComponentUpdated = () => {
    if (
      _.get(props, 'otpAPIResponse') &&
      _.get(props, 'otpAPIResponse.success')
    ) {
      setLoader(false);
      props.navigation.navigate('OtpScreen', { type: mail, text: 'email' });
      props.getOtpSuccess(null);
    } else if (
      _.get(props, 'otpAPIResponseError') &&
      _.get(props, 'otpAPIResponseError.success') === false
    ) {
      setLoader(false);
      functions.displayToast(
        'error',
        'top',
        appTexts.LOGIN_TOASTMESSAGES.error,
        _.get(props, 'otpAPIResponseError.error.msg'),
      );
      props.resetOtpError(null);
    }

    if (_.get(props, 'smsStatus.data')) {
      setIsSmsLogin(_.get(props, 'smsStatus.data.sms', 'disable'));
      // props.resetSmsStatus();
    }
  };

  useEffect(() => componentDidMount());

  const componentDidMount = () => { };

  const loginButtonPress = () => {
    setLoader(true);
    if (mail.trim() === '') {
      setLoader(false);
      functions.displayToast(
        'error',
        'top',
        appTexts.LOGIN_TOASTMESSAGES.error,
        appTexts.LOGIN_TOASTMESSAGES.requiredmail,
      );
    } else if (!functions.isValidEmail(mail.trim())) {
      setLoader(false);
      functions.displayToast(
        'error',
        'top',
        appTexts.LOGIN_TOASTMESSAGES.error,
        appTexts.LOGIN_TOASTMESSAGES.mailvalid,
      );
    } else {
      props.guestLogin(false);
      let params = {
        type: 'email',
        send_to: mail,
      };
      props.getOtp(params);
    }
  };

  const validateMail = flag => {
    setmailerrorflag(flag);
  };

  const onBackButtonClick = () => {
    if (props.is_guest_logged_in === true) {
      props.navigation.navigate('TabNavigator');
    } else {
      if (isSmsLogin == 'enable') {
        props.navigation.navigate('LoginStackNavigator', {
          screen: 'LoginScreen',
        });
      } else {
        props.navigation.navigate('LoginStackNavigator', {
          screen: 'AppIntrosliderloginScreen',
        });
      }
    }
  };

  const onPhoneLoginClick = () => {
    props.navigation.navigate('LoginStackNavigator', { screen: 'LoginScreen' });
  };

  const onRightWordClick = () => {
    if (props.is_guest_logged_in !== true) {
      props.guestLogin(true);
      dispatch(saveCartKey(''));
      dispatch(saveCartCount(''));
    }
    props.navigation.navigate('TabNavigator', { screen: 'HomeScreen' });
  };

  return (
    <EmailLoginView
      loginButtonPress={loginButtonPress}
      validateMail={validateMail}
      signUpButtonPress={() => props.navigation.navigate('SignupScreen')}
      onBackButtonClick={onBackButtonClick}
      setMail={setMail}
      isLoading={props.isLoading || props.isSmsDataLoading}
      mail={mail}
      onPhoneLoginClick={onPhoneLoginClick}
      onRightWordClick={onRightWordClick}
      enableDisableStatusSMS={isSmsLogin}
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
    smsStatus: _.get(state, 'loginReducer.smsstatus', ''),
    is_guest_logged_in: state.loginReducer.is_guest_logged_in,
    isSmsDataLoading: state.loginReducer.isSmsDataLoading
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getOtp: LoginActions.getOtp,
      getOtpSuccess: LoginActions.getOtpSuccess,
      resetOtpError: LoginActions.otpServiceError,
      guestLogin: LoginActions.guestLogin,
      smsStatusResponse: LoginActions.getSmsStatus,
      resetSmsStatus: LoginActions.resetSmsStatus,
    },
    dispatch,
  );
};

const emailloginWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmailLoginScreen);

emailloginWithRedux.navigationOptions = ({ navigation }) => ({
  header: null,
});

export default emailloginWithRedux;
