import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {images, styles} from './styles';

// import { useState } from 'react/cjs/react.development';

const ActiveDeliverTab = props => {
  const {
    tabIndex,
    firstTabText,
    secondTabText,
    thirdTabText,
    firstTabCount,
    secondTabCount,
    thirdTabCount,
    onTabChange,
    isCalenderRequired,
    onCalendarFilterPress,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.mapListView}>
        <View style={styles.listMap}>
          <View style={tabIndex === 0 ? styles.toptabselected : styles.toptabs}>
            <TouchableOpacity
              style={[styles.middleTabView]}
              onPress={() => {
                onTabChange(0);
              }}>
              <View style={styles.leftHeadingLabelView}>
                <Text
                  style={
                    tabIndex === 0 ? styles.nameLabelSelected : styles.nameLabel
                  }>
                  {firstTabText}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={tabIndex === 1 ? styles.toptabselected : styles.toptabs}>
            <TouchableOpacity
              style={styles.middleTabView}
              onPress={() => {
                onTabChange(1);
              }}>
              <View style={styles.leftHeadingLabelView}>
                <Text
                  numberOfLines={1}
                  style={
                    tabIndex === 1 ? styles.nameLabelSelected : styles.nameLabel
                  }>
                  {secondTabText}
                </Text>
                {/* <Text style={tabIndex === 1 ? styles.nameLabelSelected : styles.nameLabel}>{" (" + secondTabCount + ")"}</Text> */}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
ActiveDeliverTab.propTypes = {
  tabIndex: PropTypes.number,
  firstTabText: PropTypes.string,
  secondTabText: PropTypes.string,
  thirdTabText: PropTypes.string,
  firstTabCount: PropTypes.number,
  secondTabCount: PropTypes.number,
  thirdTabCount: PropTypes.number,
  onTabChange: PropTypes.func,
};

export default ActiveDeliverTab;
