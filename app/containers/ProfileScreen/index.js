import React, { useEffect, useState } from 'react';
import { I18nManager, BackHandler, ToastAndroid } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { connect } from 'react-redux';
import ProfileView from './ProfileView';
import { bindActionCreators } from 'redux';

import appTexts from '../../lib/appTexts';
import functions from '../../lib/functions';
import RNRestart from 'react-native-restart';
import * as editUserActions from '../../actions/editUserActions';
import * as LoginActions from '../../actions/LoginActions';
import _ from 'lodash';
import * as notifyActions from '../../actions/notifyActions';
import { useDispatch, useSelector } from 'react-redux';
import messaging from '@react-native-firebase/messaging';

import {
  getSettingsContent,
  resetSettingsError,
  resetSettingsTempData,
} from '../../actions';

import {
  resetCartKey,
  resetCheckoutData,
  resetCartContent,
  resetPromocode,
  saveCartCount,
} from '../../actions';

const ProfileScreen = props => {
  const dispatch = useDispatch();
  const { is_guest_logged_in, isSmsDataLoading } = useSelector(
    state => state.loginReducer,
  );

  const { settingsData, settingsError, isSettingsLoading, tempSettingsData } =
    useSelector(state => state.settings);

  //Initialising states
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isBoxModalVisible, setIsBoxModalVisible] = useState(false);
  const [isHelpModalVisible, setIsHelpModalVisible] = useState(false);
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);
  const [isContactModalVisible, setIsContactModalVisible] = useState(false);
  const [isLanguageModalVisible, setIsLanguageModalVisible] = useState(false);
  const [isWishlistModalVisible, setIsWishlistModalVisibile] = useState(false);
  const [isRateModalVisible, setIsRateModalVisible] = useState(false);
  const [isPriceModalVisible, setIsPriceModalVisible] = useState(false);
  const [isSelectLanguageModalVisible, setIsSelectLanguageModalVisibile] =
    useState(false);
  const [isCancelModalVisible, setIsCancelModalVisibile] = useState(false);
  const [isSupportModalVisible, setIsSupportModalVisibile] = useState(false);
  const [notifyData, setNotifyData] = useState({});
  const [displayNotificationPopup, setDisplayNotificationPopup] =
    useState(false);
  const [isLoginPressed, setIsLoginPressed] = useState(false);
  const [isLogoutCompeted, setIsLogoutCompeted] = useState(false);

  /** will focus */
  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      if (is_guest_logged_in !== true) {
        props.getNotificationCount(props.token);
        props.notificationBadgeReset(props.token);
        props.editUserData(props.token);
      }
      BackHandler.addEventListener('hardwareBackPress', () => {
        if (backPressed > 0) {
          BackHandler.exitApp();
          backPressed = 0;
        } else {
          backPressed++;
          ToastAndroid.show('Please tap again to exit', ToastAndroid.SHORT);

          setTimeout(() => {
            backPressed = 0;
          }, 2000);
          return true;
        }
      });
    });

    return () => {
      unsubscribe();
    };
  }, [props.navigation, props.token, is_guest_logged_in]);

  //mounted
  useEffect(() => handleComponentMounted(), []);
  const handleComponentMounted = () => {
    if (is_guest_logged_in !== true) {
      foregroundState();
    }
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        if (is_guest_logged_in !== true) {
          props.editUserData(props.token);
        }
      } else {
        functions.displayAlert(
          null,
          appTexts.ALERT_MESSAGES.noInternet,
          'Profile',
        );
      }
    });
  };

  //updated
  useEffect(() => handleComponentUpdated());

  const handleComponentUpdated = () => {
    if (
      props.loggedoutData.success === true ||
      (props.logoutError && props.logoutError?.msg == 'Unauthorized')
    ) {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          functions.displayToast(
            'success',
            'top',
            appTexts.LOGIN_TOASTMESSAGES.logout,
            _.get(props, 'loggedoutData.msg') || props.logoutError?.msg,
          );
          /** Clear cart data on logout */
          props.resetLogoutError();
          dispatch(resetCartKey());
          dispatch(resetCheckoutData());
          dispatch(resetCartContent());
          dispatch(resetPromocode());
          dispatch(saveCartCount(''));
          props.resetLogoutData();
          /** check for sms enabled or not */
          props.smsStatusResponse();
          setIsLogoutCompeted(true);
        } else {
          functions.displayAlert(
            null,
            appTexts.ALERT_MESSAGES.noInternet,
            'Profile',
          );
        }
      });
    }

    if (isLogoutCompeted === true && _.get(props, 'smsStatus.data')) {
      setIsLogoutCompeted(false);
      if (_.get(props, 'smsStatus.data.sms') === 'disable') {
        props.navigation.navigate('LoginStackNavigator', {
          screen: 'EmailLoginScreen',
        });
      } else {
        props.navigation.navigate('LoginStackNavigator', {
          screen: 'LoginScreen',
        });
      }
      props.resetSmsStatus();
    }

    /** Settings error */
    if (settingsError && _.get(settingsError, 'data.success') === false) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        _.get(settingsError, 'data.error.msg'),
      );
      dispatch(resetSettingsError());
    }

    /** Login for guest user */
    if (isLoginPressed == true && tempSettingsData?.success === true) {
      if (tempSettingsData?.data?.sms == 'enable') {
        props.navigation.navigate('LoginStackNavigator', {
          screen: 'LoginScreen',
        });
      } else {
        props.navigation.navigate('LoginStackNavigator', {
          screen: 'EmailLoginScreen',
        });
      }
      setIsLoginPressed(false);
      dispatch(resetSettingsTempData());
    }
  };

  const foregroundState = () => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      props.getNotificationCount(props.token);
      props.notificationBadgeReset(props.token);
      //props.notificationActive(true);
      playSound();
      const _data = getNotificationData(remoteMessage);
      setNotifyData(_data);
      setDisplayNotificationPopup(true);
    });
    return unsubscribe;
  };

  const getNotificationData = remoteMessage => {
    let body = 'You have a new notification';
    let title = 'Notification';

    if (typeof remoteMessage.notification != 'undefined') {
      if (typeof remoteMessage.notification.body != 'undefined') {
        body = remoteMessage.notification.body;
      }
      if (typeof remoteMessage.notification.title != 'undefined') {
        title = remoteMessage.notification.title;
      }
    } else if (typeof remoteMessage.data != 'undefined') {
      if (typeof remoteMessage.data.body != 'undefined') {
        body = remoteMessage.data.body;
      } else if (
        typeof remoteMessage.data.notification != 'undefined' &&
        typeof remoteMessage.data.notification.body != 'undefined'
      ) {
        body = remoteMessage.data.notification.body;
      }
      if (typeof remoteMessage.data.title != 'undefined') {
        title = remoteMessage.data.title;
      } else if (
        typeof remoteMessage.data.notification != 'undefined' &&
        typeof remoteMessage.data.notification.title != 'undefined'
      ) {
        body = remoteMessage.data.notification.title;
      }
    }
    let details = null;
    if (
      remoteMessage &&
      remoteMessage.data &&
      remoteMessage.data &&
      remoteMessage.data.type
    ) {
      if (remoteMessage.data.type === 'order') {
        details = {
          type: remoteMessage.data.type,
          order_id: remoteMessage.data.order_id,
        };
      } else if (remoteMessage.data.type === 'support') {
        details = {
          type: remoteMessage.data.type,
          requestId: remoteMessage.data.request_id,
        };
      }
    }

    return {
      title: title,
      body: body,
      details: details,
    };
  };

  const onBackButtonClick = () => {
    props.navigation.goBack();
  };
  const onRightButtonPress = () => {
    props.navigation.navigate('NotificationScreen');
  };
  const faqPress = () => {
    props.navigation.navigate('FaqScreen');
  };
  const termsPress = () => {
    props.navigation.navigate('TermsScreen');
  };
  const aboutPress = () => {
    props.navigation.navigate('AboutScreen');
  };

  const onLogoutClick = () => {
    if (props.token === null) {
      props.navigation.navigate('LoginStackNavigator', { screen: 'LoginScreen' });
      toggleLogoutModal();
      /** Clear cart data on logout */
      dispatch(resetCartKey());
      dispatch(resetCheckoutData());
      dispatch(resetCartContent());
      dispatch(resetPromocode());
      dispatch(saveCartCount(''));
    } else {
      props.logOutPressed(props.token);
      toggleLogoutModal();
    }
  };
  const onCancelClick = () => {
    toggleLogoutModal();
  };

  const openSupportModal = () => {
    setIsSupportModalVisibile(!isSupportModalVisible);
  };

  const supportCloseModal = () => {
    setIsSupportModalVisibile(!isSupportModalVisible);
  };

  const openSelectLanguageModal = () => {
    setIsSelectLanguageModalVisibile(!isSelectLanguageModalVisible);
  };

  const SelectLanguagecloseModal = () => {
    setIsSelectLanguageModalVisibile(!isSelectLanguageModalVisible);
  };

  const openCancelModal = () => {
    setIsCancelModalVisibile(!isCancelModalVisible);
  };

  const cancelCloseModal = () => {
    setIsCancelModalVisibile(!isCancelModalVisible);
  };
  const toggleLogoutModal = () => {
    setIsLogoutModalVisible(false);
  };
  const openLogoutModal = () => {
    setIsBoxModalVisible(false);
    setTimeout(() => {
      setIsLogoutModalVisible(!isLogoutModalVisible);
    }, 400);
  };
  const privacyPolicyPress = () => {
    props.navigation.navigate('PrivacyScreen');
  };
  const orderPress = () => {
    props.navigation.navigate('ActiveDeliverScreen');
  };
  const wishlistPress = () => {
    props.navigation.navigate('WishlistScreen');
  };
  const openWishlistModal = () => {
    setIsWishlistModalVisibile(!isWishlistModalVisible);
  };
  const openrateModal = () => {
    setIsRateModalVisible(!isRateModalVisible);
  };
  const openpriceModal = () => {
    setIsPriceModalVisible(!isPriceModalVisible);
  };
  const pricecloseModal = () => {
    setIsPriceModalVisible(!setIsPriceModalVisible);
  };
  const closeModal = () => {
    setIsWishlistModalVisibile(!isWishlistModalVisible);
  };
  const ratecloseModal = () => {
    setIsRateModalVisible(!setIsRateModalVisible);
  };
  const addressPress = () => {
    props.navigation.navigate('AddressScreen');
  };
  const termsAndConditionPress = () => {
    props.navigation.navigate('TermsScreen');
  };
  const openHelpModal = () => {
    setIsHelpModalVisible(true);
  };
  const toggleHelpModal = () => {
    setIsHelpModalVisible(!isHelpModalVisible);
  };
  const openBoxModal = () => {
    setIsBoxModalVisible(!isBoxModalVisible);
  };
  const toggleModal = () => {
    setIsModalVisible(false);
  };
  const openContactModal = () => {
    setIsContactModalVisible(true);
  };
  const toggleContactModal = () => {
    setIsContactModalVisible(false);
  };
  const openLanguageModal = () => {
    setIsLanguageModalVisible(true);
  };
  const toggleLanguageModal = () => {
    setIsLanguageModalVisible(false);
  };
  const onClosePress = () => {
    setIsBoxModalVisible(false);
  };

  const onEditClick = () => {
    setIsBoxModalVisible(false);
    props.navigation.navigate('EditProfileScreen');
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
        props.saveSelectedLanguage(selectedLanguage, props.token);
      }, 500);
    }
    props.saveSelectedLanguage(selectedLanguage, props.token);
  };

  const loginPage = () => {
    setIsBoxModalVisible(false);
    setIsLoginPressed(true);
    dispatch(getSettingsContent());
  };

  return (
    <ProfileView
      isLogoutModalVisible={isLogoutModalVisible}
      openLogoutModal={openLogoutModal}
      onEditClick={onEditClick}
      toggleLogoutModal={toggleLogoutModal}
      selectLanguage={selectLanguage}
      onBackButtonClick={onBackButtonClick}
      onRightButtonPress={onRightButtonPress}
      privacyPolicyPress={privacyPolicyPress}
      orderPress={orderPress}
      addressPress={addressPress}
      faqPress={faqPress}
      termsAndConditionPress={termsAndConditionPress}
      toggleHelpModal={toggleHelpModal}
      isModalVisible={isModalVisible}
      isHelpModalVisible={isHelpModalVisible}
      openHelpModal={openHelpModal}
      toggleModal={toggleModal}
      openBoxModal={openBoxModal}
      isBoxModalVisible={isBoxModalVisible}
      isContactModalVisible={isContactModalVisible}
      openContactModal={openContactModal}
      toggleContactModal={toggleContactModal}
      openLanguageModal={openLanguageModal}
      toggleLanguageModal={toggleLanguageModal}
      isLanguageModalVisible={isLanguageModalVisible}
      userdetails={props.editUserDetails}
      openWishlistModal={openWishlistModal}
      closeModal={closeModal}
      isWishlistModalVisible={isWishlistModalVisible}
      openrateModal={openrateModal}
      isRateModalVisible={isRateModalVisible}
      ratecloseModal={ratecloseModal}
      openpriceModal={openpriceModal}
      isPriceModalVisible={isPriceModalVisible}
      pricecloseModal={pricecloseModal}
      isBoxModalVisible={isBoxModalVisible}
      onClosePress={onClosePress}
      openSelectLanguageModal={openSelectLanguageModal}
      SelectLanguagecloseModal={SelectLanguagecloseModal}
      isSelectLanguageModalVisible={isSelectLanguageModalVisible}
      openCancelModal={openCancelModal}
      cancelCloseModal={cancelCloseModal}
      isCancelModalVisible={isCancelModalVisible}
      wishlistPress={wishlistPress}
      termsPress={termsPress}
      openSupportModal={openSupportModal}
      supportCloseModal={supportCloseModal}
      isSupportModalVisible={isSupportModalVisible}
      onLogoutClick={onLogoutClick}
      isLoading={props.isLoading || isSmsDataLoading || isSettingsLoading}
      userdetails={props.editUserDetails}
      onCancelClick={onCancelClick}
      languageSelected={props.chosenLanguage}
      notification_badge={props.notification_badge}
      is_notification_active={props.is_notification_active}
      is_guest_logged_in={is_guest_logged_in}
      loginPage={loginPage}
      aboutPress={aboutPress}
      token={props.token}
    />
  );
};

