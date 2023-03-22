import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text,I18nManager,View } from 'react-native';
import { styles } from "./styles";
import globals from "../../lib/globals"
import LinearGradient from "react-native-linear-gradient";
const RoundButton = (props) => {
  const {
    buttonText,
    buttonPosition,
    buttonClick
  } = props;

  let buttonPositionStyle = {};
  let buttonTextStyle = {
    color: globals.COLOR.backgroundColor,
    fontFamily: I18nManager.isRTL ? globals.FONTS.notokufiArabic : globals.FONTS.cairoSemiBold,
    fontSize: 15,
    paddingLeft:40,
    paddingRight:40
  };
  if (buttonPosition === 'left'){
    buttonPositionStyle.position= "absolute",
    buttonPositionStyle.left = 0;
    //buttonPositionStyle.width= "46%";
    buttonPositionStyle.backgroundColor = globals.COLOR.white;
    buttonPositionStyle.borderWidth= 1;
    buttonPositionStyle.borderColor= globals.COLOR.purple;
    buttonTextStyle.color = globals.COLOR.purple;
  } else if (buttonPosition === 'right'){
    buttonPositionStyle.position = "absolute";
    buttonPositionStyle.right = 0;
    //buttonPositionStyle.width = "46%";
    //buttonPositionStyle.backgroundColor = globals.COLOR.tabUnderLineColor;
    buttonTextStyle.color = globals.COLOR.white;
  }else{
    buttonPositionStyle = {
      height:50,
     
    }
  }
  return (
    <TouchableOpacity style={[styles.buttonContainer, buttonPositionStyle]} onPress={() => { buttonClick()}}>
      {buttonPosition !== 'left' ?
      <View
          style={[styles.linearGradientContainer]}
      >
      <Text style={buttonTextStyle}>{buttonText}</Text>
        </View> : <Text style={buttonTextStyle}>{buttonText}</Text>}
    </TouchableOpacity>
  );
};
RoundButton.propTypes = {
  buttonText: PropTypes.string,
  buttonPosition:PropTypes.string,
  buttonClick: PropTypes.func,
};

export default RoundButton;