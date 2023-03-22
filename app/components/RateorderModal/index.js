import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  I18nManager,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import {styles} from './styles';
import Modal from 'react-native-modal';
import appTexts from '../../lib/appTexts';
import Rateorder from '../Rateorder';
import CustomButton from '../CustomButton';
import Loader from '../../components/Loader';

const currentLng = I18nManager.isRTL ? 'ar' : 'en';

const RateorderModal = props => {
  const {
    isRateOrderModalVisible,
    closeratrorderModal,
    onSubmitOrderReview,
    reviewExecuting,
    ratingSegments = [],
  } = props;

  const [userRating, setUserRating] = useState([]);
  const [message, setMessage] = useState('');
  const [messageErrorflag, setmessageErrorflag] = useState(false);

  const resetRatingData = () => {
    const data = ratingSegments.map(i => {
      return {segment: i.id, rating: 0};
    });
    setUserRating(data);
  };

  useEffect(() => {
    if (ratingSegments && ratingSegments.length > 0) {
      resetRatingData();
    }
  }, [ratingSegments]);

  const updateRating = (rateVal, segmentId) => {
    let newUserRating = [...userRating];
    const index = userRating.findIndex(r => r.segment === segmentId);
    const oldval = userRating[index];
    const newVal = {...oldval, rating: rateVal};
    newUserRating[index] = newVal;
    setUserRating(newUserRating);
  };

  const resetData = () => {
    resetRatingData();
    setMessage('');
    setmessageErrorflag(false);
  };

  const onSubmitReviews = () => {
    if (message) {
      Keyboard.dismiss();
      setmessageErrorflag(false);
      onSubmitOrderReview({review: userRating, message});
      resetData();
    } else {
      setmessageErrorflag(true);
    }
  };

  const renderRatingSegments = () => {
    return ratingSegments.map(segment => {
      const langData = segment.lang;
      const langItem = langData.find(i => i.language === currentLng);

      return (
        <View key={`s_${segment.id}`} style={styles.ratingWrapper}>
          <Text style={styles.rateText}>{langItem?.name || ''}</Text>
          <Rateorder
            rating={userRating?.find(i => i.segment === segment.id)?.rating}
            onRatingPress={val => updateRating(val, segment.id)}
          />
        </View>
      );
    });
  };

  return (
    <Modal
      //animationType="fade"
      onRequestClose={() => null}
      style={styles.modalStyle}
      isVisible={isRateOrderModalVisible}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : null}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View style={styles.popupContainer}>
            {reviewExecuting && <Loader />}
            <View style={styles.closeContainer}>
              <TouchableOpacity
                style={styles.popupClose}
                onPress={() => {
                  closeratrorderModal();
                }}>
                <Image
                  source={require('../../assets/images/products/Card.png')}
                  style={styles.pic}
                />
              </TouchableOpacity>
            </View>

            <View style={{marginHorizontal: '6%'}}>
              <View style={styles.ratetextBox}>
                <Text style={styles.fontView}>{appTexts.ORDER.Rateorder}</Text>
              </View>
              {renderRatingSegments()}
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
                    style={[styles.inputMessages]}
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
                  disabled={reviewExecuting}
                  onPress={onSubmitReviews}>
                  <View style={styles.buttonWrapper}>
                    <CustomButton buttonText={appTexts.ORDER.send} />
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

RateorderModal.propTypes = {
  closeModal: PropTypes.func,
};

export default RateorderModal;
