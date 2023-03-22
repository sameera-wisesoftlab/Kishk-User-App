import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity, I18nManager } from 'react-native';

import { styles, images } from './CartListStyle';
import RateitemModal from '../../components/RateitemModal';
import appTexts from '../../lib/appTexts';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const CartList = props => {
  const {
    item,
    isWish,
    isOrderDetails,
    isDelivered,
    isCheckout,
    updateCart,
    isCart,
    userData,
    onHeartClick = () => { },
    openEditModal,
  } = props;

  const cart_item_id = item?.id;
  const cover_image = item?.cover_image;
  const product_type = item?.product_type;
  const item_type = item?.item_type;
  let sub_total = item?.sub_total;
  if (sub_total) {
    sub_total = parseFloat(sub_total).toFixed(2);
  }
  const item_count = item?.item_count;
  const lang = I18nManager.isRTL ? 'ar' : 'en';
  const name_langs =
    typeof item?.product?.lang !== 'undefined' ? item?.product?.lang : [];
  name_langs.filter(item => {
    return item.language == lang;
  });
  const name = name_langs?.[0]?.name;

  const [isDetailModalVisible, setIsDetailModalVisibile] = useState(false);
  const [isRateModalVisible, setIsRateModalVisible] = useState(false);

  const openDetailModal = () => {
    setIsDetailModalVisibile(!isDetailModalVisible);
  };

  const detailCloseModal = () => {
    setIsDetailModalVisibile(!isDetailModalVisible);
  };
  const openrateModal = () => {
    setIsRateModalVisible(!isRateModalVisible);
  };

  const ratecloseModal = () => {
    setIsRateModalVisible(!setIsRateModalVisible);
  };

  const chkIfProductAlreadyInWishList = () => {
    const userDataInfo = userData?.data;
    const prodID = item?.product?.id;

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

  return (
    <View style={styles.fullWidthRowContainer}>
      <View style={styles.rowContainerWish}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="contain"
            source={{
              uri: cover_image,
            }}
            style={styles.imageabc}
          />
        </View>

        <View style={styles.labelContainer}>
          <View style={styles.textContainerEdit}>
            <Text style={styles.itemNameText}>{name}</Text>
            {item_type == 'custom' && (
              <TouchableOpacity
                style={styles.textConEdit}
                onPress={() => {
                  openEditModal(cart_item_id);
                }}>
                <Image
                  resizeMode="contain"
                  source={require('../../assets/images/products/edit.png')}
                  style={styles.imageb}
                />
                <Text style={styles.itemNameEdit}>{appTexts.CART.edit}</Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.priceNumView}>
            <View style={styles.PriceView}>
              <Text style={styles.itemNameEdit}>{appTexts.CART.price}</Text>
              <View style={styles.numName}>
                <Text style={styles.itemNameTextNum}>{sub_total}</Text>
              </View>
            </View>

            <View style={styles.countSelectView}>
              <TouchableOpacity
                style={styles.addingNum}
                onPress={() => updateCart(item, -1, item_count, item_type)}>
                <Text style={styles.symbolTextMinus}>{'-'}</Text>
              </TouchableOpacity>
              <View style={styles.verticalDivider} />
              <Text style={styles.countText}>{item_count}</Text>
              <View style={styles.verticalDivider} />
              <TouchableOpacity
                style={styles.plusView}
                onPress={() => updateCart(item, 1, item_count, item_type)}>
                <Text style={styles.symbolTextPlus}>{'+'}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.movetoView}>
            <TouchableOpacity
              onPress={() => onHeartClick(item)}
              style={styles.moveView}>
              <View style={styles.favIconContainer}>
                <Image
                  source={require('../../assets/images/products/Art.png')}
                  style={styles.favIconStyle}
                />
              </View>
              <View style={{ width: wp('40%') }}>
                <Text style={styles.itemNameWish}>{appTexts.CART.moveto}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => updateCart(item, 0, 0, item_type)}
              style={{ width: '50%' }}>
              <View style={styles.RemoveView}>
                <View style={styles.deleteIconContainer}>
                  <Image
                    source={require('../../assets/images/products/Delete.png')}
                    style={styles.binStyle}
                  />
                </View>
                <Text style={styles.itemNameWish}>{appTexts.CART.remove}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartList;
