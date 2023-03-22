import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  I18nManager,
  FlatList,
  ScrollView
} from 'react-native';
import { styles, images } from './styles';
import appTexts from '../../lib/appTexts';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const ColorPalette = props => {
  const { item, itemClick, variant1, variant2, setSelectedData, selectedData } =
    props;

  useEffect(() => {
    let firstVariant = null;
    let secondVariant = null;
    let selectedObject = null;
    if (variant1?.length === 0 && variant2?.length === 0) {
      selectedObject = {
        variant_id1: '',
        variant_id2: '',
        variant_selected: false,
      };
      setSelectedData(selectedObject);
    }
    // variant1?.length == 1 to select if exactly one item.
    if (
      variant1?.length > 0 &&
      // variant1?.length == 1 &&
      variant2?.length == 0
    ) {
      variant1.map((item, index) => {
        if (index === 0) {
          firstVariant = item;
        }
      });

      selectedObject = {
        attribute1: firstVariant?.attr_id,
        variant_id1: firstVariant?.variant_id,
        variant_id2: '',
        variant_selected: true,
      };

      setSelectedData(selectedObject);
    }
    // variant2?.length == 1 to select if exactly one item.
    if (
      variant1?.length > 0 &&
      variant2?.length > 0
      // && variant2?.length == 1
    ) {
      variant1.map((item, index) => {
        if (index === 0) {
          firstVariant = item;
        }
      });
      variant2.map((item, index) => {
        if (index === 0) {
          secondVariant = item;
        }
      });

      selectedObject = {
        attribute1: firstVariant?.attr_id,
        attribute2: secondVariant?.attr_id,
        variant_id1: firstVariant?.variant_id,
        variant_id2: secondVariant?.variant_id,
        variant_selected: true,
      };

      setSelectedData(selectedObject);
    }
  }, [variant1.length || variant2.length]);

  const selectVariant = (type, item) => {
    let _selectedData = Object.assign({}, selectedData);
    if (type == 1) {
      if (
        _selectedData.attribute1 == item.attr_id &&
        _selectedData.variant_id1 == item.variant_id
      ) {
        _selectedData.attribute1 = '';
        _selectedData.variant_id1 = '';
        _selectedData.variant_selected = false;
      } else {
        _selectedData.attribute1 = item.attr_id;
        _selectedData.variant_id1 = item.variant_id;
        if (
          (variant2.length > 0 && _selectedData.variant_id2 != '') ||
          variant2.length == 0
        ) {
          /* To hide select variant message at bottom. */
          _selectedData.variant_selected = true;
        }
      }
      setSelectedData(_selectedData);
      return true;
    }

    if (
      _selectedData.attribute2 == item.attr_id &&
      _selectedData.variant_id2 == item.variant_id
    ) {
      _selectedData.attribute2 = '';
      _selectedData.variant_id2 = '';
      _selectedData.variant_selected = false;
    } else {
      _selectedData.attribute2 = item.attr_id;
      _selectedData.variant_id2 = item.variant_id;
      if (
        (variant1.length > 0 && _selectedData.variant_id1 != '') ||
        variant1.length == 0
      ) {
        /* To hide select variant message at bottom. */
        _selectedData.variant_selected = true;
      }
    }
    setSelectedData(_selectedData);
    return true;
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
            contentContainerStyle={{ flex: 1, flexWrap: 'wrap' }}
            data={data}
            scrollEnabled={true}
            horizontal={true}
            keyExtractor={(itm, indx) => indx.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ marginBottom: 10, marginRight: 30 }}
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
                {/* <View style={styles.ovalBlur}>
                    <Text style={styles.ovBText}>{appTexts.PRODUCT.metal}</Text>
                  </View> */}
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      {renderItem(variant1, 1)}
      {renderItem(variant2, 2)}
    </View>
  );
};
ColorPalette.propTypes = {
  item: PropTypes.object,
};

export default ColorPalette;
