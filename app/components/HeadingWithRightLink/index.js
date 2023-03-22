import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { styles, images } from './styles';
import appTexts from '../../lib/appTexts';

const HeadingWithRightLink = props => {
  const {
    leftIcon,
    nameLabel,
    rightLinkText,
    color,
    locationnameLabel,
    onSeeallClick,
    isRightLinkRequired,
    isReview,
    isCategoryScreen,
    isRightImageWithLinkRequired,
    addnewAddress,
    ordersummaryitems,
    orderSummaryText,
    addressDeatails,
    itemLength,
    brandData,
    fromHomeProduct = false,
    checkLength = brandData ? 4 : 2
  } = props;

  return (
    <View style={styles.container}>
      {ordersummaryitems ? (
        <View style={styles.summary}>
          <Text style={styles.nameLabel}>{appTexts.ORDER.summary}</Text>
          <View style={styles.itemBox}>
            <Text style={styles.iText}>{orderSummaryText}</Text>
          </View>
        </View>
      ) : null}
      {addressDeatails ? (
        <View style={styles.addressView}>
          <Text style={styles.nameLabel}>{'Address Details'}</Text>
          <View>
            <TouchableOpacity onPress={addnewAddress}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={images.addIcon} style={styles.checkBox} />
                <Text style={styles.atext}>{'Add New Address'}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      <View style={styles.leftHeadingContainer}>
        <View style={styles.leftHeadingView}>
          {leftIcon && (
            <Image
              style={styles.leftIcon}
              resizeMode="contain"
              source={leftIcon}
            />
          )}
          <View style={styles.leftHeadingLabelView}>
            <Text style={styles.locationnameLabel}>{locationnameLabel}</Text>
          </View>
          <View style={styles.leftHeadingLabelView}>
            <Text
              style={[
                isReview
                  ? styles.label
                  : isCategoryScreen
                    ? styles.nameLabelCat
                    : styles.nameLabel,
                fromHomeProduct && { left: -5 },
              ]}>
              {nameLabel}
            </Text>
          </View>
        </View>
      </View>
      {isRightLinkRequired && itemLength > checkLength && (
        <TouchableOpacity
          style={
            isCategoryScreen
              ? styles.categoryRightLink
              : styles.rightLinkContainer
          }
          onPress={onSeeallClick}>
          <Text style={styles.linkLabelRed}>{rightLinkText}</Text>
        </TouchableOpacity>
      )}

      {isRightImageWithLinkRequired ? (
        <View>
          <TouchableOpacity style={styles.righttextImage}>
            <Text style={styles.linkLabelBlack}>{rightLinkText}</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

HeadingWithRightLink.propTypes = {
  leftIcon: PropTypes.number,
  nameLabel: PropTypes.string,
  onItemClick: PropTypes.func,
};

export default HeadingWithRightLink;
