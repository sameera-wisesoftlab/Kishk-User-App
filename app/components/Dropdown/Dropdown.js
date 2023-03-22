import PropTypes from 'prop-types';
import React, {Component, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
  I18nManager,
  Platform,
  Image,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import globals from '../../lib/globals';

const Dropdown = props => {
  const {
    data,
    onSubmit,
    selectedItemValue,
    showselectedLabel = false,
    customStyle = {},
  } = props;

  const [selectedValue, setSelectedValue] = useState(selectedItemValue);
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState({});

  const pressItem = () => {
    setModalVisible(true);
  };

  const valueChange = (_data, index) => {
    setSelected(_data);
  };

  const onConfirm = _selectedValue => {
    onSubmit(_selectedValue);
  };

  if (props.selectedItemValue?.value != selectedValue.value) {
    setSelectedValue(props.selectedItemValue);
  }

  const selected_label = showselectedLabel
    ? selectedValue.label ||
      (I18nManager.isRTL ? 'اختيار المنتج' : 'Select an item')
    : selectedValue.value ||
      (I18nManager.isRTL ? 'اختيار المنتج' : 'Select an item');

  const renderModalPicker = () => {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={pressItem}
          style={[
            defaultStyles.container,
            props.style || {
              height: 50,
              width: '100%',
              borderWidth: 0.5,
              borderColor: 'lightgray',
              marginBottom: 5,
              alignItems: 'center',
            },
            customStyle,
          ]}>
          <Text
            style={{
              textAlign: 'left',
              color: 'gray',
              width: '90%',
              fontFamily: I18nManager.isRTL
                ? globals.FONTS.notokufiArabic
                : globals.FONTS.cairoSemiBold,
              fontSize: I18nManager.isRTL ? 13 : 13,
            }}>
            {selected_label}
          </Text>
          <Image source={images.downArrow} style={{width: 12, height: 12}} />
        </TouchableOpacity>
      </View>
    );
  };

  const confirm = I18nManager.isRTL ? 'تأكيد' : 'Confirm';
  return (
    <View style={{flex: 1}}>
      <Modal transparent visible={modalVisible}>
        <View activeOpacity={1} style={defaultStyles.overlay}>
          <View style={defaultStyles.picker}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{width: '100%'}}
                onPress={() => {
                  let selectedValue = {};
                  data.map(item => {
                    if (item.value == selected) {
                      selectedValue = item;
                    }
                  });
                  setModalVisible(false);
                  // setSelectedValue(selectedValue);
                  onConfirm(selectedValue);
                }}>
                <Text
                  style={{
                    paddingTop: 12,
                    textAlign: 'right',
                    color: '#049ACA',
                    fontFamily: I18nManager.isRTL
                      ? globals.FONTS.notokufiArabic
                      : globals.FONTS.cairoLight,
                  }}>
                  {confirm}
                </Text>
              </TouchableOpacity>
            </View>

            {Platform.OS == 'ios' && (
              <Picker selectedValue={selected} onValueChange={valueChange}>
                {data.map((item, index) => (
                  <Picker.Item
                    key={`min_${index}`}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </Picker>
            )}
            {Platform.OS == 'android' && (
              <View style={{marginTop: 10}}>
                {data.map(item => {
                  return (
                    <TouchableOpacity
                      style={{
                        height: 45,
                        backgroundColor: '#F3F0EF',
                        padding: 5,
                        marginBottom: 5,
                      }}
                      onPress={() => valueChange(item.value)}>
                      <View>
                        <Text
                          style={{
                            fontFamily: I18nManager.isRTL
                              ? globals.FONTS.notokufiArabic
                              : globals.FONTS.cairoLight,
                            paddingTop: 6,
                            textAlign: 'center',
                            color:
                              selected == item.value ? '#049ACA' : '#ababab',
                          }}>
                          {item.label}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
          </View>
        </View>
      </Modal>
      {renderModalPicker()}
    </View>
  );
};

const images = {
  downArrow: require('../../assets/images/cart/arrow.png'),
};

const defaultStyles = StyleSheet.create({
  container: {
    padding: 5,
    minHeight: 40,
    borderTopWidth: 0.5,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  overlay: {
    flex: 1,
    width: null,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  picker: {
    padding: 10,
    borderTopWidth: 0.5,
    borderColor: '#aaa',
    backgroundColor: 'white',
  },
  picker2: {
    backgroundColor: 'white',
  },
});

export default Dropdown;
