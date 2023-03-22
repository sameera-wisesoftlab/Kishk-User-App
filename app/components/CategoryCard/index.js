import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';
import {View, Image, Text, TouchableOpacity, I18nManager} from 'react-native';
import {styles} from './styles';
import appTexts from '../../lib/appTexts';
import FastImage from 'react-native-fast-image';

const CategoryCard = props => {
  const {item, itemClick} = props;

  const getLang = () => {
    return I18nManager.isRTL ? 'ar' : 'en';
  };

  const getTitle = () => {
    const langTitles = item?.lang;
    if (langTitles) {
      let title = langTitles.find(i => i.language === getLang()).name;
      return title;
    }

    return null;
  };

  const getCoverImage = () => {
    const langTitles = item?.lang;
    if (langTitles) {
      let icon = langTitles.find(i => i.language === getLang()).cover_image;
      return icon;
    }

    return null;
  };

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => itemClick(item.id)}>
      <View style={styles.imageContainer}>
        <FastImage
          resizeMode="contain"
          source={getCoverImage() ? {uri: getCoverImage()} : {}}
          style={styles.image}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Text numberOfLines={1} style={styles.but}>
          {getTitle()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
CategoryCard.propTypes = {
  item: PropTypes.object,
};

export default CategoryCard;
