import React, { useState, useRef } from 'react';
import {
  View,
  ScrollView,
  Text,
  FlatList,
  StatusBar,
  I18nManager,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import globals from '../../lib/globals';
import appTexts from '../../lib/appTexts';
import { styles, images } from './styles';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import DashSlider from '../../components/DashSlider';
import Delivery from '../../components/Delivery';
import moment from 'moment';

const CheckoutView3 = props => {
  const { onBackButtonClick, onViewOrderClick, _params, toHome } = props;
  const all_params = typeof _params != 'undefined' ? _params : {};
  const { order_id, payment_method, time_slot } = all_params;
  let { delivery_date } = all_params;
  if (delivery_date) {
    delivery_date = moment(delivery_date, 'YYYY-MM-DD').format('DD MMM YYYY');
  }

  return (
    <View style={styles.screenMain}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={globals.COLOR.screenBackground}
      />
      <Header
        navigation={props.navigation}
        isBackButtonRequired={false}
        onBackButtonClick={onBackButtonClick}
        isLeftTitleRequired={true}
        title={appTexts.FILTER.checkout3}
        customHeaderStyle={{
          height: globals.INTEGER.headerHeight,
          alignItems: 'center',
          backgroundColor: globals.COLOR.headerColor,
        }}
      />
      <ScrollView>
        <View style={styles.screenDesignContainer}>
          <View style={styles.sliderView}>
            <DashSlider
              label1={appTexts.CHECKOUT.summary}
              label2={appTexts.CHECKOUT.payment}
              label3={appTexts.CHECKOUT.success}
              stage={3}
            />
          </View>
          <View style={styles.paySection}>
            <View style={styles.imageView}>
              <Image source={images.image} style={styles.image}></Image>
            </View>
          </View>
          <View style={styles.sectionPay}>
            <View style={styles.thanks}>
              <View style={styles.bold}>
                <Text style={styles.thanksText}>
                  {appTexts.CHECKOUT.thanks}
                </Text>
              </View>
              <View style={styles.grey}>
                <Text style={styles.light}>
                  {appTexts.CHECKOUT.order.replace('{{id}}', order_id)}
                </Text>
              </View>
            </View>
            <View style={styles.del}>
              <Delivery
                leftText1={appTexts.CHECKOUT.date}
                rightText1={delivery_date + ', ' + time_slot}
                leftText2={appTexts.CHECKOUT.pay}
                rightText2={
                  payment_method == 'cod' ? appTexts.CHECKOUT.cod : appTexts.CHECKOUT.onlineCard
                }
                isCheckout={true}
              />
            </View>
            <View style={styles.buttons}>
              <View style={styles.butCancel}>
                <TouchableOpacity onPress={() => toHome()}>
                  <Text style={styles.cancelText}>
                    {appTexts.CHECKOUT.continue}
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => {
                  onViewOrderClick();
                }}
                style={styles.butLogout}>
                <View>
                  <Text style={styles.logoutText}>
                    {appTexts.CHECKOUT.view}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

CheckoutView3.propTypes = {};

export default CheckoutView3;
