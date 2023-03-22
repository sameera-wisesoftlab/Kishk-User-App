import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  I18nManager,
  TextInput,
} from 'react-native';
import {images, styles} from './styles';

import appTexts from '../../lib/appTexts';
import Modal from 'react-native-modal';

const DetailModal = props => {
  const {isDetailModalVisible, detailCloseModal, selectedAttrs} = props;
  const [itemIndex, setItemIndex] = useState(-1);

  const lang = I18nManager.isRTL ? 'ar' : 'en';
  let arranged = {};
  let item_orders = [];
  if (selectedAttrs && selectedAttrs.length > 0) {
    selectedAttrs.map(item => {
      console.log(item);
      if (item_orders.indexOf(item.item_order) == -1) {
        item_orders.push(item.item_order);
      }
      langItem = item.attribute[0].lang.find(lng => lng.language == lang);
      const data = {
        attribute_value: item.attribute_value || 'Not added',
        name: langItem.name,
        unit: item.attribute_value
          ? item?.unit_data?.[`name_${lang}`] || ''
          : '',
      };
      if (arranged.hasOwnProperty(item.item_order)) {
        arranged[item.item_order].push(data);
      } else {
        arranged[item.item_order] = [data];
      }
    });
  }

  const initialitem = item_orders[0] || 0;
  if (itemIndex == -1 && itemIndex != initialitem && item_orders.length > 0) {
    setItemIndex(initialitem);
  }

  return (
    <Modal
      onRequestClose={() => null}
      style={styles.modalStyle}
      isVisible={isDetailModalVisible}>
      <View style={styles.popupContainer}>
        <View style={styles.closeContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.cancelStyle}>{appTexts.STRING.details}</Text>
          </View>

          <TouchableOpacity
            style={styles.popupClose}
            onPress={() => {
              detailCloseModal();
            }}>
            <Image
              source={require('../../assets/images/products/Card.png')}
              style={styles.pic}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          ListHeaderComponent={
            <>
              {item_orders.length > 1 && (
                <FlatList
                  data={item_orders}
                  keyExtractor={(item, indx) => indx.toString()}
                  renderItem={({item, index}) => (
                    <TouchableOpacity onPress={() => setItemIndex(item)}>
                      <View
                        style={[
                          item == itemIndex && {
                            borderBottomWidth: 1,
                            borderBottomColor: 'red',
                          },
                          {height: 40, flexDirection: 'row'},
                        ]}>
                        <Text style={[styles.item]}>item {index + 1}</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                  style={{
                    borderWidth: 0.5,
                    borderColor: 'lightgrey',
                    paddingLeft: 10,
                  }}
                  horizontal={true}
                />
              )}
            </>
          }
          data={arranged?.[itemIndex] || []}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            const lang = I18nManager.isRTL ? 'ar' : 'en';
            const name = item.name || '';
            const value = item?.attribute_value || '';
            const unit = item?.unit || '';

            return (
              <View style={styles.borderphoneb}>
                <Text style={styles.shold}>{name}</Text>
                <View style={styles.centi}>
                  <Text style={styles.shold}>
                    {value} {unit}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </Modal>
  );
};

DetailModal.propTypes = {
  closeModal: PropTypes.func,
};

export default DetailModal;
