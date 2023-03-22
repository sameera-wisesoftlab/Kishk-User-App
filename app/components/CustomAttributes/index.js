import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  Image,
  Keyboard,
  I18nManager,
  Platform,
  FlatList,
} from 'react-native';
import {images, styles} from './styles';

import appTexts from '../../lib/appTexts';
import Modal from 'react-native-modal';
import CustomButton from '../../components/CustomButton';
import NetInfo from '@react-native-community/netinfo';
import {connect} from 'react-redux';

import _ from 'lodash';
import functions from '../../lib/functions';

const CustomAttributesModal = props => {
  const {
    isVisible,
    closeModal,
    submitItem,
    variant1,
    variant2,
    setSelectedData,
    selectedData,
    simple_price,
    complex_price,
    product_type,
  } = props;

  const selectVariant = (type, item) => {
    let _selectedData = Object.assign({}, selectedData);
    if (type == 1) {
      _selectedData.attribute1 = item.attr_id;
      _selectedData.variant_id1 = item.variant_id;
      if (
        (variant2.length > 0 && _selectedData.variant_id2 != '') ||
        variant2.length == 0
      ) {
        /* To hide select variant message at bottom. */
        _selectedData.variant_selected = true;
      }
      setSelectedData(_selectedData);
      return true;
    }
    _selectedData.attribute2 = item.attr_id;
    _selectedData.variant_id2 = item.variant_id;
    if (
      (variant1.length > 0 && _selectedData.variant_id1 != '') ||
      variant1.length == 0
    ) {
      /* To hide select variant message at bottom. */
      _selectedData.variant_selected = true;
    }
    setSelectedData(_selectedData);
    return true;
  };

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

  const renderItem = (data, type) => {
    const name = data?.[0]?.name;
    if (!name) {
      return null;
    }

    return (
      <View style={styles.colo}>
        <View style={styles.text}>
          <Text style={styles.colText}>{name}</Text>
        </View>
        <View style={styles.stbox}>
          <FlatList
            contentContainerStyle={{flex: 1}}
            data={data}
            horizontal={true}
            keyExtractor={(itm, indx) => indx.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  selectVariant(type, item);
                }}>
                <View
                  style={[
                    styles.ovalBlur,
                    type == 1 &&
                      selectedData.variant_id1 == item.variant_id &&
                      styles.oval,
                    type == 2 &&
                      selectedData.variant_id2 == item.variant_id &&
                      styles.oval,
                  ]}>
                  <Text
                    style={[
                      styles.ovBText,
                      type == 1 &&
                        selectedData.variant_id1 == item.variant_id &&
                        styles.ovText,
                      type == 2 &&
                        selectedData.variant_id2 == item.variant_id &&
                        styles.ovText,
                    ]}>
                    {item.value}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  };

  const _is_selected = selectedData.variant_selected === true;
  return (
    <Modal
      onRequestClose={() => null}
      style={styles.modalStyle}
      isVisible={isVisible}
      onBackdropPress={closeModal}>
      <View style={styles.popupContainer}>
        {props.isloading && <Loader />}
        <View style={styles.closeContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.cancelStyle}>{appTexts.STRING.selectSpec}</Text>

            <View style={styles.closeContainer}>
              <TouchableOpacity
                style={styles.popupClose}
                onPress={() => {
                  closeModal();
                }}>
                <Image
                  source={require('../../assets/images/products/Card.png')}
                  style={styles.pic}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.wrapper}>
            {renderItem(variant1, 1)}
            {renderItem(variant2, 2)}
          </View>
        </View>

        <View style={styles.price}>
          {getDiscountPrice() > 0 && (
            <View style={styles.row}>
              <Text style={styles.lightSAR}>{appTexts.PRODUCT.sar} </Text>
              <Text style={styles.dark}>{getDiscountPrice()} </Text>
              {discount > 0 && (
                <View style={{marginLeft: 10, flexDirection: 'row'}}>
                  <Text style={styles.light}>{appTexts.PRODUCT.sar} </Text>
                  <Text style={styles.lights}>{price}</Text>
                </View>
              )}
            </View>
          )}
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            disabled={!_is_selected}
            onPress={() => submitItem()}>
            <CustomButton
              btnStyle={!_is_selected && {backgroundColor: 'lightgray'}}
              buttonText={appTexts.CART.submit}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomAttributesModal;
