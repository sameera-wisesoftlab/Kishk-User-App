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
import FloatButton from '../FloatButton';
import TimeCard from '../TimeCard';
import SliderHorizontal from '../../components/SliderHorizontal';

const DateModal = props => {
  const {
    isDateModalVisible,
    closeModal,
    dates,
    time_slots,
    selectedDate,
    selectedTimeSlot,
    confirmDeliveryDate,
  } = props;

  const [dateSel, setDateSel] = useState(selectedDate);
  const [slotSel, setSlotSel] = useState(selectedTimeSlot);

  const renderItem2 = ({item, index}) => (
    <TimeCard
      onPress={setSlotSel}
      item={item}
      index={index}
      selectedTimeSlot={slotSel}
    />
  );

  return (
    <Modal
      onRequestClose={() => null}
      style={styles.modalStyle}
      isVisible={isDateModalVisible}>
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

        <View style={{marginHorizontal: '6%'}}>
          <View style={{bottom: '25%'}}>
            <Text style={styles.fontViewTop}>
              {appTexts.DELIVERY_DATE.select}
            </Text>
          </View>

          <View style={styles.dayText}>
            <FlatList
              horizontal={true}
              data={dates}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity onPress={() => setDateSel(index)}>
                    <Text
                      style={
                        dateSel == index ? styles.fontView : styles.fontViewText
                      }>
                      {item.month}
                    </Text>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={styles.dayText1}>
            <FlatList
              data={dates}
              horizontal={true}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity onPress={() => setDateSel(index)}>
                    <View style={styles.Tuetext}>
                      <View
                        style={
                          dateSel == index
                            ? styles.textViewSelected
                            : styles.textView
                        }>
                        <Text style={styles.fontText}>
                          {item.date.split('-')[0]}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
      <SliderHorizontal
        renderItem={renderItem2}
        listItem={time_slots}
        isTime={true}
      />
      <FloatButton
        onButtonClick={() => {
          closeModal();
          confirmDeliveryDate(dateSel, slotSel);
        }}
        isDate={true}
      />
    </Modal>
  );
};

DateModal.propTypes = {
  closeModal: PropTypes.func,
};

export default DateModal;
