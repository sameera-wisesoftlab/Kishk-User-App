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
} from 'react-native';
import { images, styles } from './styles';

import appTexts from '../../lib/appTexts';
import Modal from 'react-native-modal';
import globals from '../../lib/globals';
import TimeCard from '../TimeCard';
import CartCard from '../CartCard';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomButton from '../../components/CustomButton';

const RatingModal = props => {
  const { isRatingModalVisible, RatingcloseModal, isSupport, onradioClicked } =
    props;

  const [selectedRating, setSelectedRating] = useState(null);

  const radioClicked = val => {
    setSelectedRating(val);
    onradioClicked(val);
  };

  const ratingData = [1, 2, 3, 4];

  return (
    <Modal
      //animationType="fade"
      onRequestClose={() => null}
      style={styles.modalStyle}
      isVisible={isRatingModalVisible}>
      <View style={styles.popupContainer}>
        <View style={styles.closeContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.cancelStyle}>{appTexts.STRING.details}</Text>
          </View>

          <TouchableOpacity
            style={{ minWidth: 100, backgroundColor: 'red', padding: '1%' }}
            onPress={() => {
              radioClicked(null);
            }}>
            <Text style={[styles.shold, { color: '#fff', textAlign: 'center' }]}>
              {appTexts.CART.reset}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.popupClose}
            onPress={() => {
              RatingcloseModal();
            }}>
            <Image
              source={require('../../assets/images/products/Card.png')}
              style={styles.pic}
            />
          </TouchableOpacity>
        </View>

        {ratingData.map(rItem => (
          <TouchableOpacity
            key={`r_${rItem}`}
            onPress={() => radioClicked(rItem)}>
            <View style={styles.borderphoneb}>
              <View style={styles.starRow}>
                <Text style={styles.shold}>{rItem}</Text>
                <Image source={images.star} style={styles.varrow}></Image>
                <Text style={styles.shold}>{appTexts.STRING.and}</Text>
              </View>
              <View style={styles.centi}>
                <View style={styles.arrowv}>
                  <Image
                    source={
                      selectedRating === rItem
                        ? images.varrowred
                        : images.varrowgrey
                    }
                    style={styles.varrow}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
  );
};

RatingModal.propTypes = {
  closeModal: PropTypes.func,
};

export default RatingModal;
