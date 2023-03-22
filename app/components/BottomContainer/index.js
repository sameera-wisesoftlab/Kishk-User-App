import React, {useState} from 'react';
import PropTypes from "prop-types";
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {images, styles} from './styles';

import appTexts from '../../lib/appTexts';
import DateModal from '../DateModal';

const BottomContainer = props => {
  const {isCart, isFilter,butText} = props;

  return (
    // <View style={isCart ? styles.float : styles.floatabc}>
    <View style={styles.float}>
      <View style={styles.buttonStyle}>
    <Text style={{color:'white'}}>{butText}</Text>
    </View>
    </View>
  );
};
BottomContainer.propTypes = { butText:PropTypes.string,};

export default BottomContainer;
