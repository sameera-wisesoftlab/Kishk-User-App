import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import {images, styles} from './styles';
import Modal from 'react-native-modal';
import Rateitem from '../Rateitem';

import appTexts from '../../lib/appTexts';
import CustomButton from '../CustomButton';
import Loader from '../../components/Loader';

const RateitemModal = props => {
  const {
    isRateModalVisible,
    ratecloseModal,
    onSubmitReview,
    prodReviewExecuting,
  } = props;
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [messageErrorflag, setmessageErrorflag] = useState(false);

  const resetData = () => {
    setRating(0);
    setMessage('');
  };

  const onSubmitReviews = () => {
    if (message) {
      Keyboard.dismiss();
      setmessageErrorflag(false);
      onSubmitReview({review: message, rating});
      resetData();
    } else {
      setmessageErrorflag(true);
    }
  };

  return (
    <Modal
      //animationType="fade"
      onRequestClose={() => null}
      style={styles.modalStyle}
      isVisible={isRateModalVisible}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : null}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View style={styles.popupContainer}>
            {prodReviewExecuting && <Loader />}
            <View style={styles.closeContainer}>
              <TouchableOpacity
                style={styles.popupClose}
                onPress={() => {
                  ratecloseModal();
                }}>
                <Image
                  source={require('../../assets/images/products/Card.png')}
                  style={styles.pic}
                />
              </TouchableOpacity>
            </View>
            <View style={{marginHorizontal: '6%'}}>
              <View>
                <Text style={styles.fontView}>{appTexts.ORDER.Rateitem}</Text>
              </View>
              <View style={styles.ratingWrapper}>
                <Rateitem
                  rating={rating}
                  onRatingPress={val => setRating(val)}
                />
              </View>
              <View style={styles.outsideWrapper}>
                <View
                  style={[
                    styles.boxView,
                    messageErrorflag && {borderColor: 'red'},
                  ]}>
                  <View style={styles.textView}>
                    <Text style={styles.msgText}>{appTexts.ORDER.Message}</Text>
                  </View>
                  <TextInput
                    value={message}
                    style={styles.inputMessages}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#808080"
                    autoCapitalize="none"
                    multiline={true}
                    onChangeText={val => {
                      setmessageErrorflag(false);
                      setMessage(val);
                    }}
                  />
                </View>
                <TouchableOpacity
                  disabled={prodReviewExecuting || !rating}
                  onPress={onSubmitReviews}>
                  <View style={styles.buttonWrapper}>
                    <CustomButton
                      buttonText={appTexts.ORDER.send}
                      btnStyle={
                        !rating && {backgroundColor: 'rgba(255, 0, 0, 0.3)'}
                      }
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  );
};

RateitemModal.propTypes = {
  ratecloseModal: PropTypes.func,
};

export default RateitemModal;