const mapStateToProps = (state, props) => {
  return {
    loggedoutData: _.get(state, 'loginReducer.logoutData', ''),
    token: _.get(state, 'loginReducer.userData.data.access_token', null),
    editUserDetails: _.get(state, 'editUserReducer.editUserData', ''),
    isLoading: _.get(state, 'editUserReducer.isLoading', ''),
    chosenLanguage: _.get(state, 'loginReducer.chosenLanguage', ''),
    smsStatus: _.get(state, 'loginReducer.smsstatus', ''),
    notification_badge: _.get(state, 'loginReducer.notificationbadge', ''),
    is_notification_active: _.get(
      state,
      'loginReducer.is_notification_active',
      '',
    ),
    logoutError: state.editUserReducer.logoutError,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      editUserData: editUserActions.doUserDetailsEdit,
      logOutPressed: editUserActions.doLogout,
      resetLogoutData: editUserActions.resetLogoutData,
      saveSelectedLanguage: LoginActions.saveSelectedLanguage,
      smsStatusResponse: LoginActions.getSmsStatus,
      getNotificationCount: notifyActions.getNotificationCount,
      notificationBadgeReset: notifyActions.notificationBadgeReset,
      notificationActive: notifyActions.notificationActive,
      resetSmsStatus: LoginActions.resetSmsStatus,
      resetLogoutError: editUserActions.resetLogoutError,
    },
    dispatch,
  );
};

const profileScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileScreen);

profileScreenWithRedux.navigationOptions = ({ navigation }) => ({
  header: null,
});

export default profileScreenWithRedux;
