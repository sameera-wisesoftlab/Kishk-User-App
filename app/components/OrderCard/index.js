import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity, I18nManager } from 'react-native';
import { styles, images } from './styles';
import appTexts from '../../lib/appTexts';
import globals from '../../lib/globals';

const OrderCard = props => {
  const {
    item,
    isWish,
    isOrderDetails,
    isDelivered,
    reorderProduct,
    openRateProdModal = () => { },
    openDetailModal,
  } = props;

  let has_attrs = false;
  let custom_attributes = [];
  if (item.custom_attributes && item.custom_attributes.length > 0) {
    has_attrs = true;
    custom_attributes = item.custom_attributes;
  }

  const grant_total = parseFloat(item.grant_total).toFixed(2);
  const item_price = parseFloat(item.item_price).toFixed(2);
  const item_count = item.item_count;
  const cover_image = item?.cover_image;
  const lang = I18nManager.isRTL ? 'ar' : 'en';
  const name_lang = item?.product?.lang.filter(item => item.language == lang);
  const name = name_lang?.[0]?.name;
  const prodId = item?.product_id;
  const item_status = item?.item_status;
  const refund_status = item?.refund_status;

  console.log(refund_status);

  return (
    <View>
      <View
        style={
          isWish
            ? styles.fullWidthColumnContainer
            : styles.fullWidthRowContainer
        }>
        <View style={isWish ? styles.rowContainerWish : styles.rowContainer}>
          <View
            style={isOrderDetails ? styles.orderImage : styles.imageContainer}>
            <Image
              resizeMode="contain"
              source={{ uri: cover_image }}
              style={isWish ? styles.imagewish : styles.imageabc}
            />
          </View>

          <View style={styles.labelContainer}>
            {has_attrs && (
              <TouchableOpacity
                onPress={() => {
                  openDetailModal(custom_attributes);
                }}
                style={{
                  alignItems: 'center',
                  backgroundColor: 'lightgray',
                  width: I18nManager.isRTL ? 80 : 40,
                  height: 20,
                  borderRadius: 5,
                  justifyContent: 'center',
                  marginTop: 5,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    // width: '100%',
                    // height: '100%',
                    justifyContent: 'center',
                    // marginTop: 2,
                    fontFamily: I18nManager.isRTL
                      ? globals.FONTS.notokufiArabic
                      : globals.FONTS.cairoSemiBold,
                    fontSize: I18nManager.isRTL ? 8 : 10,
                  }}>
                  {appTexts.ORDER.custom}
                </Text>
              </TouchableOpacity>
            )}
            <View style={styles.wrap}>
              <View style={styles.textContainerEdit}>
                <Text numberOfLines={2} style={styles.itemNameText}>
                  {name}
                </Text>
              </View>

              {item_status == 3 && (
                <View style={styles.priceNumView}>
                  <View style={styles.priceRow}>
                    <View style={styles.left}>
                      <View style={styles.lightSar}>
                        <Text style={[styles.lightAmt, { color: 'red' }]}>
                          {refund_status == 7
                            ? appTexts.PRODUCT.refundInitiated
                            : refund_status == 8
                              ? appTexts.PRODUCT.refundCompleted
                              : appTexts.PRODUCT.rejected}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}

              {item_status != 3 && (
                <View style={styles.priceNumView}>
                  <View style={styles.priceRow}>
                    <View style={styles.left}>
                      <View style={styles.lightSar}>
                        <Text style={styles.lightAmt}>
                          {appTexts.PRODUCT.sar}
                        </Text>
                      </View>
                      <View style={styles.hun}>
                        <Text style={styles.hund}>{item_price}</Text>
                      </View>
                      <View style={styles.times}>
                        <Text style={styles.into}>x</Text>
                      </View>
                      <View style={styles.times}>
                        <Text style={styles.into}>{item_count}</Text>
                      </View>
                    </View>
                    <View style={styles.right}>
                      <View style={styles.lightSar}>
                        <Text style={styles.lightAmt}>
                          {appTexts.PRODUCT.sar}
                        </Text>
                      </View>
                      <View style={styles.hun}>
                        <Text style={styles.hund}>{grant_total}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}

              {isDelivered && item_status != 3 && (
                <View style={styles.ratereorder}>
                  <TouchableOpacity
                    style={styles.popupClose}
                    onPress={() => {
                      openRateProdModal(prodId);
                    }}>
                    <View style={styles.left}>
                      <View style={styles.perView}>
                        <Image source={images.rate} style={styles.rateImage} />
                      </View>
                      <Text style={styles.rate}>{appTexts.ORDER.rateitem}</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => reorderProduct(item)}>
                    <View style={styles.rightrate}>
                      <View style={styles.callImage}>
                        <Image
                          source={images.reorder}
                          style={styles.callImage}
                        />
                      </View>
                      <View style={styles.callTx}>
                        <Text style={styles.rate}>
                          {appTexts.ORDER.reorder}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>

      {/* <RateitemModal
        isRateModalVisible={isRateProdModalVisible}
        ratecloseModal={closeRateProdModal}
        productId={prodId}
        onSubmitReview={reviewData => {
           onSubmitReview({...reviewData, product_id: prodId});
        }}
        prodReviewExecuting={prodReviewExecuting}
      /> */}
    </View>
  );
};
OrderCard.propTypes = {
  itemImage: PropTypes.number,
  nameLabel: PropTypes.string,
};

export default OrderCard;
