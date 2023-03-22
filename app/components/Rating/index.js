import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';
import {View, Image, Text, TouchableOpacity, I18nManager} from 'react-native';
import {styles} from './styles';
import appTexts from '../../lib/appTexts';

const Rating = props => {
  const {rating, view_count} = props;
  let count_total = view_count;
  if (view_count >= 1000) {
    count_total = view_count / 1000 + 'K';
  }

  return (
    <View style={styles.ratingRow}>
      {rating > 0 && (
        <>
          <View style={styles.star}>
            <Image
              style={styles.starStyle}
              source={require('../../assets/images/products/star.png')}></Image>
          </View>
          <Text style={styles.numberRating}>{rating}</Text>
        </>
      )}

      <View style={styles.eye}>
        <Image
          style={styles.eyeStyle}
          source={require('../../assets/images/products/Eye.png')}></Image>
      </View>
      <View style={{paddingLeft: '2%'}}>
        <Text style={styles.ratingK}>{count_total}</Text>
      </View>
    </View>
  );
};
Rating.propTypes = {
  item: PropTypes.object,
};

export default Rating;
