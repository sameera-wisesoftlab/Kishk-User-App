import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BackHandler, ToastAndroid } from 'react-native';
import _ from 'lodash';
import {
  getHomeContent,
  resetHomeError,
  resetUpdateSearchFilterData,
  addRemoveToWishlist,
  getNotificationCount,
  resetWishlistMessage,
  /** Sms enabled */
  getSettingsContent,
  resetSettingsError,
  resetSettingsTempData,
  /** Notification received */
  notificationReceived,
  notificationData,
  redirectToNotificationDetails,
} from '../../actions';

import HomeView from './HomeView';
import functions from '../../lib/functions';
import appTexts from '../../lib/appTexts';

import messaging from '@react-native-firebase/messaging';
import Sound from 'react-native-sound';
import { Notifications } from 'react-native-notifications';
import { AppState } from 'react-native';

import ServiceWrapperAwait from '../../service/ServiceWrapperAwait';
import NetInfo from '@react-native-community/netinfo';
import dynamicLinks from '@react-native-firebase/dynamic-links';

const HomeScreen = props => {
  const [loginRequired, setLoginRequired] = useState(false);
  const [isLoginPressed, setIsLoginPressed] = useState(false);

  const dispatch = useDispatch();
  const {
    isLoading,
    homeData,
    error,
    successMsg,
    wishlistSucess,
    wishlistError,
    wishExecuting,
    cartCount,
    is_guest_logged_in,
    notificationReceivedData,
    notificationRedirect,
  } = useSelector(state => ({
    isLoading: state.home.isLoading,
    homeData: state.home.homeData,
    error: state.home.error,
    successMsg: state.home.successMsg,
    wishlistSucess: state.wishlistReducer.wishlistSucess,
    wishlistError: state.wishlistReducer.wishlistError,
    wishExecuting: state.wishlistReducer.wishExecuting,
    cartCount: state.product.cartCount,
    is_guest_logged_in: state.loginReducer.is_guest_logged_in,
    notificationReceivedData:
      state.notificationReducer.notificationReceivedData,
    notificationRedirect: state.notificationReducer.notificationRedirect,
  }));

  const { settingsData, settingsError, isSettingsLoading, tempSettingsData } =
    useSelector(state => state.settings);

  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = nextAppState => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      //
    }

    appState.current = nextAppState;
    setAppStateVisible(appState.current);
    if (appState.current === 'active') {
      //
    }
  };
  const [notifyData, setNotifyData] = useState({});
  const [displayNotificationPopup, setDisplayNotificationPopup] =
    useState(false);

  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(link => handleDynamicLink(link));

    return () => unsubscribe();
  }, []);

  const handleDynamicLink = link => {
    if (link) {
      try {
        link = link.url;
        const lastSlashindex = link.lastIndexOf('/');
        const urlPostFix = link.substring(lastSlashindex + 1, link.length);
        if (urlPostFix != '' && urlPostFix.lastIndexOf('kishk') == -1) {
          props.navigation.navigate('ProductDetailScreen', { id: urlPostFix });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const notificationRead = async id => {
    const sAsyncWrapper = new ServiceWrapperAwait();
    await sAsyncWrapper.get('notification/read/' + id, {
      language_attach: false,
      is_auth_required: true,
    });
  };

  playSound = () => {
    const callback = (error, sound) => {
      if (error) {
        return;
      }
      sound.play(() => {
        sound.release();
      });
    };
    const audio = require('../../sound/salon_alarm.mp3');
    const sound = new Sound(audio, error => callback(error, sound));
  };

  initialNotification = async () => {
    const notification = await Notifications.getInitialNotification();
    if (typeof notification !== 'undefined' && notification) {
      dispatch(getNotificationCount({ token: null }));
      try {
        const _data = notification.payload;
        if (_data.notification_id) {
          notificationRead(_data.notification_id);
        }
        if (_data.type == 'order') {
          props.navigation.navigate('OrderDetailsScreen', { id: _data.order_id });
        } else if (_data.type == 'support') {
          props.navigation.navigate('ChatScreen', {
            chat_id: _data.request_id,
          });
        }
      } catch (err) {
        console.log('open notify err', err);
      }
    }
  };

  // WILL FOCUS
  useEffect(() => {
    return props.navigation.addListener('focus', () => {
      dispatch(getNotificationCount({ token: null }));
      // props.getNotificationCount(props.token)
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          // props.getRestTypes();
        } else {
          functions.displayAlert(
            null,
            appTexts.ALERT_MESSAGES.noInternet,
            'Home',
          );
        }
      });
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
  }, [props.navigation]);

  // mounted
  useEffect(() => handleComponentMounted(), []);

  const initialData = () => {
    dispatch(getHomeContent(is_guest_logged_in));
  };

  let backPressed = 0;

  const handleComponentMounted = () => {
    initialData();

    // BackHandler.addEventListener('hardwareBackPress', () => {
    //   // BackHandler.exitApp();
    //   // return true;
    //   if (backPressed > 0) {
    //     BackHandler.exitApp();
    //     backPressed = 0;
    //   } else {
    //     backPressed++;
    //     ToastAndroid.show('Please tap again to exit', ToastAndroid.SHORT);

    //     setTimeout(() => {
    //       backPressed = 0;
    //     }, 2000);
    //     return true;
    //   }
    // });
    foregroundState();
    Sound.setCategory('Playback', true);
    Notifications.registerRemoteNotifications();
    initialNotification();

    Notifications.events().registerNotificationOpened(
      (notification, completion) => {
        try {
          const _data = notification.payload;
          if (_data.notification_id) {
            notificationRead(_data.notification_id);
          }
          if (_data.type == 'order') {
            props.navigation.navigate('OrderDetailsScreen', {
              id: _data.order_id,
            });
          } else if (_data.type == 'support') {
            props.navigation.navigate('ChatScreen', {
              chat_id: _data.request_id,
            });
          }
          // RootNavigation.navigate('ChatScreen', { chat_id: '_data.request_id' });
        } catch (err) {
          console.log('open notify err', err);
        }
        completion();
      },
    );
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        // props.getRestTypes();
        // props.getOrdersToDeliver({});
        // props.getOrdersToCollect({});
        // props.getOrdersToReturn({});
      } else {
        functions.displayAlert(
          null,
          appTexts.ALERT_MESSAGES.noInternet,
          'Home',
        );
      }
    });
  };
  const foregroundState = () => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      dispatch(getNotificationCount({ token: null }));
      //props.getNotificationCount(props.token)
      //props.notificationActive(true);
      playSound();
      console.log("***************", remoteMessage)
      const _data = getNotificationData(remoteMessage);
      setNotifyData(_data);
      // setDisplayNotificationPopup(true);
      dispatch(notificationReceived(true));
      dispatch(notificationData(_data));
    });
    return unsubscribe;
  };

  const getNotificationData = remoteMessage => {
    let body = 'You have a new notification';
    let title = 'Notification';

    if (typeof remoteMessage.notification !== 'undefined') {
      if (typeof remoteMessage.notification.body !== 'undefined') {
        body = remoteMessage.notification.body;
      }
      if (typeof remoteMessage.notification.title !== 'undefined') {
        title = remoteMessage.notification.title;
      }
    } else if (typeof remoteMessage.data !== 'undefined') {
      if (typeof remoteMessage.data.body !== 'undefined') {
        body = remoteMessage.data.body;
      } else if (
        typeof remoteMessage.data.notification !== 'undefined' &&
        typeof remoteMessage.data.notification.body !== 'undefined'
      ) {
        body = remoteMessage.data.notification.body;
      }
      if (typeof remoteMessage.data.title !== 'undefined') {
        title = remoteMessage.data.title;
      } else if (
        typeof remoteMessage.data.notification !== 'undefined' &&
        typeof remoteMessage.data.notification.title !== 'undefined'
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

  //unmount
  useEffect(() => {
    return () => {
      handleComponentUnmount();
    };
  }, []);

  const handleComponentUnmount = () => { };

  //updated
  useEffect(
    () => handleComponentUpdated(),
    [
      error,
      wishlistError,
      wishlistSucess,
      tempSettingsData,
      settingsError,
      notificationReceivedData,
      notificationRedirect,
    ],
  );

  const handleComponentUpdated = () => {
    if (error && _.get(error, 'data.success') === false) {
      functions.displayToast(
        'error',
        'top',
        appTexts.ALERT_MESSAGES.error,
        _.get(error, 'data.error.msg'),
      );
      dispatch(resetHomeError());
    }
    if (wishlistError || wishlistSucess) {
      functions.displayToast(
        wishlistSucess ? 'success' : 'error',
        'top',
        wishlistSucess
          ? appTexts.ALERT_MESSAGES.success
          : appTexts.ALERT_MESSAGES.error,
        wishlistSucess || wishlistError,
      );
      dispatch(resetWishlistMessage());
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

    if (notificationRedirect && notificationReceivedData?.details) {
      redirectToPushNotificationDetails(notificationReceivedData);
      dispatch(notificationData({}));
      dispatch(redirectToNotificationDetails(false));
    }
    console.log(notificationRedirect, notificationReceivedData);
  };

  const onRefreshContent = () => {
    initialData();
  };

  const redirectToSearchScreen = category_id => {
    dispatch(resetUpdateSearchFilterData({ category_id, brand_id: null }));
    props.navigation.navigate('SearchDetailScreen');
  };

  const redirectToProductScreen = id => {
    props.navigation.navigate('ProductDetailScreen', { id });
  };

  const onCatItemClick = catId => {
    redirectToSearchScreen(catId);
  };

  const onBrandItemClick = brand_id => {
    dispatch(resetUpdateSearchFilterData({ brand_id, category_id: null }));
    props.navigation.navigate('SearchDetailScreen');
  };

  const onItemClick = id => {
    redirectToProductScreen(id);
  };

  const onTopBannerClick = bannerIndex => {
    const clickedSliderData = homeData.slider[bannerIndex];
    const { type, category_id, product_id } = clickedSliderData;
    if (type === 'C' && category_id) {
      redirectToSearchScreen(category_id);
    }
    if (type === 'P' && product_id) {
      redirectToProductScreen(product_id);
    }
  };

  const onAdBannerClick = ({ type, category_id, product_id }) => {
    if (type === 'C' && category_id) {
      redirectToSearchScreen(category_id);
    }
    if (type === 'P' && product_id) {
      redirectToProductScreen(product_id);
    }
  };
  const onFeaturedCatSeeAllClick = () => {
    props.navigation.navigate('FeaturedCategoryScreen');
  };
  const onTopBrandSeeAllClick = () => {
    props.navigation.navigate('TopBrandsListScreen');
  };
  const onSearchClick = () => {
    props.navigation.navigate('SearchScreen');
  };
  const onRecommendClick = () => {
    dispatch(resetUpdateSearchFilterData({ brand_id: null, category_id: null }));
    props.navigation.navigate('SearchDetailScreen');
  };

  const onProductHeartClick = (type, prodID) => {
    if (is_guest_logged_in === true) {
      setLoginRequired(true);
      return false;
    }
    if (!wishExecuting) {
      dispatch(addRemoveToWishlist(prodID));
    }
  };

  const loginPage = () => {
    setLoginRequired(false);
    setIsLoginPressed(true);
    dispatch(getSettingsContent());
  };

  const redirectToPushNotificationDetails = _data => {
    if (_data.details.type == 'order') {
      props.navigation.navigate('OrderDetailsScreen', {
        id: _data.details.order_id,
      });
    } else if (_data.details.type == 'support') {
      props.navigation.navigate('ChatScreen', {
        chat_id: _data.details.requestId,
      });
    }
  };
  // console.log("HOME DATA LIST", homeData.list[1])
  return (
    <HomeView
      isLoading={isLoading}
      isSettingsLoading={isSettingsLoading}
      homeData={homeData}
      onCatItemClick={onCatItemClick}
      onBrandItemClick={onBrandItemClick}
      onItemClick={onItemClick}
      onRefreshContent={onRefreshContent}
      onTopBannerClick={onTopBannerClick}
      onAdBannerClick={onAdBannerClick}
      onFeaturedCatSeeAllClick={onFeaturedCatSeeAllClick}
      onTopBrandSeeAllClick={onTopBrandSeeAllClick}
      onSearchClick={onSearchClick}
      onRecommendClick={onRecommendClick}
      onHeartClick={onProductHeartClick}
      wishExecuting={wishExecuting}
      loginRequired={loginRequired}
      setLoginRequired={setLoginRequired}
      loginPage={loginPage}
    />
  );
};

export default HomeScreen;
