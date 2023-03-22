import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableOpacity, Image, I18nManager } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { styles, images } from './styles';
import Modal from 'react-native-modal';
import appTexts from '../../lib/appTexts';
import moment from 'moment';

const DateTimePicker = props => {
  const {
    selectedDate,
    setSelectedDate,
    mode,
    isShowDatePicker,
    cancelClick,
    doneClick,
  } = props;

  let dateSplit = '';
  const crrnt_date = moment().format('YYYY-MM-DD');
  dateSplit = crrnt_date.split('-');
  if (selectedDate) {
    dateSplit = selectedDate.split('-');
  }
  const date_new = new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]);

  return (
    <Modal
      transparent={true}
      animationIn="slideInUp"
      animationOut="slideOutRight"
      swipeDirection={['left', 'right', 'up', 'down']}
      visible={isShowDatePicker}
      style={styles.modalMaincontentLogout}>
      <View style={styles.modalmainviewLogout}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ paddingRight: 0 }}>
            <Image source={images.tick} style={styles.greenTick} />
          </View>
          <Text style={styles.log}>{appTexts.STRING.selectdate}</Text>
        </View>
        <DatePicker
          date={date_new}
          onDateChange={date => {
            setSelectedDate(date);
          }}
          mode={mode}
          // maxDate={}
          maximumDate={new Date(moment().subtract(6570, "days"))}
          minimumDate={new Date("1900-01-01")}
        />
        <View style={styles.popupButtonContainer}>
          <TouchableOpacity
            onPress={() => {
              doneClick();
            }}>
            <View style={styles.doneButton}>
              <Text style={styles.buttonText}>
                {I18nManager.isRTL ? 'تم' : 'Done'}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              cancelClick();
            }}>
            <View style={styles.cancelButton}>
              <Text style={styles.cancelText}>
                {I18nManager.isRTL ? 'الغاء' : 'Cancel'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

DateTimePicker.propTypes = {
  selectedDate: PropTypes.any,
  mode: PropTypes.string,
  setSelectedDate: PropTypes.func,
  isShowDatePicker: PropTypes.bool,
  cancelClick: PropTypes.func,
  doneClick: PropTypes.func,
};

export default DateTimePicker;
