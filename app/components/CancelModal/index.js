import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  I18nManager,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Picker,
} from 'react-native';
import {styles} from './styles';
import appTexts from '../../lib/appTexts';
import Modal from 'react-native-modal';
import globals from '../../lib/globals';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomButton from '../../components/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {cancelOrder, getCancellationReasons} from '../../actions';
import Loader from '../../components/Loader';
import Dropdown from '../../components/Dropdown/Dropdown';

const CancelModal = props => {
  const {isCancelModalVisible, cancelCloseModal, isSupport, orderId} = props;
  const [message, setMessage] = useState('');
  const [reason, setReason] = useState(0);
  const [selectedReasonTxt, setSelectedReasonTxt] = useState('');
  const [showTextInput, setShowTextInput] = useState(true);
  const [reasonError, setReasonError] = useState(false);
  const [reasonList, setReasonList] = useState([]);

  const dispatch = useDispatch();
  const {cancelExecuting} = useSelector(state => state.order);

  useEffect(() => {
    if (isCancelModalVisible && reasonList && reasonList.length === 0) {
      dispatch(
        getCancellationReasons(
          res => {
            const resData = res?.data;
            if (resData) {
              const reasonData = resData.map(reason => {
                const container = {
                  value: reason.id,
                  label: reason.lang[I18nManager.isRTL ? 'ar' : 'en'].name,
                };

                return container;
              });

              setReasonList(reasonData);
            }
          },
          err => {},
        ),
      );
    }
  }, [isCancelModalVisible, reasonList]);

  const onPressBtn = () => {
    Keyboard.dismiss();
    if (reason) {
      setReasonError(false);
      dispatch(
        cancelOrder({order_id: orderId, reason_id: reason, comment: message}),
      );
    } else {
      setReasonError(true);
    }
  };

  return (
    <Modal
      //animationType="fade"
      onRequestClose={() => null}
      style={styles.modalStyle}
      isVisible={isCancelModalVisible}>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'position' : null}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View style={styles.popupContainer}>
            {cancelExecuting && <Loader />}
            <View style={styles.closeContainer}>
              <View style={styles.modalHeader}>
                <Text style={styles.cancelStyle}>
                  {isSupport ? appTexts.STRING.help : appTexts.CANCEL.cancel}
                </Text>
              </View>

              <TouchableOpacity
                style={styles.popupClose}
                onPress={() => {
                  setReason(0);
                  setShowTextInput(true);
                  cancelCloseModal();
                }}>
                <Image
                  source={require('../../assets/images/products/Card.png')}
                  style={styles.pic}
                />
              </TouchableOpacity>
            </View>

            <View
              style={!showTextInput && {minHeight: 250, overflow: 'hidden'}}>
              <View
                style={[
                  styles.borderphoneb,
                  reasonError && {borderColor: 'red'},
                ]}>
                <View style={styles.phoneNoab}>
                  <Text style={styles.phoneStyle}>
                    {appTexts.CANCEL.selectCancel}
                  </Text>
                </View>

                {Platform.OS === 'android' ? (
                  <View style={styles.secondSection1}>
                    <Dropdown
                      onSubmit={item => {
                        setReasonError(false);
                        setReason(item.value);
                        setSelectedReasonTxt(item.label);
                      }}
                      data={reasonList}
                      selectedItemValue={{
                        value: reason,
                        label: selectedReasonTxt,
                      }}
                      showselectedLabel={true}
                      customStyle={{
                        height: 40,
                        borderWidth: 0,
                        borderColor: 'white',
                        marginVertical: 5,
                      }}
                    />
                    {/* <Picker
                      selectedValue={reason}
                      style={{height: 50, width: '100%'}}
                      onValueChange={(itemValue, itemIndex) => {
                        setReasonError(false);
                        setReason(itemValue);
                      }}>
                      <Picker.Item label="Select an Item" value="" />
                      {reasonList.map(reason => (
                        <Picker.Item
                          label={reason.label}
                          value={reason.value}
                        />
                      ))}
                    </Picker> */}
                  </View>
                ) : (
                  <View style={styles.secondSection1}>
                    <DropDownPicker
                      onOpen={() => setShowTextInput(false)}
                      onClose={() => setShowTextInput(true)}
                      items={reasonList}
                      // dropDownStyle={{placeholderTextColor: 'red'}}
                      // placeholder={appTexts.CANCEL.select}
                      labelStyle={{
                        fontSize: 13,
                        fontFamily: I18nManager.isRTL
                          ? globals.FONTS.notokufiArabic
                          : globals.FONTS.cairoRegular,
                        textAlign: 'left',
                        color: '#242424',
                      }}
                      containerStyle={{
                        height: 40,
                        width: '98%',
                        zIndex: 99999,
                      }}
                      style={styles.dropDownStyle}
                      itemStyle={{
                        justifyContent: 'flex-start',
                      }}
                      dropDownStyle={{
                        backgroundColor: 'white',
                        elevation: 5,
                      }}
                      onChangeItem={(item, index) => {
                        setReasonError(false);
                        setReason(item.value);
                      }}
                    />
                  </View>
                )}
              </View>
            </View>

            {showTextInput && (
              <View style={styles.borderphonebc}>
                <View style={styles.phoneNo}>
                  <Text style={styles.phoneStyle}>
                    {appTexts.CANCEL.message}
                  </Text>
                </View>

                <View style={styles.phoneSectionbc}>
                  <TextInput
                    textAlignVertical="top"
                    multiline={true}
                    style={[
                      styles.disableText,
                      {
                        //  height: 28,
                        paddingTop: 0,
                        paddingBottom: 0,
                        width: '100%',
                        height: '100%',
                        //textAlignVertical : "top"
                      },
                    ]}
                    placeholderTextColor="#242424"
                    keyboardType="name-phone-pad"
                    autoFocus={false}
                    onChangeText={val => setMessage(val)}
                  />
                </View>
              </View>
            )}

            <View style={styles.buttonWrapper}>
              <TouchableOpacity disabled={cancelExecuting} onPress={onPressBtn}>
                <CustomButton buttonText={appTexts.CANCEL.send} isSend={true} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  );
};

CancelModal.propTypes = {
  closeModal: PropTypes.func,
};

export default CancelModal;
