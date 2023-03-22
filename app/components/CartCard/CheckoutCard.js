import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';
import {View, Image, Text, TouchableOpacity, I18nManager} from 'react-native';

import {styles, images} from './CheckoutCardStyle';
import EditModal from '../../components/EditModal';
import RateitemModal from '../../components/RateitemModal';
import appTexts from '../../lib/appTexts';

const CheckoutCard = props => {
  const {
    item,
    isWish,
    isOrderDetails,
    isDelivered,
    isCheckout,
    updateCart,
    isCart,
  } = props;

  const cover_image = item?.cover_image;
  let price = item?.price?.discount_price || 0;
  if (item?.price?.discount == null) {
    price = item?.price?.price || 0;
  }

  if (price) {
    price = parseFloat(price).toFixed(2);
  }
  const product_type = item?.product_type;
  let sub_total = item?.sub_total;
  if (sub_total) {
    sub_total = parseFloat(sub_total).toFixed(2);
  }
  const item_count = item?.item_count;
  const lang = I18nManager.isRTL ? 'ar' : 'en';
  const name_langs =
    typeof item?.product?.lang != 'undefined' ? item?.product?.lang : [];
  name_langs.filter(item => {
    return item.language == lang;
  });
  const name = name_langs?.[0]?.name;

  const [isEditModalVisible, setIsEditModalVisibile] = useState(false);
  const [isDetailModalVisible, setIsDetailModalVisibile] = useState(false);
  const [isRateModalVisible, setIsRateModalVisible] = useState(false);

  const openEditModal = () => {
    setIsEditModalVisibile(!isEditModalVisible);
  };

  const closeModal = () => {
    setIsEditModalVisibile(!isEditModalVisible);
  };

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

  return (
    <View style={styles.fullWidthRowContainer}>
      <View style={styles.rowContainerWish}>
        <View style={styles.imageContainer}>
          <View style={styles.borderImage}>
            {cover_image != '' && (
              <Image
                resizeMode="cover"
                source={{
                  uri: cover_image,
                }}
                style={styles.imageabc}
              />
            )}
          </View>
        </View>

        <View style={styles.labelContainer}>
          <Text numberOfLines={2} style={styles.itemNameText}>
            {name}
          </Text>
          <View style={styles.priceNumView}>
            <View style={styles.PriceView}>
              <Text style={styles.itemNameEdit}>{appTexts.CART.price}</Text>
              <View style={styles.numName}>
                <Text style={styles.itemNameTextNum}>{price}</Text>
              </View>
              <View>
                {I18nManager.isRTL ? (
                  <Text style={styles.itemNameEdit}> {item_count}X </Text>
                ) : (
                  <Text style={styles.itemNameEdit}> X{item_count} </Text>
                )}
              </View>
            </View>

            <View style={[styles.PriceView, {justifyContent: 'flex-end'}]}>
              <Text style={styles.itemNameEdit}>{appTexts.CART.price}</Text>
              <View style={styles.numName}>
                <Text style={styles.itemNameTextNum}>{sub_total}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CheckoutCard;
