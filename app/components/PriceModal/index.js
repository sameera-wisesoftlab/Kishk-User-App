import PropTypes from 'prop-types';
import React, {useState, useCallback, useReducer, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  I18nManager,
  TextInput,
} from 'react-native';
import {images, styles} from './styles';
import Modal from 'react-native-modal';
//import Slider from 'rn-range-slider';
import Slider from '../CustomSlider';
import Thumb from './Slider/Thumb';
import Rail from './Slider/Rail';
import RailSelected from './Slider/RailSelected';
import Notch from './Slider/Notch';
import Label from './Slider/Label';
import appTexts from '../../lib/appTexts';
import FloatButton from '../FloatButton';

const PriceModal = props => {
  const {isPriceModalVisible, pricecloseModal, onPriceApplied, minPrice, maxPrice} = props;

  const [rangeDisabled, setRangeDisabled] = useState(false);
  const [low, setLow] = useState(minPrice);
  const [high, setHigh] = useState(maxPrice);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(I18nManager.isRTL ? 100000 : 100000);
  const [floatingLabel, setFloatingLabel] = useState(false);
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);

  const handleValueChange = useCallback((lowVal, highVal) => {
    setLow(lowVal);
    setHigh(highVal);
  }, []);

  return (
    <Modal
      // animationType="fade"
      // animationIn="slideInUp"
      // animationOut="slideOutRight"
      // onSwipeComplete={openpriceModal}
      // swipeDirection={["left", "right", "up", "down"]}
      // onRequestClose={() => null}
      style={styles.modalStyle}
      isVisible={isPriceModalVisible}>
      <View style={styles.popupContainer}>
        <View style={styles.closeContainer}>
          <TouchableOpacity
            style={styles.popupClose}
            onPress={() => {
              pricecloseModal();
            }}>
            <Image
              source={require('../../assets/images/products/Card.png')}
              style={styles.pic}
            />
          </TouchableOpacity>
        </View>

        <View style={{marginHorizontal: '6%'}}>
          <View style={styles.priceText}>
            <Text style={styles.fontView}>{appTexts.ORDER.Price}</Text>
          </View>
          {/* <View style={styles.rangeSlider}> */}
          <View style={styles.sliderContainer}>
            <Slider
              style={styles.slider}
              min={min}
              max={max}
              step={1}
              disableRange={rangeDisabled}
              floatingLabel={floatingLabel}
              renderThumb={renderThumb}
              renderRail={renderRail}
              renderRailSelected={renderRailSelected}
              renderLabel={renderLabel}
              renderNotch={renderNotch}
              onValueChanged={handleValueChange}
              allowLabelOverflow={true}
              floatingLabel={true}
              low={low}
              high={high}
            />
          </View>

          <View style={styles.rangeValue}>
            <View style={styles.minBox}>
              <Text style={styles.minText}>
                {I18nManager.isRTL ? 'الحد الادنى' : 'Min'}
              </Text>
              <Text style={styles.sarText}>
                {low} {appTexts.PRODUCT.sar}
              </Text>
            </View>
            <View style={styles.lineBorder} />
            <View style={styles.minBox}>
              <Text style={styles.minText}>
                {I18nManager.isRTL ? 'الحد الأعلى' : 'Max'}
              </Text>
              <Text style={styles.sarText}>
                {high} {appTexts.PRODUCT.sar}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomWrapper}>
          <FloatButton
            onButtonClick={() => onPriceApplied(low, high)}
            isCategory={true}
            buttonText={I18nManager.isRTL ? 'نأكيد' : 'Apply'}
          />
        </View>
      </View>
    </Modal>
  );
};

PriceModal.propTypes = {
  pricecloseModal: PropTypes.func,
};

export default PriceModal;
