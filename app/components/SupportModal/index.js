import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  BackHandler,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  FlatList,
  I18nManager,
  TextInput,
  Platform,
} from 'react-native';
import { images, styles } from './styles';

import appTexts from '../../lib/appTexts';
import Modal from 'react-native-modal';
import globals from '../../lib/globals';
import TimeCard from '../TimeCard';
import CartCard from '../CartCard';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomButton from '../../components/CustomButton';
import NetInfo from '@react-native-community/netinfo';
import { connect } from 'react-redux';

import * as supportActions from '../../actions/supportActions';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import functions from '../../lib/functions';
import Loader from '../../components/Loader';

const SupportModal = props => {
  const { isSupportModalVisible, openSupportModal, supportCloseModal } = props;

  const [isSelected, setIsSelected] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [subjecterrorflag, setsubjecterrorflag] = useState(false);
  const [messageerrorflag, setmessageerrorflag] = useState(false);

  const validatesubject = flag => {
    setsubjecterrorflag(flag);
  };

  const validatemessage = flag => {
    setmessageerrorflag(flag);
  };

  useEffect(() => handleComponentMounted(), []);
  const handleComponentMounted = () => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        props.resetSuccessMessage();
        // supportCloseModal();
      } else {
        functions.displayAlert(
          null,
          globals.ALERT_MESSAGES.noInternet,
          'Support',
        );
      }
    });
    BackHandler.addEventListener(
      'hardwareBackPress',
      (backPressed = () => {
        props.navigation.goBack();
        return true;
      }),
    );
  };

  useEffect(() => handleComponentUpdated());
  const handleComponentUpdated = () => {
    if (props.sendRequestSuccess.success) {
      functions.displayToast(
        'success',
        'top',
        appTexts.ALERT_MESSAGES.success,
        _.get(props, 'sendRequestSuccess.msg', ''),
      );
      props.resetSuccessMessage({});
      setSubject('');
      setMessage('');
    }
  };

  const onChatPress = () => {
    if (subject.trim() === '') {
      validatesubject(true);
    } else if (message.trim() == '') {
      validatemessage(true);
    } else {
      supportCloseModal();
      Keyboard.dismiss();
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          let apiParam = {
            subject: subject.trim(),
            message: message.trim(),
          };
          props.supportRequest(apiParam, props.token);
        } else {
          functions.displayToast(
            'error',
            'top',
            appTexts.VALIDATION_MESSAGE.Type,
            appTexts.VALIDATION_MESSAGE.Mobile_error_msg,
          );
        }
      });
    }
  };

  return (
    <Modal
      //animationType="fade"
      onRequestClose={() => null}
      style={styles.modalStyle}
      isVisible={isSupportModalVisible}>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'position' : null}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View style={styles.popupContainer}>
            {props.isloading && <Loader />}
            <View style={styles.closeContainer}>
              <View style={styles.modalHeader}>
                <Text style={styles.cancelStyle}>{appTexts.STRING.help}</Text>
              </View>

              <TouchableOpacity
                style={styles.popupClose}
                onPress={() => {
                  supportCloseModal();
                }}>
                <Image
                  source={require('../../assets/images/products/Card.png')}
                  style={styles.pic}
                />
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.borderphoneb,
                subjecterrorflag && { borderColor: 'red', borderWidth: 1 },
              ]}>
              <View style={styles.phoneNoab}>
                <Text style={styles.phoneStyle}>{appTexts.STRING.subject}</Text>
              </View>
              <View style={styles.phoneSectionb}>
                <View style={[styles.subjectSection1]}>
                  <TextInput
                    style={[
                      styles.disableText,
                      {
                        paddingTop: 0,
                        paddingBottom: 0,
                        flexShrink: 1,
                      },
                    ]}
                    placeholderTextColor="#242424"
                    keyboardType="name-phone-pad"
                    autoFocus={false}
                    value={subject}
                    onChangeText={val => {
                      setSubject(val);
                      validatesubject(false);
                    }}
                  />
                </View>
              </View>
            </View>

            <View style={styles.borderphonebc}>
              <View style={styles.phoneNo}>
                <Text style={styles.phoneStyle}>{appTexts.CANCEL.message}</Text>
              </View>
              <View style={styles.phoneSectionbc}>
                <View
                  style={[
                    styles.boxeserror, messageerrorflag && { borderColor: 'red', borderWidth: 1 },]
                  }>
                  <TextInput
                    multiline={true}

                    style={[
                      styles.disableText,

                      {
                        //  height: 28,
                        paddingTop: 0,
                        paddingBottom: 0,
                        flexShrink: 1,
                        marginLeft: '6%',
                        width: '94%',
                        height: 70,
                        marginTop: Platform.OS === 'ios' ? 28 : null
                      },
                    ]}
                    placeholderTextColor="#242424"
                    keyboardType="name-phone-pad"
                    autoFocus={false}
                    value={message}
                    onChangeText={val => {
                      validatemessage(false);
                      setMessage(val);
                    }}
                  />
                </View>
              </View>
            </View>

            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                onPress={() => {
                  onChatPress();
                }}>
                <CustomButton buttonText={appTexts.CANCEL.send} isSend={true} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const mapStateToProps = (state, props) => {
  return {
    // token: _.get(state, "loginReducer.otpAPIResponse.data.access_token", ""),
    token: _.get(state, 'loginReducer.userData.data.access_token', null),
    isloading: _.get(state, 'supportChatReducer.isLoading', ''),
    sendRequestSuccess: _.get(
      state,
      'supportChatReducer.supportchatsendsuccessmsg',
      '',
    ),
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      resetSuccessMessage: supportActions.resetSuccess,
      supportRequest: supportActions.supportRequestSend,
    },
    dispatch,
  );
};

const SupportModalWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SupportModal);

SupportModalWithRedux.navigationOptions = ({ navigation }) => ({
  header: null,
});

export default SupportModalWithRedux;
