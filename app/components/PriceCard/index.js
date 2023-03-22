import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity, I18nManager } from 'react-native';
import { styles } from './styles';
import DotedDivider from '../DotedDivider';
import appTexts from '../../lib/appTexts';

const PriceCard = props => {
  const { isOrderDetails, isOrder, cartData, codfees } = props;

  let sub_total = cartData?.cartDetails?.sub_total;
  let grant_total = cartData?.cartDetails?.grant_total;
  let final_total = (codfees > 0 ? parseFloat(grant_total) + parseFloat(codfees) : 0);
  let delivery_charge = cartData?.cartDetails?.delivery_charge;
  let vat = cartData?.cartDetails?.vat || 0;
  let vat_amount = cartData?.cartDetails?.vat_amount || 0;
  let service_charge = cartData?.cartDetails?.service_charge;
  let service_charge_type = cartData?.cartDetails?.service_charge_type;
  let cod_fee = cartData?.cartDetails?.cod_fee;
  let coupon_code = cartData?.cartDetails?.coupon_code || '';
  let coupon_amount = cartData?.cartDetails?.coupon_amount || 0;

  if (grant_total) {
    try {
      grant_total = parseFloat(grant_total).toFixed(2);
    } catch (err) { }
  }
  if (final_total) {
    try {
      final_total = parseFloat(final_total).toFixed(2);
    } catch (err) { }
  }
  if (delivery_charge) {
    try {
      delivery_charge = parseFloat(delivery_charge).toFixed(2);
    } catch (err) { }
  }

  if (service_charge) {
    try {
      service_charge = parseFloat(service_charge).toFixed(2);
    } catch (err) { }
  }
  if (cod_fee) {
    try {
      cod_fee = parseFloat(cod_fee).toFixed(2);
    } catch (err) { }
  }
  if (vat_amount) {
    try {
      vat_amount = parseFloat(vat_amount).toFixed(2);
    } catch (err) { }
  }
  if (coupon_amount) {
    try {
      coupon_amount = parseFloat(coupon_amount).toFixed(2);
    } catch (err) { }
  }
  let item_count = cartData?.cartDetails?.item_count;
  if (cartData?.cartDetails?.order_items) {
    item_count = cartData?.cartDetails?.order_items?.length;
  }
  if (!item_count || item_count == 0) {
    /** When cart all items removed, service charge exists. So clear all */
    grant_total = 0;
    delivery_charge = 0;
    vat = 0;
    sub_total = 0;
    service_charge = 0;
    coupon_code = '';
    coupon_amount = 0;
    vat_amount = 0;
  }

  if (item_count == 0) {
    return null;
  }

  return (
    <View
      style={
        isOrderDetails ? styles.fullContainer : styles.fullWidthRowContainer
      }>
      <View style={styles.formwrapper}>
        <Text style={styles.TextView}>{appTexts.CART.subtotal}</Text>
        <View style={styles.wrapper}>
          <View style={styles.pricelight}>
            <Text style={styles.TextViewLight}>{appTexts.CART.price}</Text>
          </View>
          <Text style={styles.TextView}>
            {I18nManager.isRTL ? ' ' : ''}
            {sub_total}
          </Text>
        </View>
      </View>
      {delivery_charge > 0 && <View style={styles.deliverywrap}>
        <Text style={styles.TextViewLight}>{appTexts.CART.deliveryCh}</Text>
        <View style={styles.wrapper}>
          <View style={{ right: 3, top: 1 }}>
            <Text style={styles.TextViewLight}>
              {appTexts.CART.price}
              {I18nManager.isRTL ? ' ' : ''}
            </Text>
          </View>
          <Text style={styles.TextView}>
            {delivery_charge}
            {I18nManager.isRTL ? ' ' : ''}
          </Text>
        </View>
      </View>}
      {service_charge > 0 && <View style={styles.deliverywrap}>
        <Text style={styles.TextViewLight}>{appTexts.CART.serviceCh}</Text>
        <View style={styles.wrapper}>
          <View style={{ right: 3, top: 1 }}>
            {service_charge_type === 'amount' && (
              <Text style={styles.TextViewLight}>
                {appTexts.CART.price}
                {I18nManager.isRTL ? ' ' : ''}
              </Text>
            )}
            {/* {service_charge_type !== 'amount' && (
              <Text style={styles.TextViewLight}>
                {I18nManager.isRTL ? ' ' : ''}
                {'%'}
              </Text>
            )} */}
          </View>
          <Text style={styles.TextView}>
            {I18nManager.isRTL ? ' ' : ''}
            {service_charge} {service_charge_type === 'amount' ? null : '%'}
          </Text>
          {/* <View style={{right: 3, top: 1}}>
            {service_charge_type !== 'amount' && (
              <Text style={styles.TextViewLight}> {'%'}</Text>
            )}
          </View> */}
        </View>
      </View>}
      {cod_fee > 0 && (
        <View style={styles.deliverywrap}>
          <Text style={styles.TextViewLight}>{appTexts.CART.cod_fee}</Text>
          <View style={styles.wrapper}>
            <View style={{ right: 3, top: 1 }}>
              <Text style={styles.TextViewLight}>{appTexts.CART.price}</Text>
            </View>
            <Text style={styles.TextView}>{cod_fee}</Text>
          </View>
        </View>
      )}
      {codfees > 0 && (
        <View style={styles.deliverywrap}>
          <Text style={styles.TextViewLight}>{appTexts.CART.cod_fee}</Text>
          <View style={styles.wrapper}>
            <View style={{ right: 3, top: 1 }}>
              <Text style={styles.TextViewLight}>{appTexts.CART.price}</Text>
            </View>
            <Text style={styles.TextView}>{codfees}</Text>
          </View>
        </View>
      )}

      {coupon_code != '' && (
        <View style={styles.deliverywrap}>
          <View>
            <Text style={styles.TextViewLight}>{appTexts.STRING.promocode}</Text>
            <Text style={styles.couponcode}>({coupon_code})</Text>
          </View>
          <View style={styles.wrapper}>
            <View style={{ right: 3, top: 1 }}>
              <Text style={styles.TextViewLight}>{appTexts.CART.price}</Text>
            </View>
            <Text style={styles.TextView}>{coupon_amount}</Text>
          </View>
        </View>
      )}

      {vat_amount > 0 && <View style={styles.deliverywrap}>
        <Text style={styles.TextViewLight}>{appTexts.CART.vat}({I18nManager.isRTL ? '%' : ''}{vat}{!I18nManager.isRTL ? '%' : ''})</Text>
        <View style={styles.wrapper}>
          <Text style={styles.TextViewLight}> {appTexts.CART.price}</Text>
          <Text style={styles.TextView}> {vat_amount}</Text>
        </View>
      </View>}

      <DotedDivider />

      <View style={styles.deliverywrap}>
        <Text style={styles.TextView}>{appTexts.CART.total}</Text>
        <View style={styles.wrapper}>
          <Text style={styles.TextView}> {appTexts.CART.price}</Text>
          <Text style={styles.TextView}> {codfees > 0 ? final_total : grant_total}</Text>
        </View>
      </View>

      {isOrder ? null : (
        <View style={styles.deliverywrap1}>
          <Text style={styles.TextViewLightText}>
            {appTexts.CART.inclusive}
          </Text>
        </View>
      )}
    </View>
  );
};
PriceCard.propTypes = {
  nameLabel: PropTypes.string,
};

export default PriceCard;
