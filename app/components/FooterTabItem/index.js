import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Image, Text, TouchableOpacity} from 'react-native';

import {images, styles} from './styles';
import {connect} from 'react-redux';
import globals from '../../lib/globals';

const FooterTabItem = props => {
  const {tabBarIndex, isFocused, tabBarLabel, isNotificationTab, cartCount} =
    props;
  let tabBarImage;

  if (parseInt(tabBarIndex) === 0) {
    if (isFocused) tabBarImage = images.homeIconSelected;
    else tabBarImage = images.homeIconUnSelected;
  } else if (parseInt(tabBarIndex) === 1) {
    if (isFocused) tabBarImage = images.offerIconSelected;
    else tabBarImage = images.offerIconUnSelected;
  } else if (parseInt(tabBarIndex) === 2) {
    if (isFocused) tabBarImage = images.scanIconSelected;
    else tabBarImage = images.scanIconUnSelected;
  } else if (parseInt(tabBarIndex) === 3) {
    if (isFocused) tabBarImage = images.orderIconSelected;
    else tabBarImage = images.orderIconUnSelected;
  } else if (parseInt(tabBarIndex) === 4) {
    if (isFocused) tabBarImage = images.profileIconSelected;
    else tabBarImage = images.profileIconUnSelected;
  } else if (parseInt(tabBarIndex) === 4) {
    if (isFocused) tabBarImage = images.offerIconSelected;
    else tabBarImage = images.offerIconUnSelected;
  }

  return (
    <View style={[styles.tabBarItem]}>
      <View style={styles.tabBarIconContainer}>
        <Image
          resizeMode="contain"
          style={styles.bottomimage}
          source={tabBarImage}
        />
        {tabBarIndex == 2 && cartCount != '' && cartCount > 0 && (
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              width: 20,
              borderRadius: 25,
              alignItems: 'center',
              top: -13,
              right: 22,
              position: 'absolute',
            }}>
            <Text style={{color: '#fff'}}>{cartCount}</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.barText}>{tabBarLabel}</Text>
      </View>
    </View>
  );
};

FooterTabItem.propTypes = {
  tabBarIndex: PropTypes.number,
  isFocused: PropTypes.bool,
  tabBarLabel: PropTypes.string,
};

export default FooterTabItem;
