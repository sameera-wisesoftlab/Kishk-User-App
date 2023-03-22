import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity, I18nManager } from 'react-native';
import { styles, images } from "./styles";
import appTexts from '../../lib/appTexts';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const FilterCard = (props) => {
  const {
    title,
    onFilterCardPress,
    subtitle
  } = props;


  return (
    <TouchableOpacity onPress={() => { onFilterCardPress(); }}>
      <View style={styles.wrapper}>
        <View style={styles.textRow}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
          <View>
            <Image style={styles.arrow} source={images.arrow} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
FilterCard.propTypes = {
  item: PropTypes.object
};

export default FilterCard;