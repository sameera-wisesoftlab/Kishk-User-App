import React, { useState, useEffect } from 'react';
import { BackHandler, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import SignupView from './SignupView';
import appTexts from '../../lib/appTexts';
import { bindActionCreators } from 'redux';
import functions from '../../lib/functions';
import NetInfo from '@react-native-community/netinfo';
import _ from 'lodash';
import * as signupActions from '../../actions/signupActions';
import * as LoginActions from '../../actions/LoginActions';
import moment from 'moment';

const SignupScreen = props => {
  //Initialising states
  const [firstname, setFirstname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [isCheckboxClicked, setIsCheckboxClicked] = useState(false);
  const [gender, setGender] = useState('');
  const [bdate, setBdate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [birthDate, setBirthDate] = useState(
    moment(new Date()).format('YYYY-MM-DD'),
  );
  useEffect(() => handleComponentMounted(), []);
  const handleComponentMounted = () => {
    props.smsStatusResponse();
    BackHandler.addEventListener('hardwareBackPress', () => {
      BackHandler.exitApp();
      return true;
    });
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        props.resetSuccessMessage();
      } else {
        functions.displayAlert(
          null,
          globals.ALERT_MESSAGES.noInternet,
          'Signup',
        );
      }
    });
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      BackHandler.exitApp();
      return true;
    });
  }, [props.navigation]);

  useEffect(() => handleComponentUpdated());
  const handleComponentUpdated = () => {
    if (
      _.get(props, 'sendRequestSuccess') &&
      _.get(props, 'sendRequestSuccess.success')
    ) {
      functions.displayToast(
        'success',
        'top',
        appTexts.ALERT_MESSAGES.success,
        _.get(props, 'sendRequestSuccess.msg'),
      );
      props.navigation.navigate('OtpScreen', { type: mobile, text: 'phone' });
      props.resetSuccessMessage({});
      setFirstname('');
      setMiddlename('');
      setLastname('');
      setEmail('');
      setMobile('');
    } else if (
      _.get(props, 'signupError') &&
      _.get(props, 'signupError.success') === false
    ) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        _.get(props, 'signupError.error.msg'),
      );
      props.SignupActionError({});
    }
  };

  const submitMobileNumber = () => {
    if (_.get(props, 'smsStatus.data.sms') === 'disable') {
      props.navigation.navigate('LoginStackNavigator', {
        screen: 'EmailLoginScreen',
      });
    } else {
      props.navigation.navigate('LoginStackNavigator', { screen: 'LoginScreen' });
    }
    props.resetSmsStatus();
  };

  const onBoxClick = () => {
    setIsCheckboxClicked(!isCheckboxClicked);
  };

  const onCalendarPress = () => {
    //alert('lo');
    setShowDatePicker(true);
    setDate(birthDate);
  };

  const cancelClick = () => {
    //setDate(birthDate);
    setShowDatePicker(false);
  };
  const doneClick = () => {
    // setBirthDate(date);
    setBdate(moment(birthDate).format('DD-MM-YYYY'));
    setShowDatePicker(false);
  };
  const onBackButtonClick = () => {
    props.navigation.goBack();
  };

  const onTermsClick = () => {
    props.navigation.navigate('TermsScreen');
  };

  const validateEmail = emailField => {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(emailField) == false) {
      return false;
    }
    return true;
  };

  const isValidPhone = phoneField => {
    let reg = /^[0-9]{8}$/;
    if (reg.test(phoneField)) return true;
    else false;
  };

  //Signup form
  const signupPress = () => {
    if (firstname.trim() === '' || firstname === null) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        appTexts.ALERT_MESSAGES.firstnameRequired,
      );
      return;
    } else if (middlename.trim() === '' || middlename === null) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        appTexts.ALERT_MESSAGES.middlenameRequired,
      );
      return;
    } else if (lastname.trim() === '' || lastname === null) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        appTexts.ALERT_MESSAGES.lastnameRequired,
      );
      return;
    } else if (email.trim() === '' || email === null) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        appTexts.ALERT_MESSAGES.emailRequired,
      );
      return;
    } else if (validateEmail(email.trim()) === false) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        appTexts.ALERT_MESSAGES.validEmailRequired,
      );
      return;
    } else if (mobile.trim() === '' || mobile === null) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        appTexts.ALERT_MESSAGES.phoneRequired,
      );
      return;
    } else if (bdate.trim() === '' || bdate === null) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        appTexts.ALERT_MESSAGES.dobRequired,
      );
      return;
    } else if (!isValidPhone(mobile.trim())) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        appTexts.LOGIN_TOASTMESSAGES.digit,
      );
      return;
    } else if (isCheckboxClicked !== true) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        appTexts.ALERT_MESSAGES.termsRequired,
      );

      return false;
    } else {
      Keyboard.dismiss();
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          let apiParams = {
            f_name: firstname.trim(),
            m_name: middlename.trim(),
            l_name: lastname.trim(),
            email: email.trim(),
            phone: mobile.trim(),
            gender: gender.trim(),
            dob: bdate.trim(),
          };
          props.signupSubmit(apiParams);
          console.debug(apiParams);
        } else {
          functions.displayToast(
            'error',
            'top',
            appTexts.ALERT_MESSAGES.error,
            appTexts.ALERT_MESSAGES.noInternet,
          );
          return;
        }
      });
    }
  };

  return (
    <SignupView
      onBackButtonClick={onBackButtonClick}
      firstname={firstname}
      setFirstname={setFirstname}
      middlename={middlename}
      setMiddlename={setMiddlename}
      lastname={lastname}
      setLastname={setLastname}
      email={email}
      setEmail={setEmail}
      mobile={mobile}
      setMobile={setMobile}
      signupPress={signupPress}
      isloading={props.isloading}
      submitMobileNumber={submitMobileNumber}
      isCheckboxClicked={isCheckboxClicked}
      onBoxClick={onBoxClick}
      onTermsClick={onTermsClick}
      gender={gender}
      setGender={setGender}
      onCalendarPress={onCalendarPress}
      bdate={bdate}
      cancelClick={cancelClick}
      doneClick={doneClick}
      birthDate={birthDate}
      isShowDatePicker={showDatePicker}
      setSelectedDate={_date => {
        setBirthDate(moment(_date).format('YYYY-MM-DD'));
      }}
      selectedDate={date}
    />
  );
};

const mapStateToProps = (state, props) => {
  return {
    isloading: _.get(state, 'signupReducer.isLoading', ''),
    sendRequestSuccess: _.get(state, 'signupReducer.signupsendsuccessmsg', ''),
    signupError: _.get(state, 'signupReducer.signuperror', ''),
    smsStatus: _.get(state, 'loginReducer.smsstatus', ''),
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      resetSuccessMessage: signupActions.signupActionReset,
      SignupActionError: signupActions.SignupActionError,
      signupSubmit: signupActions.signupSubmitSend,
      smsStatusResponse: LoginActions.getSmsStatus,
      resetSmsStatus: LoginActions.resetSmsStatus,
    },
    dispatch,
  );
};

const SignupWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupScreen);

SignupWithRedux.navigationOptions = ({ navigation }) => ({
  header: null,
});

export default SignupWithRedux;
