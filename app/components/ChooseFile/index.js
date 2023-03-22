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
} from 'react-native';
import {images, styles} from './styles';

import appTexts from '../../lib/appTexts';
import Modal from 'react-native-modal';
import CustomButton from '../../components/CustomButton';
import NetInfo from '@react-native-community/netinfo';
import {connect} from 'react-redux';

import _ from 'lodash';
import functions from '../../lib/functions';

const ChooseFileModal = props => {
  const {isVisible, closeModal, choseFile, isAddToWishList} = props;
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Modal
      onRequestClose={() => null}
      style={styles.modalStyle}
      isVisible={isVisible}>
      <View style={styles.popupContainer}>
        {props.isloading && <Loader />}
        <View style={styles.closeContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.cancelStyle}>{appTexts.STRING.fileType}</Text>
          </View>

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

        <View style={[styles.buttonWrapper, {marginVertical: 6}]}>
          <TouchableOpacity onPress={() => choseFile('image')}>
            <CustomButton buttonText={appTexts.STRING.image} />
          </TouchableOpacity>
        </View>
        {Platform.OS == 'ios' &&
          <View
            style={[
              styles.buttonWrapper,
              {marginTop: 15, marginVertical: 0, marginBottom: 15},
            ]}>
            <TouchableOpacity onPress={() => choseFile('camera')}>
              <CustomButton buttonText={appTexts.STRING.camera} />
            </TouchableOpacity>
          </View>
        }
        <View
          style={[styles.buttonWrapper, {marginVertical: 6, marginBottom: 25}]}>
          <TouchableOpacity onPress={() => choseFile('pdf')}>
            <CustomButton buttonText={appTexts.STRING.pdf} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ChooseFileModal;
