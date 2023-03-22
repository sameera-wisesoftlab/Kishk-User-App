import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  I18nManager,
} from 'react-native';
import {images, styles} from './styles';
import globals from '../../lib/globals';
import appTexts from '../../lib/appTexts';
import Modal from 'react-native-modal';

const SortModal = props => {
  const {isSortModalVisible, closeModal, selectedSort, radioClicked} = props;

  let listData = [
    {
      id: 'popular',
      name: I18nManager.isRTL ? 'الأكثر شهرة' : 'Most Popular',
    },
    {
      id: 'new',
      name: I18nManager.isRTL ? 'الأحدث' : 'Newest',
    },
    {
      id: 'low-high',
      name: I18nManager.isRTL
        ? 'السعر من الأرخص الى الأغلى'
        : 'Price (Low to High)',
    },
    {
      id: 'high-low',
      name: I18nManager.isRTL
        ? 'السعر الأغلى الى الأرخص'
        : 'Price (High to Low)',
    },
  ];

  const renderItem = ({item, index}) => (
    <View style={styles.listItem}>
      <TouchableOpacity onPress={() => radioClicked(item.id)}>
        <View style={styles.labelView}>
          <View style={styles.discountTextContainer}>
            <Text style={styles.discountText}>{item.name}</Text>
          </View>
          <View style={styles.favIconContainer}>
            <Image
              source={
                selectedSort === item.id
                  ? require('../../assets/images/search/radio-a.png')
                  : require('../../assets/images/search/Radio.png')
              }
              style={styles.radio}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <Modal
      //animationType="fade"
      onRequestClose={() => null}
      style={styles.modalStyle}
      isVisible={isSortModalVisible}>
      <View style={styles.popupContainer}>
        <View style={styles.closeContainer}>
          <TouchableOpacity
            style={styles.popupClose}
            onPress={() => {
              closeModal();
            }}>
            <Text style={styles.popupCloseText}>{'X'}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.sortByText}>{appTexts.SORT.Heading}</Text>

        <FlatList
          style={styles.flatListStyle}
          data={listData}
          extraData={listData}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
      </View>
    </Modal>
  );
};

SortModal.propTypes = {
  closeModal: PropTypes.func,
};

export default SortModal;
