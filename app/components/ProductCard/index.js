import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity, I18nManager } from 'react-native';
import _ from 'lodash';
import { styles } from './styles';
import appTexts from '../../lib/appTexts';
import { useSelector } from 'react-redux';
import FastImage from 'react-native-fast-image';

const ProductCard = props => {
  const {
    item,
    itemClick,
    isCustom,
    isFav,
    onHeartClick = () => { },
    wishExecuting = false,
    is_guest_logged_in = false,
  } = props;
  let { products, product, brand } = item;

  const { userData } = useSelector(state => state.loginReducer);

  if (typeof product !== 'undefined') {
    products = product;
  }

  if (typeof brand !== 'undefined') {
    products = item;
  }

  if (!products) {
    return null;
  }

  const { cover_image, lang, product_type, rating, id, view_count } = products;
  let priceValue = {};

  const item_type = products?.item_type || '';

  let brandLang = products.brand?.lang;

  if (typeof products.price === 'object') {
    priceValue = products.price;
  } else {
    priceValue = products;
  }
  const price = priceValue.price || 0;
  const discount = priceValue.discount || 0;
  const discount_price = priceValue.discount_price || 0;

  const chkIfUserAlreadyWishListed = prodID => {
    const userDataInfo = userData?.data;

    if (userDataInfo && 'wishlist' in userDataInfo) {
      const { wishlist } = userDataInfo;
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
    try {
      const nameData = lang.find(i => i.language === getLang());
      return nameData.name;
    } catch (err) {
      return '';
    }
  };

  const getBrand = () => {
    try {
      const brandData = brandLang.find(i => i.language === getLang());
      return brandData.name;
    } catch (err) {
      return '';
    }
  };

  const getDiscountPrice = () => {
    if (discount > 0) {
      return discount_price.toFixed(2);
    }
    return price.toFixed(2);
  };

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => itemClick(id)}>
      <View style={styles.labelView}>
        {discount > 0 && (
          <View style={styles.discountTextContainer}>
            <Text style={styles.discountText}>
              {`${_.parseInt(discount)}%`}
            </Text>
          </View>
        )}

        {is_guest_logged_in !== true && (
          <TouchableOpacity
            disabled={wishExecuting}
            onPress={() => onHeartClick('product', id)}>
            <View style={styles.favIconContainer}>
              <Image
                style={styles.love}
                source={
                  chkIfUserAlreadyWishListed(id)
                    ? require('../../assets/images/products/Love-a.png')
                    : require('../../assets/images/products/love.png')
                }
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.imageContainer}>
        <FastImage
          resizeMode="stretch"
          source={cover_image ? { uri: cover_image } : {}}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.custom}>
          <View style={styles.nameV}>
            <Text numberOfLines={2} style={styles.nameText}>
              {getBrand()}
            </Text>
          </View>
          {item_type == 'custom' && (
            <View style={styles.custBox}>
              <Text style={styles.cus}>{appTexts.PRODUCT.cus}</Text>
            </View>
          )}
        </View>
        <Text numberOfLines={2} style={styles.titleText}>
          {getTitle()}
        </Text>
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
          <View style={[styles.eye, rating > 0 && { paddingLeft: '4%' }]}>
            <Image
              style={styles.eyeStyle}
              source={require('../../assets/images/products/Eye.png')}
            />
          </View>
          <View style={{ paddingLeft: '2%' }}>
            <Text style={styles.ratingK}>
              {view_count && view_count >= 1000
                ? view_count / 1000 + 'K'
                : view_count}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.thirdContainer}>
        <View style={styles.priceStyle}>
          <View style={styles.textOne}>
            <Text style={styles.light}>
              {appTexts.PRODUCT.sar}
              {I18nManager.isRTL ? ' ' : ''}
            </Text>
            <Text style={styles.darkPrice}>
              {/* {I18nManager.isRTL ? ' ' : ''} */}
              {getDiscountPrice()}
            </Text>
          </View>
          {discount > 0 && (
            <View
              style={{
                paddingLeft: 5,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={styles.lightPrice}>
                {appTexts.PRODUCT.sar}
                {I18nManager.isRTL ? '' : ''}
                {price.toFixed(2)}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

ProductCard.propTypes = {
  item: PropTypes.object,
  itemClick: PropTypes.func,
  isCustom: PropTypes.bool,
};

export default ProductCard;
