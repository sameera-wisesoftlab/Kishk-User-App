import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity, I18nManager } from 'react-native';
import { styles, images } from './styles';
import EditModal from '../../components/EditModal';
import DetailModal from '../../components/DetailModal';
import RateitemModal from '../../components/RateitemModal';

import appTexts from '../../lib/appTexts';

const CartCard = props => {
  const {
    item,
    isWish,
    isOrderDetails,
    isDelivered,
    isCheckout,
    updateCart,
    removeFromWishlist = () => { },
    addProdToCart = () => { },
  } = props;

  const { products } = item;

  const {
    id,
    lang,
    cover_image,
    product_type,
    price,
    discount,
    discount_price,
    rating,
    view_count,
  } = products;
  const item_count = item?.item_count;
  const currentLang = I18nManager.isRTL ? 'ar' : 'en';

  const [isEditModalVisible, setIsEditModalVisibile] = useState(false);
  const [isDetailModalVisible, setIsDetailModalVisibile] = useState(false);
  const [isRateModalVisible, setIsRateModalVisible] = useState(false);

  const getTitle = () => {
    if (lang) {
      const langData = lang.find(item => item.language === currentLang);
      const name = langData?.name;
      return name;
    }
    return null;
  };

  const getDiscountPrice = () => {
    if (discount > 0 && product_type !== 'simple') {
      return discount_price.toFixed(2);
    }
    return price.toFixed(2);
  };

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
    <View
      style={
        isWish ? styles.fullWidthColumnContainer : styles.fullWidthRowContainer
      }>
      <View
        style={[
          !isWish && styles.rowContainer,
          (isWish || isCheckout) && styles.rowCon,
          !isWish && !isCheckout && styles.rowContainerWish,
        ]}>
        <TouchableOpacity onPress={addProdToCart}>
          <View
            style={isOrderDetails ? styles.orderImage : styles.imageContainer}>
            <Image
              resizeMode="contain"
              source={
                cover_image
                  ? { uri: cover_image }
                  : require('../../assets/images/products/img1.png')
              }
              style={isWish ? styles.imagewish : styles.imageabc}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={addProdToCart}>
          <View style={styles.labelContainer}>
            <View style={styles.textContainerEdit}>
              <Text
                style={styles.itemNameText}
                numberOfLines={2}
                ellipsizeMode="middle">
                {getTitle()}
              </Text>

              <View style={styles.eye}>
                <Image
                  style={styles.eyeStyle}
                  source={require('../../assets/images/products/Eye.png')}
                />
              </View>
              <View style={styles.kView}>
                <Text style={styles.ratingK}>
                  {view_count && view_count >= 1000
                    ? view_count / 1000 + 'K'
                    : view_count}
                </Text>
              </View>
            </View>

            {isWish && !isOrderDetails && (
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

                <View style={styles.eye}>
                  <Image
                    style={styles.eyeStyle}
                    source={require('../../assets/images/products/View.png')}
                  />
                </View>
                <View style={styles.kView}>
                  <Text style={styles.ratingK}>
                    {view_count && view_count >= 1000
                      ? view_count / 1000 + 'K'
                      : view_count}
                  </Text>
                </View>
              </View>
            )}

            <View style={styles.priceNumView}>
              {isOrderDetails ? (
                <View style={styles.priceRow}>
                  <View style={styles.left}>
                    <View style={styles.lightSar}>
                      <Text style={styles.lightAmt}>
                        {appTexts.PRODUCT.sar}
                      </Text>
                    </View>
                    <View style={styles.hun}>
                      <Text style={styles.hund}>100.00</Text>
                    </View>
                    <View style={styles.times}>
                      <Text style={styles.into}>{appTexts.ORDER.into}</Text>
                    </View>
                  </View>
                  <View style={styles.right}>
                    <View style={styles.lightSar}>
                      <Text style={styles.lightAmt}>
                        {appTexts.PRODUCT.sar}
                      </Text>
                    </View>
                    <View style={styles.hun}>
                      <Text style={styles.hund}>100.00</Text>
                    </View>
                  </View>
                </View>
              ) : (
                  <View style={isWish ? styles.PriceStyle : styles.PriceView}>
                    <Text style={styles.itemNameEdit}>{appTexts.CART.price}</Text>
                    <View style={styles.numName}>
                      <Text style={styles.itemNameTextNum}>
                        {getDiscountPrice()}
                      </Text>
                    </View>
                    {discount > 0 && (
                      <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                        <Text style={styles.lightPrice}>
                          {appTexts.PRODUCT.sar}
                        </Text>
                        <Text numberOfLines={1} style={styles.lightPrice}>
                          {I18nManager.isRTL ? ' ' : ''}
                          {price.toFixed(2)}
                        </Text>
                      </View>
                    )}
                  </View>
                )}

              {isCheckout || isWish ? null : (
                <View style={styles.countSelectView}>
                  <TouchableOpacity
                    style={styles.addingNum}
                    onPress={() => updateCart(item, -1, item_count)}>
                    <Text style={styles.symbolTextMinus}>{'-'}</Text>
                  </TouchableOpacity>
                  <View style={styles.verticalDivider} />
                  <Text style={styles.countText}>{item_count}</Text>
                  <View style={styles.verticalDivider} />
                  <TouchableOpacity
                    style={styles.plusView}
                    onPress={() => updateCart(item, 1, item_count)}>
                    <Text style={styles.symbolTextPlus}>{'+'}</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>

            {isCheckout || isWish ? null : (
              <View style={styles.movetoView}>
                <View style={styles.moveView}>
                  <View style={styles.favIconContainer}>
                    <Image
                      source={require('../../assets/images/products/Art.png')}
                      style={styles.favIconStyle}
                    />
                  </View>
                  <Text style={styles.itemNameWish}>
                    {appTexts.CART.moveto}
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => updateCart(item, 0, 0)}
                  style={{ width: '50%' }}>
                  <View style={styles.RemoveView}>
                    <View style={styles.deleteIconContainer}>
                      <Image
                        source={require('../../assets/images/products/Delete.png')}
                        style={styles.binStyle}
                      />
                    </View>
                    <Text style={styles.itemNameWish}>
                      {appTexts.CART.remove}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>

      {isDelivered && (
        <View style={styles.callView}>
          <View style={styles.left}>
            <View style={styles.perView}>
              <Image source={images.rate} style={styles.rate} />
            </View>
            <Text style={styles.rate}>{appTexts.ORDER.rate}</Text>
          </View>
          <View style={styles.right}>
            <View style={styles.callImage}>
              <Image source={images.reorder} style={styles.callImage} />
            </View>
            <View style={styles.callTx}>
              <Text style={styles.rate}>{appTexts.ORDER.reorder}</Text>
            </View>
          </View>
        </View>
      )}

      {isWish ? (
        isOrderDetails ? null : (
          <View style={styles.addtoView}>
            <TouchableOpacity onPress={addProdToCart}>
              <View style={styles.PriceView}>
                <View style={styles.favIconContainer}>
                  <Image
                    source={require('../../assets/images/footerTabItem/cartfill.png')}
                    style={styles.favIconStyle}
                  />
                </View>
                <Text style={styles.itemNameWish}>{appTexts.CART.addto}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={removeFromWishlist}>
              <View style={styles.PriceView}>
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
        )
      ) : null}

      <RateitemModal
        isRateModalVisible={isRateModalVisible}
        ratecloseModal={ratecloseModal}
      />
    </View>
  );
};
CartCard.propTypes = {
  itemImage: PropTypes.number,
  nameLabel: PropTypes.string,
};

export default CartCard;
