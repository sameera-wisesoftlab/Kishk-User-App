import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity, I18nManager, Platform } from 'react-native';
import { styles, images } from './styles';
import { toUpperCase } from '../../utility/StringUtility';
import FastImage from 'react-native-fast-image';

const SmallProductCard = props => {
  const { item, isBrands, isCatScreen, isTopBrands, isCatHome, onItemClick, isSearch = false } =
    props;

  const getLang = () => {
    return I18nManager.isRTL ? 'ar' : 'en';
  };

  const getIcon = () => {
    let icon = '';
    let langTitles = null;
    if (isCatHome || isCatScreen) {
      langTitles = item?.lang;
    }
    if (isBrands && !isCatScreen) {
      langTitles = item?.brands?.lang;
    }

    if (langTitles) {
      let langItem = langTitles.find(i => i.language === getLang());
      if ('path' in langItem) {
        icon = langItem.path;
      }
      if ('icon' in langItem) {
        icon = langItem.icon;
      }
      if ('cover_image' in langItem) {
        icon = langItem.cover_image;
      }

      return icon;
    } else {
      if (item.img) {
        return item.img;
      }
      return null;
    }
  };

  const getTitle = () => {
    let title = '';
    let langTitles = null;

    if (isCatHome || isCatScreen) {
      langTitles = item?.lang;
    }

    if (langTitles) {
      let langItem = langTitles.find(i => i.language === getLang());
      title = langItem.name;
    }
    if (!title && item.name) {
      title = item.name;
    }

    return toUpperCase(title);
  };

  return (
    <TouchableOpacity
      style={[(isSearch && Platform.OS == 'android') && { transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }] }]}
      onPress={() =>
        onItemClick(isBrands && !isCatScreen ? item.brand_id : item.id)
      }>
      <View
        style={
          isCatScreen
            ? styles.catWrapperView
            : isTopBrands
              ? styles.topWrapper
              : styles.wrapperView
        }>
        <View
          style={
            isCatScreen
              ? styles.catSquare
              : isTopBrands
                ? styles.topSquare
                : styles.square
          }>
          <View>
            <FastImage
              source={getIcon() ? { uri: getIcon() } : {}}
              style={isBrands ? styles.brands : styles.shoe}
            />
          </View>
        </View>
        {isBrands ? null : (
          <View style={isCatScreen ? styles.catTitle : styles.title}>
            <Text numberOfLines={3} style={styles.name}>
              {getTitle()}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

SmallProductCard.propTypes = {
  item: PropTypes.object,
  isCatScreen: PropTypes.bool,
};

export default SmallProductCard;
