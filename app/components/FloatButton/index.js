import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity, I18nManager, ActivityIndicator } from 'react-native';
import { images, styles } from './styles';
import { connect } from 'react-redux';
import globals from '../../lib/globals';
import appTexts from '../../lib/appTexts';

const FloatButton = props => {
  const {
    isDate,
    isFilter,
    isCategory,
    buttonText,
    onButtonClick,
    onclearButtonclick,
    onAddtoClick,
    selectedData,
    simple_price,
    complex_price,
    product_type,
    prodct_detail,
    addCartPressed,
    setAddCartPressed,
    productCount = 0,
    isCheckout,
    selectedMethod,
    setCustomAttrModalVisible,
    filterIsLoading = false
  } = props;

  let price = 0;
  let discount_price = 0;
  let discount = 0;

  if (product_type == 'simple') {
    price = simple_price?.price || 0;
    discount_price = simple_price?.discount_price || 0;
    discount = simple_price?.discount || 0;
  } else {
    const varnt1 = selectedData?.variant_id1;
    const varnt2 = selectedData?.variant_id2;
    price = complex_price?.[`${varnt1}_${varnt2}_price`] || 0;
    discount_price = complex_price?.[`${varnt1}_${varnt2}_discount_price`] || 0;
    discount = complex_price?.[`${varnt1}_${varnt2}_discount`] || 0;
  }
  const variant_selected = selectedData?.variant_selected;

  const getDiscountPrice = () => {
    if (discount > 0) {
      return discount_price.toFixed(2);
    }
    return price.toFixed(2);
  };

  return (
    <View
      style={
        isDate
          ? styles.floata
          : isFilter
            ? styles.floata
            : isCategory || isCheckout
              ? styles.floata
              : styles.float
      }>
      {prodct_detail === true && (
        <View style={styles.price}>
          {/* {product_type == 'complex' && (
            <>
              {variant_selected == false && (
                <Text
                  style={[styles.lightSAR, addCartPressed && {color: 'red'}]}>
                  {'Please select variant'}
                </Text>
              )}
            </>
          )} */}
          {getDiscountPrice() > 0 && (
            <View style={styles.row}>
              <Text style={styles.lightSAR}>{appTexts.PRODUCT.sar} </Text>
              <Text style={styles.dark}>
                {I18nManager.isRTL ? ' ' : ''}
                {getDiscountPrice()}{' '}
              </Text>
            </View>
          )}
          {discount > 0 && (
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.light}>{appTexts.PRODUCT.sar} </Text>
              <Text style={styles.light}>
                {I18nManager.isRTL ? ' ' : ''}
                {price.toFixed(2)}
              </Text>
            </View>
          )}
        </View>
      )}

      {isFilter === true && (
        <TouchableOpacity onPress={onclearButtonclick}>
          <View style={styles.clearBox}>
            <Text style={styles.clearText}>{appTexts.FILTER.clear}</Text>
          </View>
        </TouchableOpacity>
      )}

      {isFilter === true && (
        <TouchableOpacity
          onPress={() => {
            onButtonClick();
          }}>
          <View style={styles.butFill}>
            {filterIsLoading == false &&
              <Text style={styles.results}>
                {productCount} {appTexts.FILTER.results}
              </Text>
            }
            {filterIsLoading == true &&
              <ActivityIndicator color={'#fff'} />
            }
            <Text style={styles.results}>{appTexts.FILTER.apply}</Text>
          </View>
        </TouchableOpacity>
      )}

      {isCategory && (
        <TouchableOpacity
          onPress={() => {
            onButtonClick();
          }}>
          <View style={styles.but1}>
            <Text style={styles.butText}>{buttonText}</Text>
          </View>
        </TouchableOpacity>
      )}

      {isCheckout && (
        <TouchableOpacity
          onPress={() => {
            onButtonClick();
          }}>
          <View style={[styles.but1, selectedMethod == '' && { opacity: 0.5 }]}>
            <Text style={styles.butText}>{buttonText}</Text>
          </View>
        </TouchableOpacity>
      )}

      {isDate && (
        <View style={styles.but1}>
          <TouchableOpacity
            onPress={() => {
              onButtonClick();
            }}>
            <Text style={styles.butText}>{appTexts.DELIVERY_DATE.confirm}</Text>
          </TouchableOpacity>
        </View>
      )}

      {prodct_detail === true && (
        <View style={styles.but}>
          <TouchableOpacity
            onPress={() => {
              setAddCartPressed(true);
              if (
                product_type == 'simple' ||
                (product_type == 'complex' &&
                  selectedData.variant_selected === true)
              ) {
                onAddtoClick();
              } else {
                setCustomAttrModalVisible(true);
              }
            }}>
            <Text style={styles.butText}>{appTexts.PRODUCT.addCart}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default FloatButton;
