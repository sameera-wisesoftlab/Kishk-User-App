import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';
import {styles} from './styles';

const BannerImage = props => {
  const {bannerImage} = props;

  return (
    <View style={styles.bannerContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source={bannerImage} />
      </View>
    </View>
  );
};
BannerImage.propTypes = {
  // bannerImage:PropTypes.number
};

export default BannerImage;
