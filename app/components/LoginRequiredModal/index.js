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

const LoginRequiredModal = props => {
  const {isVisible, closeModal, loginpage, isAddToWishList} = props;
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
            <Text style={styles.cancelStyle}>
              {appTexts.STRING.loginRequired}
            </Text>
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
        <View style={styles.borderphoneb}>
          <View style={styles.phoneNoab}>
            <Text style={styles.phoneStyle}>
              {isAddToWishList
                ? appTexts.STRING.loginToAddToWishList
                : appTexts.STRING.loginToAddToCart}
            </Text>
          </View>
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={() => loginpage()}>
            <CustomButton buttonText={appTexts.Login.Heading} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LoginRequiredModal;
