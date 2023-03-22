import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const CropButton = props => {
  const {buttonText, isSend, isOtp} = props;

  return (
    <View style={styles.cancelButton}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </View>
  );
};

CropButton.propTypes = {
  buttonText: PropTypes.string,
};

export default CropButton;
