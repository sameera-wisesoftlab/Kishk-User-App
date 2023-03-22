import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity, I18nManager } from 'react-native';
import { styles } from './styles';
import appTexts from '../../lib/appTexts';
import Rating from '../../components/Rating';

const ProductDescriptionCard = props => {
  const { name, brandName, rating, view_count } = props;

  return (
    <View style={styles.cardView}>
      <View style={styles.rateLine}>
        <View style={styles.name}>
          <Text style={styles.nameText}>{brandName}</Text>
        </View>
        <View style={styles.rate}>
          <Rating rating={rating} view_count={view_count} />
        </View>
      </View>
      <View style={styles.tit}>
        {typeof name != 'undefined' && <Text style={styles.title}>{name}</Text>}
        {typeof name == 'undefined' && (
          <Text style={styles.title}>{appTexts.STRING.loading}....</Text>
        )}
      </View>
    </View>
  );
};
ProductDescriptionCard.propTypes = {
  item: PropTypes.object,
};

export default ProductDescriptionCard;
