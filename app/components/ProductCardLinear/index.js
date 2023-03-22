import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';
import {View, Image, Text, TouchableOpacity, I18nManager} from 'react-native';
import _ from 'lodash';
import {styles, images} from './styles';
import appTexts from '../../lib/appTexts';
import {useSelector} from 'react-redux';

const ProductCardLinear = props => {
  const {
    item,
    isCustom,
    isFav,
    itemClick,
    onHeartClick = () => {},
    wishExecuting,
    is_guest_logged_in,
  } = props;
  const {cover_image, lang, rating, id, brand, view_count} = item;
  const {price, discount_price, discount} = item.price;

  const {userData} = useSelector(state => state.loginReducer);

  const chkIfUserAlreadyWishListed = prodID => {
    const userDataInfo = userData?.data;

    if (userDataInfo && 'wishlist' in userDataInfo) {
      const {wishlist} = userDataInfo;
      if (wishlist) {
        if (wishlist.some(e => e.product_id === prodID)) {
          return true;
        }
      }
    }
    return false;
  };

  const getLang = () => {
    return I18nManager.isRTL ? 'ar' : 'en';
  };

  const getTitle = () => {
    const nameData = lang.find(i => i.language === getLang());
    return nameData.name;
  };

  const getBrand = () => {
    if (!brand) {
      return null;
    }

    const brandLang = brand?.lang;
    const brandData = brandLang.find(i => i.language === getLang());
    return brandData.name;
  };

  return (
    // <TouchableOpacity onPress={itemClick}>
    <View style={styles.cardWrapper}>
      {is_guest_logged_in !== true && (
        <TouchableOpacity
          disabled={wishExecuting}
          onPress={() => onHeartClick('product', id)}
          style={styles.heartContainer}>
          <View>
            {chkIfUserAlreadyWishListed(id) ? (
              <Image source={images.redHeart} style={styles.heart} />
            ) : (
              <Image source={images.heart} style={styles.heart} />
            )}
          </View>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        onPress={itemClick}
        style={{width: '100%', alignItems: 'center'}}>
        {discount != null && (
          <View style={styles.discountTextContainer}>
            <Text style={styles.discountText}>
              {discount ? `${_.parseInt(discount)}%` : '0%'}
            </Text>
          </View>
        )}
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="contain"
              source={
                cover_image
                  ? {uri: cover_image}
                  : require('../../assets/images/products/img1.png')
              }
              style={styles.image}
            />
          </View>

          <View style={styles.textContainer}>
            <View style={styles.custom}>
              <Text style={styles.nameText}>{getBrand()}</Text>
              {isCustom ? (
                <View style={styles.custBox}>
                  <Text style={styles.cus}>{appTexts.PRODUCT.cus}</Text>
                </View>
              ) : null}
            </View>
            <View style={styles.textBox}>
              <Text style={styles.titleText}>{getTitle()}</Text>
            </View>
            <View style={styles.ratingRow}>
              {rating > 0 && (
                <>
                  <View style={styles.star}>
                    <Image
                      style={styles.starStyle}
                      source={require('../../assets/images/products/star.png')}
                    />
                  </View>
                  <Text style={styles.numberRating}>
                    {parseFloat(rating).toFixed(1)}
                  </Text>
                </>
              )}

              <View style={[styles.eye, rating <= 0 && {paddingLeft: '0%'}]}>
                <Image
                  style={styles.eyeStyle}
                  source={require('../../assets/images/products/Eye.png')}
                />
              </View>
              <View style={{paddingLeft: '2%'}}>
                <Text style={styles.ratingK}>
                  {view_count && view_count >= 1000
                    ? view_count / 1000 + 'K'
                    : view_count}
                </Text>
              </View>
            </View>
            <View style={styles.thirdContainer}>
              <View style={styles.priceStyle}>
                <Text style={styles.light}>{appTexts.PRODUCT.sar}</Text>
                <Text style={styles.darkPrice}>
                  {' '}
                  {discount_price.toFixed(2)}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.lightPrice}> {appTexts.PRODUCT.sar}</Text>
                  <Text style={styles.lightPrice2}> {price.toFixed(2)}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
ProductCardLinear.propTypes = {
  item: PropTypes.object,
  itemClick: PropTypes.func,
  isCustom: PropTypes.bool,
};

export default ProductCardLinear;
