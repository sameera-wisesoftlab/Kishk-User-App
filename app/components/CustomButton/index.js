import PropTypes from 'prop-types';
import React, {Component, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const CustomButton = props => {
  const {buttonText, isSend, isOtp, isDisable, btnStyle = {}} = props;
  const [buttonStyle, setButtonStyle] = useState(styles.buttonStyle);

  useEffect(() => {
    if (isSend) {
      setButtonStyle(styles.buttonStyle1);
    }
    if (isOtp) {
      setButtonStyle(styles.buttonStyle3);
    }
    if (isDisable) {
      setButtonStyle(styles.disableButtonStyle);
    }
  }, [isSend, isOtp, isDisable]);

  return (
    <View style={[buttonStyle, btnStyle]}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </View>
  );
};

CustomButton.propTypes = {
  buttonText: PropTypes.string,
};

export default CustomButton;
