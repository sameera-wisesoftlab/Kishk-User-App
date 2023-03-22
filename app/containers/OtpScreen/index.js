import React, { useState, useEffect } from 'react';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import OtpView from './OtpView';

import { bindActionCreators } from 'redux';
import _ from 'lodash';
import functions from '../../lib/functions';
import appTexts from '../../lib/appTexts';
import * as LoginActions from '../../actions/LoginActions';
import messaging from '@react-native-firebase/messaging';

import { useDispatch, useSelector } from 'react-redux';
import { saveCartKey, saveCartCount } from '../../actions';

const OtpScreen = props => {
  const dispatch = useDispatch();
  const [otp, setOtp] = useState('');
  const [loader, setLoader] = useState(false);
  const [fcm_token, setFcmToken] = useState('');
  const [success, setSuccess] = useState(false);
  const { cartKey } = useSelector(state => state.product);

  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      if (props.isLoading === true) {
        setTimeLeft(timeLeft);
      } else {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft, props.isLoading]);

  /** will focus */
  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      setTimeLeft(120);
      setSuccess(false);
    });

    return () => {
      unsubscribe();
    };
  }, [props.navigation]);

  //mounted
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
  useEffect(() => {
    let isMounted = true;
    const fetchToken = async () => {
      const _token = await requestUserPermission();
      if (_token != '' && isMounted) {
        setFcmToken(_token);
      }
    };
    fetchToken();
    return () => {
      isMounted = false;
    };
  });

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      return await getFcmToken();
    }
    return '';
  };

  const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      return fcmToken;
    }

    return '';
  };

  useEffect(() => handleComponentUpdated());
  const handleComponentUpdated = () => {
    /** user logged in */
    if (
      _.get(props, 'userData') &&
      _.get(props, 'userData.success') &&
      success == false
    ) {
      console.log(_.get(props, 'userData.data.cart_key', ''), ' Cart key');
      setSuccess(true);
      setLoader(false);
      if (props.isLogged) {
        props.guestLogin(false);
        if (_.get(props, 'userData.data.cart_key', '')) {
          /** Retain cart key on login if user have previously added cart */
          dispatch(saveCartKey(props.userData.data.cart_key));
        } else {
          dispatch(saveCartKey(''));
        }
        if (
          props.userData?.data?.cart_count &&
          props.userData?.data?.cart_count > 0
        ) {
          /** Retain cart count on login if user have previously added cart */
          dispatch(saveCartCount(props.userData.data.cart_count));
          props.navigation.navigate('TabNavigator', {
            screen: 'CartScreen',
            params: { from: 'otp' },
          });
        } else {
          props.navigation.navigate('TabNavigator', { screen: 'HomeScreen' });
          dispatch(saveCartCount(''));
        }
      }
    }

    /** Otp validation failed */
    if (
      _.get(props, 'otpAPIError') &&
      _.get(props, 'otpAPIError.success') === false
    ) {
      setLoader(false);
      functions.displayToast(
        'error',
        'top',
        appTexts.LOGIN_TOASTMESSAGES.error,
        _.get(props, 'otpAPIError.error.msg'),
      );
      props.resetOtpError(null);
    }

    /** resent otp success */
    if (_.get(props, 'resendOtpData.success') === true) {
      setLoader(false);
      functions.displayToast(
        'success',
        'top',
        appTexts.LOGIN_TOASTMESSAGES.success,
        _.get(props, 'resendOtpData.msg'),
      );
      props.resendOtpReset(null);
    }
  };

  const resendOtpPress = () => {
    setLoader(true);
    let apiParam = {
      type: props.route.params.text,
      send_to: props.route.params.type,
    };
    props.resendOtp(apiParam);
  };

  const loginButtonPress = () => {
    setLoader(true);
    if (otp.trim() === '') {
      setLoader(false);
      functions.displayToast(
        'error',
        'top',
        appTexts.LOGIN_TOASTMESSAGES.error,
        appTexts.LOGIN_TOASTMESSAGES.otp,
      );
    } else {
      let params = {
        type: props.route.params.text,
        send_to: props.route.params.type,
        otp: otp,
        fcm_token: fcm_token,
        cart_key: cartKey,
      };
      props.doLogin(params);
      console.log(cartKey, ' Cart key b4');
    }
  };

  const onBackButtonClick = () => {
    props.navigation.goBack();
  };
  return (
    <OtpView
      loginButtonPress={loginButtonPress}
      onBackButtonClick={onBackButtonClick}
      setOtp={setOtp}
      isLoading={props.isLoading}
      resendOtpPress={resendOtpPress}
      send_to={props.route.params.type}
      timeLeft={timeLeft}
      setTimeLeft={setTimeLeft}
    />
  );
};

const mapStateToProps = (state, props) => {
  return {
    userData: state.loginReducer?.userData || {},
    isLogged: _.get(state, 'loginReducer.isLogged', ''),
    resendOtpData: _.get(state, 'loginReducer.resendOtp', ''),
    otpAPIError: _.get(state, 'loginReducer.otpAPIError', ''),
    isLoading: _.get(state, 'loginReducer.isLoading', ''),
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      doLogin: LoginActions.doLogin,
      resendOtp: LoginActions.resendOtp,
      resendOtpReset: LoginActions.resendOtpServiceActionSuccess,
      resetOtpError: LoginActions.loginServiceError,
      guestLogin: LoginActions.guestLogin,
    },
    dispatch,
  );
};

const otpScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OtpScreen);

otpScreenWithRedux.navigationOptions = ({ navigation }) => ({
  header: null,
});

export default otpScreenWithRedux;
