import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { images, styles } from './styles';

// import { useState } from 'react/cjs/react.development';

const EditMeasureTab = props => {
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
    custom_image,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.mapListView}>
        <View style={styles.listMap}>
          <View style={styles.toptabs}>
            <TouchableOpacity
              style={[styles.middleTabView]}
              onPress={() => {
                onTabChange(0);
              }}>
              <View
                style={[
                  styles.leftHeadingLabelView1,
                  tabIndex == 1 && styles.measure1,
                ]}>
                <Text
                  style={[
                    styles.nameLabel,
                    tabIndex == 1 && { textAlign: 'center' },
                  ]}>
                  {firstTabText}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {custom_image != null && (
            <View style={styles.toptabs}>
              <TouchableOpacity
                style={styles.middleTabView}
                onPress={() => {
                  onTabChange(1);
                }}>
                <View
                  style={[
                    styles.leftHeadingLabelView2,
                    tabIndex == 0 && styles.measure,
                  ]}>
                  <Text
                    numberOfLines={1}
                    style={[styles.nameLabel, { textAlign: 'center' }]}>
                    {secondTabText}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

EditMeasureTab.propTypes = {
  tabIndex: PropTypes.number,
  firstTabText: PropTypes.string,
  secondTabText: PropTypes.string,
  thirdTabText: PropTypes.string,
  firstTabCount: PropTypes.number,
  secondTabCount: PropTypes.number,
  thirdTabCount: PropTypes.number,
  onTabChange: PropTypes.func,
};

export default EditMeasureTab;
