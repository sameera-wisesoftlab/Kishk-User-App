import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Switch, FlatList, I18nManager, Image } from 'react-native';

import globals from '../../lib/globals';
import { styles } from './styles';
import appTexts from '../../lib/appTexts';
import Header from '../../components/Header';

import ServiceWrapperAwait from '../../service/ServiceWrapperAwait';
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Loader from '../../components/Loader';

const NotificationView = props => {
  const { onValueChange, onBackButtonClick, navigateTochat, navigateToDetail } =
    props;

  // const { onBackClick, navigateTochat, navigateToDetail } = props;
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [istoggle, setIstoggle] = useState(true);
  const [updateData, setUpdateData] = useState(false);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  let lang = I18nManager.isRTL ? '&language=ar' : '&language=en';

  const notificationData = async () => {
    const sAsyncWrapper = new ServiceWrapperAwait();
    const response = await sAsyncWrapper.get(
      'api/notification/list?page=' + page + lang,
      { language_attach: false, is_auth_required: true },
    );
    const data = new Promise((resolve, reject) => {
      try {
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });


    return data;
  };

  const needNotification = async () => {
    const sAsyncWrapper = new ServiceWrapperAwait();
    const response = await sAsyncWrapper.get('api/check/need-notification', {
      language_attach: false,
      is_auth_required: true,
    });
    const data = new Promise((resolve, reject) => {
      try {
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });

    return data;
  };

  const notificationRead = async id => {
    const sAsyncWrapper = new ServiceWrapperAwait();
    await sAsyncWrapper.get('api/notification/read/' + id, {
      language_attach: false,
      is_auth_required: true,
    });
  };

  const changeNotificationSettings = async enable_or_disable => {
    const sAsyncWrapper = new ServiceWrapperAwait();
    setLoader(true);
    const response = await sAsyncWrapper.put('api/notifications', {
      enable: enable_or_disable,
    });
    setLoader(false);
    const data = new Promise((resolve, reject) => {
      try {
        resolve(response);
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });

    return data;
  };

  useEffect(() => {
    setLoader(true);
    const isNotify = needNotification();
    isNotify.then(_is_notify => {
      if (_is_notify.success == true) {
        setIstoggle(_is_notify.data.need_notification == 1);
      }
    });
    const data_ = notificationData();
    data_.then(dat => {
      if (dat.success == true) {
        setLastPage(dat.data.last_page);
        if (page == dat.data.current_page) {
          setData([...data, ...dat.data.data]);
        }
      } else {
        setData([]);
      }
      setLoader(false);
    });
  }, [updateData]);

  const readAndRedirect = (item, index) => {
    if (item.is_read == 0) {
      notificationRead(item.id);
      let all_data = [...data];
      data[index].is_read = 1;
      setData(all_data);
    }
    let details = {};
    try {
      details = JSON.parse(item.details);
    } catch (err) {
      details = {};
    }
    if (details.type == 'support') {
      navigateTochat(details.request_id);
    } else {
      navigateToDetail(details.order_id);
    }
  };

  const changeSettings = async () => {
    setIstoggle(!istoggle);
    const data = await changeNotificationSettings(istoggle == true ? 0 : 1);
    if (data.success != true) {
      setIstoggle(!istoggle);
    }
  };

  const renderEach = (item, index) => {
    const lang = I18nManager.isRTL ? 'ar' : 'en';
    let content = '';
    try {
      content = JSON.parse(item.content)[lang];
    } catch (errr) {
      content = '';
    }
    const date = moment(item.created_at).format('DD MMM YYYY');
    const timeElapsed = moment
      .utc(item.created_at)
      .local()
      .startOf('seconds')
      .fromNow();
    return (
      <TouchableOpacity onPress={() => readAndRedirect(item, index)}>
        <View style={[styles.shadowContainerStyle, item.is_read == 0 && {}]}>
          <View style={styles.delivreyAddress}>
            <View style={{ width: '80%' }}>
              <Text style={styles.descritpionText}>{content}</Text>
            </View>
          </View>
          <View
            style={
              item.is_read == 0
                ? styles.descritpionViewDot
                : styles.descritpionView
            }>
            <Text
              style={
                item.is_read == 0
                  ? styles.completedescritpionText
                  : styles.readText
              }>
              {appTexts.NOTIFY.seedetails}
              {/* { date } */}
            </Text>
            <Text style={styles.timeText}>{timeElapsed} </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {loader && <Loader />}

      <View style={styles.screenMain}>
        <Header
          navigation={props.navigation}
          isleftlogoRequired={false}
          isLeftTitleRequired={true}
          isInitialPage={true}
          title={appTexts.NOTIFY.heading}
          isBackButtonRequired={true}
          isNotification={true}
          istoggle={istoggle}
          changeNotificationSettings={changeSettings}
          onBackButtonClick={onBackButtonClick}
          customHeaderStyle={{
            height: globals.INTEGER.headerHeight,
            backgroundColor: globals.COLOR.headerColor,
          }}
        />
        <View style={styles.screenContainer}>
          <View style={styles.notificationText}>
            <FlatList
              data={data}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => renderEach(item, index)}
              onEndReachedThreshold={0.5}
              onEndReached={({ }) => {
                let _page = page + 1;
                if (_page <= lastPage) {
                  setPage(_page);
                  setUpdateData(!updateData);
                }
              }}
            />
          </View>
        </View>
      </View>
    </View>
    // </View>
  );
};

NotificationView.propTypes = {
  istoggle: PropTypes.bool,
};

export default NotificationView;
