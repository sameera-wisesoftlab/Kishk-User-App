import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Linking,
  I18nManager,
} from 'react-native';

import { styles } from './styles';
import DotedDivider from '../../components/DotedDivider';
import appTexts from '../../lib/appTexts';
import { dateFormat } from '../../utility/StringUtility';
import { lang } from 'moment';

const currentLang = I18nManager.isRTL ? 'ar' : 'en';

const ActiveDeliverCard = props => {
  const { item, onOrderPress } = props;
  const {
    ord_id,
    order_status,
    order_status_label,
    created_at,
    time_slot,
    delivery_schedule_date,
    product_image,
    driver,
    phone,
    country_code,
    item_status,
    sub_order_status,
  } = item;

  const isDeliver = () => order_status === 9;
  const isReadyForDelivery = () => sub_order_status === 1;
  const isCancelled = order_status === 8;

  const getStyle = () => {
    return item?.color || 'black';
  };

  const getProductTitle = () => {
    const productData = item?.product;
    if (productData) {
      const langData = productData.lang;
      return langData.find(i => i.language === currentLang).name;
    }
    return null;
  };

  return (
    <TouchableOpacity
      onPress={() => {
        onOrderPress();
      }}>
      <View>
        <View style={styles.fullWidthRowContainer}>
          <View style={styles.topView}>
            <Text style={styles.orderKishk}>
              {appTexts.ACTIVE_DELIVER.orderkishk} {ord_id}
            </Text>
            {isDeliver() ? null : (
              <View style={styles.readyView}>
                <View style={styles.defaultWrapper}>
                  <Text style={[styles.orderStatus, { color: getStyle() }]}>
                    {order_status_label}
                  </Text>
                </View>
              </View>
            )}
          </View>
          <View style={styles.placed}>
            <Text style={styles.placedabc}>
              {appTexts.ACTIVE_DELIVER.placed} {dateFormat(created_at)}
            </Text>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.imageContainer}>
              <Image
                resizeMode="contain"
                source={{ uri: product_image }}
                style={styles.imageabc}
              />
            </View>

            <View style={styles.labelContainer}>
              <View style={styles.textContainerEdit}>
                <Text style={styles.itemNameText}>{getProductTitle()}</Text>
              </View>

              {!isCancelled && (
                <View style={styles.priceNumView}>
                  <View style={styles.PriceView}>
                    <Text style={styles.itemNameEdit}>
                      {isDeliver()
                        ? appTexts.ACTIVE_DELIVER.deliveredon
                        : appTexts.ACTIVE_DELIVER.expected}
                    </Text>
                  </View>

                  <View style={styles.countSelectView}>
                    <Text style={styles.date}>
                      {isDeliver()
                        ? dateFormat(delivery_schedule_date)
                        : dateFormat(delivery_schedule_date)}
                      {', '}
                      {time_slot}
                    </Text>
                  </View>
                </View>
              )}
            </View>
          </View>
          {isDeliver() ? (
            <View style={styles.doted}>
              <DotedDivider />
            </View>
          ) : null}
          {isDeliver() && (
            <View style={styles.addtoViewdeliver}>
              <View style={styles.PriceView}>
                <View>
                  <Image
                    source={require('../../assets/images/products/Rate.png')}
                    style={styles.binStyle}
                  />
                </View>

                <View style={styles.favIconContainer}>
                  <Text style={styles.itemNamereview}>
                    {appTexts.ACTIVE_DELIVER.review}
                  </Text>
                </View>
              </View>
            </View>
          )}
          {isReadyForDelivery() && (
            <View style={styles.addtoView}>
              <View style={styles.PriceView}>
                <Text style={styles.itemNameWish}>
                  {appTexts.ACTIVE_DELIVER.delivery}
                </Text>

                <View style={styles.favIconContainer}>
                  <Text style={styles.itemNamecall}>{driver || ''}</Text>
                </View>
              </View>

              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    `tel:${country_code ? country_code : ''}${phone}`,
                  )
                }>
                <View style={styles.PriceViewcall}>
                  <View style={styles.deleteIconContainer}>
                    <Image
                      source={require('../../assets/images/products/Call.png')}
                      style={styles.binStyle}
                    />
                  </View>

                  <Text style={styles.itemNamecall}>
                    {appTexts.ACTIVE_DELIVER.call}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

ActiveDeliverCard.propTypes = {
  itemImage: PropTypes.number,
  nameLabel: PropTypes.string,
};

export default ActiveDeliverCard;
