import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';
import {View, Image, Text, TouchableOpacity, I18nManager} from 'react-native';
import {styles, images} from './styles';

const TimeCard = props => {
  const {item, index, isBrands, selectedTimeSlot, onPress} = props;
  return (
    <TouchableOpacity onPress={() => onPress(index)}>
      <View style={styles.wrapperView}>
        <View
          style={[
            styles.square,
            selectedTimeSlot == index && styles.Redsquare,
          ]}>
          <View style={styles.title}>
            <Text
              style={[
                styles.name,
                selectedTimeSlot == index && styles.RedName,
              ]}>
              {item.time_slot}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

TimeCard.propTypes = {
  item: PropTypes.object,
};

export default TimeCard;
