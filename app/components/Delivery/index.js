import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity, I18nManager } from 'react-native';
import { styles } from './styles';
import appTexts from '../../lib/appTexts';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Delivery = props => {
  const {
    item,
    itemClick,
    leftText1,
    leftText2,
    rightText1,
    rightText2,
    isCheckout,
  } = props;

  return (
    <View style={styles.wrapper}>
      {rightText1 > 0 && <View style={isCheckout ? styles.space : styles.color}>
        <View style={styles.tet}>
          <Text style={isCheckout ? styles.checkText : styles.colText}>
            {leftText1}
          </Text>
        </View>
        <View style={styles.test}>
          <Text style={isCheckout ? styles.checkDark : styles.darkText}>
            {rightText1}
          </Text>
        </View>
      </View>}
      <View style={isCheckout ? styles.space : styles.color}>
        <View style={styles.text}>
          <Text style={isCheckout ? styles.checkText : styles.colText}>
            {leftText2}
          </Text>
        </View>
        <View style={styles.test}>
          <Text style={isCheckout ? styles.checkDark : styles.darkText}>
            {rightText2}
          </Text>
        </View>
      </View>
    </View>
  );
};
Delivery.propTypes = {
  item: PropTypes.object,
};

export default Delivery;
