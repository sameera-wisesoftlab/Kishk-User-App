import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  I18nManager,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { images, styles } from './styles';

import appTexts from '../../lib/appTexts';
import Modal from 'react-native-modal';

import TimeCard from '../TimeCard';
import Dropdown from '../Dropdown/Dropdown';

import EditMeasureTab from '../EditMeasureTab';
import CartButton from '../../components/CartButton';
// import FastImage from 'react-native-fast-image';
import FastImageLoader from '../../components/FastImage/FastImage';
import { uniq } from 'lodash';

const EditModal = props => {
  const {
    isEditModalVisible,
    closeModal,
    data,
    onSubmitData,
    custom_image,
    page,
    editItemsCount,
    isAddCustomAttr,
    isRemoveCustomItem,
    removeAttr,
  } = props;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(-1);
  const [dataEntered, setDataEntered] = useState({});
  const [isIntitalSetupFinished, setIsIntitalSetupFinished] = useState(false);

  let dataPoints = [];
  let processed = [];
  for (let incr = 0; incr < data.length; incr++) {
    const _item = data[incr];
    if (processed.indexOf(_item.attribute_id) == -1) {
      processed.push(_item.attribute_id);
      dataPoints.push(_item);
    }
  }

  const item_orders = data.map(itm => {
    return itm.item_order || false;
  });
  const unique = item_orders.filter(
    (v, i, a) => a.indexOf(v) === i && v !== false,
  );
  let max = 0;
  if (unique.length > 0) {
    max = Math.max(...unique);
  }

  if (isIntitalSetupFinished === false) {
    let all_cart_data = {};
    setIsIntitalSetupFinished(true);
    for (var itemCount = 0; itemCount < editItemsCount; itemCount++) {
      const checkValue = unique?.[itemCount] || -1;
      const found = false;
      for (let incr = 0; incr < data.length; incr++) {
        const item = data[incr];
        if (item.item_order == checkValue) {
          found = true;
          const attData = {
            attribute_id: item?.attribute_id,
            attribute_value:
              isAddCustomAttr === true ? '' : item?.attribute_value,
            label: item?.attribute_id,
            value: isAddCustomAttr === true ? '' : item?.attribute_value,
            is_mandatory: item?.attribute?.[0]?.is_mandatory || 'no',
          };

          if (all_cart_data.hasOwnProperty(item.item_order)) {
            all_cart_data[item.item_order][item?.attribute_id] = attData;
          } else {
            const attId = item?.attribute_id;
            all_cart_data[item.item_order] = {};
            all_cart_data[item.item_order][attId] = attData;
          }
        }
      }
      if (found === false) {
        max = max + 1;
        const item_indx = max;
        for (let incr2 = 0; incr2 < dataPoints.length; incr2++) {
          const _itm = dataPoints[incr2];
          const _attData = {
            attribute_id: _itm?.attribute_id,
            attribute_value: '',
            label: _itm?.attribute_id,
            value: '',
            is_mandatory: _itm?.attribute?.[0]?.is_mandatory || 'no',
          };
          if (all_cart_data.hasOwnProperty(item_indx)) {
            all_cart_data[item_indx][_itm?.attribute_id] = _attData;
          } else {
            const _attId = _itm?.attribute_id;
            all_cart_data[item_indx] = {};
            all_cart_data[item_indx][_attId] = _attData;
          }
        }
      }
    }

    if (Object.keys(all_cart_data).length > 0) {
      setDataEntered(all_cart_data);
    }

    const initialValue = unique?.[0] || 1;
    if (initialValue !== -1 && itemIndex != initialValue) {
      setItemIndex(initialValue);
    }
  }

  const onTabChange = index => {
    if (tabIndex !== index) {
      setTabIndex(index);
    }
  };

  const dataEnter = (id, value, itemIndx, is_mandatory) => {
    let _data = Object.assign({}, dataEntered);
    if (value && _data[itemIndx].hasOwnProperty(id) !== -1) {
      _data[itemIndx][id] = {
        id: id,
        attribute_id: id,
        attribute_value: value,
        value: value,
        is_mandatory: is_mandatory,
      };
    } else if (value && _data[itemIndx].hasOwnProperty(id) === -1) {
      _data[itemIndx][id].attribute_value = value;
      _data[itemIndx][id].value = value;
    }
    if (!value && _data[itemIndx].hasOwnProperty(id) !== -1) {
      // delete _data[itemIndx][id];
      _data[itemIndx][id].attribute_value = '';
      _data[itemIndx][id].value = '';
    }

    setDataEntered(_data);
  };

  const lang = I18nManager.isRTL ? 'ar' : 'en';

  const getDropdownItems = variant_data => {
    const variant = variant_data.filter(item => item.language == lang);
    let final = [];
    variant.map(item => {
      final.push({
        id: item.attribute_id,
        label: item.name,
        value: item.name,
      });
    });

    return final;
  };

  const renderItem = ({ item, index }) => {
    if (item == null) {
      return null;
    }
    // const name = item?.['attribute_name_' + lang] || '';

    const type = item.attribute_type;
    const id = item.attribute_id;
    const variant_data = item?.variant_data || [];

    const langItems = item?.attribute?.[0]?.lang || [];
    const lang = I18nManager.isRTL ? 'ar' : 'en';
    const unit = item.unit_data?.['name_' + lang] || '';
    const cLang = langItems.find(itm => itm.language == lang);
    const name = cLang?.name;

    const is_mandatory = dataEntered?.[itemIndex]?.[id]?.is_mandatory;

    console.log(itemIndex, dataEntered);

    return (
      <View style={styles.borderphoneb}>
        <View style={styles.phoneNo}>
          <Text style={styles.phoneStyle}>
            {name}
            {unit != '' ? ` (${unit})` : ''}
            {is_mandatory == 'yes' && <Text style={{ color: 'red' }}>*</Text>}
          </Text>
        </View>

        <View style={styles.phoneSectionb}>
          <View style={styles.secondSection1}>
            {type == 'dropdown' ? (
              <Dropdown
                onSubmit={item =>
                  dataEnter(item.id, item.value, itemIndex, is_mandatory)
                }
                data={getDropdownItems(variant_data)}
                selectedItemValue={dataEntered?.[itemIndex]?.[id] || {}}
              />
            ) : (
                <TextInput
                  multiline={type == 'textarea' ? true : false}
                  numberOfLines={type == 'textarea' ? 4 : 1}
                  style={[
                    styles.disableText,
                    {
                      paddingTop: 0,
                      paddingBottom: 5,
                      height: 36,
                      paddingLeft: 10,
                    },
                    type == 'textarea' && {
                      height: 30,
                      justifyContent: 'flex-start',
                    },
                    isSubmitted == true &&
                    is_mandatory == 'yes' &&
                    !dataEntered?.[itemIndex]?.[id]?.attribute_value && {
                      borderBottomWidth: 1,
                      borderBottomColor: 'red',
                    },
                  ]}
                  placeholderTextColor="#242424"
                  keyboardType="number-pad"
                  onChangeText={txt =>
                    dataEnter(id, txt, itemIndex, is_mandatory)
                  }
                  value={
                    dataEntered?.[itemIndex]?.[id]?.attribute_value
                      ? dataEntered?.[itemIndex]?.[id]?.attribute_value.toString()
                      : ''
                  }
                />
              )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <Modal
      onRequestClose={() => null}
      style={styles.modalStyle}
      isVisible={isEditModalVisible}>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'position' : null}>
        <View style={styles.popupContainer}>
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

          <EditMeasureTab
            tabIndex={tabIndex}
            firstTabText={appTexts.CART.enterdetails}
            secondTabText={appTexts.CART.howto}
            onTabChange={onTabChange}
            custom_image={custom_image}
          />

          {page != 'product' &&
            Object.keys(dataEntered).length > 1 &&
            tabIndex == 0 && (
              <FlatList
                data={Object.keys(dataEntered)}
                keyExtractor={(item, indx) => indx.toString()}
                renderItem={({ item, index }) => (
                  <TouchableOpacity onPress={() => setItemIndex(item)}>
                    <View
                      style={[
                        item == itemIndex && {
                          borderBottomWidth: 1,
                          borderBottomColor: 'red',
                        },
                        { height: 40, flexDirection: 'row' },
                      ]}>
                      <Text style={[styles.item]}>{appTexts.SEARCH.item} {index + 1}</Text>
                      {isRemoveCustomItem && (
                        <TouchableOpacity
                          style={{
                            backgroundColor: 'red',
                            height: 20,
                            alignSelf: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 20,
                            borderRadius: 25,
                          }}
                          onPress={() => removeAttr(item)}>
                          <Text
                            style={{
                              color: '#fff',
                              fontSize: 16,
                              fontWeight: '600',
                              textAlign: 'center',
                            }}>
                            X
                          </Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </TouchableOpacity>
                )}
                style={{
                  borderWidth: 0.5,
                  borderColor: 'lightgrey',
                  paddingLeft: 10,
                  flexDirection: 'column'
                }}
                horizontal={true}
              />
            )}

          {tabIndex === 0 && (
            <View style={styles.shoulderView}>
              <FlatList
                data={dataPoints}
                keyExtractor={(item, indx) => indx.toString()}
                renderItem={renderItem}
              />
            </View>
          )}

          {tabIndex === 1 && (
            <View style={styles.ImageCon}>
              {custom_image != null && (
                <FastImageLoader
                  resizeMode={'cover'}
                  photoURL={custom_image}
                  style={styles.logo}
                  loaderStyle={{}}
                />
              )}
            </View>
          )}

          {!isRemoveCustomItem && (
            <CartButton
              submitCustomEdit={() => {
                setIsSubmitted(true);
                let valid = true;
                for (key in dataEntered) {
                  for (
                    var incr = 0;
                    incr < Object.keys(dataEntered[key]).length;
                    incr++
                  ) {
                    const _data =
                      dataEntered[key][Object.keys(dataEntered[key])[incr]];
                    if (!_data.attribute_value && _data.is_mandatory == 'yes') {
                      valid = false;
                    }
                  }
                }
                if (valid == false) {
                  return false;
                }

                onSubmitData(dataEntered, isAddCustomAttr);
              }}
              resetCustomEdit={() => {
                setIsIntitalSetupFinished(false);
              }}
            />
          )}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

EditModal.propTypes = {
  closeModal: PropTypes.func,
};

export default EditModal;
