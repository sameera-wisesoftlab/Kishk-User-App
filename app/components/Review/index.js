import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, Text} from 'react-native';
import {styles, images} from './styles';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Review = props => {
  const {reviewData} = props;
  const {customer, rating, review} = reviewData;
  const photo = customer?.profile_image;

  const renderStarImages = () => {
    if (!rating) {
      return null;
    }
    const nonRateValue = 5 - rating;
    let stardata = Array(+rating)
      .fill()
      .map(i => (
        <Image source={images.star} style={styles.str} resizeMode="contain" />
      ));
    let noStardata = Array(+nonRateValue)
      .fill()
      .map(i => (
        <Image source={images.noStar} style={styles.str} resizeMode="contain" />
      ));

    return [stardata, noStardata];
  };

  const getCustomerName = () => {
    let name = customer.cust_name;
    name += customer.last_name ? ` ${customer.last_name}` : '';
    return name;
  };

  return (
    <View style={styles.reviewRow}>
      <View style={styles.imageBlock}>
        <View style={styles.custImgWrap}>
          <Image
            source={photo ? {uri: photo} : images.picon}
            style={styles.per}
            resizeMode="contain"
          />
        </View>
        <View style={styles.nam}>
          <Text style={styles.nameText}>{getCustomerName()}</Text>
          <View style={styles.starLine}>
            {renderStarImages()}
            {/*
            <Image
              source={images.starHalf}
              style={styles.str}
              resizeMode="contain"
            /> */}
          </View>
        </View>
      </View>
      <View style={styles.para}>
        <Text style={styles.par}>{review}</Text>
      </View>
      <View style={{height: hp('.25%'), backgroundColor: '#F8F8F8'}} />
    </View>
  );
};

Review.propTypes = {
  item: PropTypes.object,
};

export default Review;
