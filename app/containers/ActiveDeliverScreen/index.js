import React, {useEffect, useState} from 'react';
import {I18nManager} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import ActiveDeliverView from './ActiveDeliverView';
import functions from '../../lib/functions';
import _ from 'lodash';

import {useDispatch, useSelector} from 'react-redux';
import {getMyOrders} from '../../actions';
import appTexts from '../../lib/appTexts';
import {BackHandler} from 'react-native';
import messaging from '@react-native-firebase/messaging';

const ActiveDeliverScreen = props => {
  //Initialising states
  const [tabIndex, setTabIndex] = useState(0);
  const [orderStatus, setOrderStatus] = useState('active');

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allLoaded, setAllLoaded] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const onTabChange = index => {
    setPage(1);
    if (index > 0) {
      setOrderStatus('delivered');
    } else {
      setOrderStatus('active');
    }
    setTabIndex(index);
  };

  //will focus
  useEffect(() => {
    // listened nav focus only to refresh list when user cancels active order
    return props.navigation.addListener('focus', () => {
      if (orderStatus === 'active') {
        onRefreshList();
      }
    });
  }, [props.navigation, orderStatus]);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      onRefreshList();
    });

    return () => unsubscribe();
  }, [props.navigation]);

  //mounted
  useEffect(() => handleComponentMounted(), []);

  useEffect(() => {
    setPage(1);
    getInitialData(1);
    setAllLoaded(false);
    setLoading(true);
  }, [orderStatus]);

  const getInitialData = (pageNum = page) => {
    dispatch(
      getMyOrders(
        {page: pageNum, status: orderStatus},
        res => {
          if (pageNum > 1) {
            setOrders([...orders, ...res.data.data]);
            if (res.data.current_page === res.data.last_page) {
              setAllLoaded(true);
            }
            setLoadingMore(false);
          } else {
            setOrders(res.data.data);
            if (res.data.current_page === res.data.last_page) {
              setAllLoaded(true);
            }
            setLoading(false);
          }
        },
        err => {
          setLoading(false);
          setLoadingMore(false);
        },
      ),
    );
  };

  const loadMoreOrders = () => {
    if (allLoaded || loadingMore || loading) {
      return;
    }

    let addPageNum = page + 1;
    setLoadingMore(true);
    setPage(addPageNum);
    getInitialData(addPageNum);
  };

  const handleComponentMounted = () => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        BackHandler.addEventListener(
          'hardwareBackPress',
          (backPressed = () => {
            props.navigation.goBack();
            return true;
          }),
        );
        // props.getAddress({});
      } else {
        functions.displayAlert(
          null,
          appTexts.ALERT_MESSAGES.noInternet,
          'MyOrders',
        );
      }
    });
  };

  const onRefreshList = () => {
    setPage(1);
    getInitialData(1);
    setAllLoaded(false);
  };

  const onBackButtonClick = () => {
    props.navigation.navigate('MyProfile', {screen: 'ProfileScreen'});
    // props.navigation.navigate('ProfileScreen');
  };

  const onOrderPress = (orderId, orderStatus, subOrderId) => {
    props.navigation.navigate('OrderDetailsScreen', {
      isActiveOrder: true,
      id: orderId,
      orderStatus: orderStatus,
      subOrderId: subOrderId,
    });
  };

  return (
    <ActiveDeliverView
      orders={orders}
      loadingMore={loadingMore}
      loadMoreOrders={loadMoreOrders}
      tabIndex={tabIndex}
      onTabChange={onTabChange}
      onBackButtonClick={onBackButtonClick}
      onOrderPress={onOrderPress}
      loading={loading}
      onRefreshList={onRefreshList}
    />
  );
};

export default ActiveDeliverScreen;
