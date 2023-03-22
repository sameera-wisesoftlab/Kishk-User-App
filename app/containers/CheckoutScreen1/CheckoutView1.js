import React, { useState, useRef } from 'react';
import {
  View,
  ScrollView,
  Text,
  FlatList,
  StatusBar,
  I18nManager,
  Image,
  TouchableOpacity,
} from 'react-native';

import globals from '../../lib/globals';
import appTexts from '../../lib/appTexts';
import { styles, images } from './styles';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import FloatButton from '../../components/FloatButton';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import HeadingWithRightLink from '../../components/HeadingWithRightLink';
import DashSlider from '../../components/DashSlider';
import ProductCardLinear from '../../components/ProductCardLinear';
import PriceCard from '../../components/PriceCard';
// import AddressCard from '../../components/AddressCard';
import DateModal from '../../components/DateModal';
import CheckoutCard from '../../components/CartCard/CheckoutCard';
import AddressdetailsCard from '../../components/AddressdetailsCard';
import Loader from '../../components/Loader';
import moment from 'moment';

const CheckoutView = props => {
  const {
    onBackButtonClick,
    changeTab,
    tabIndex,
    listData,
    onlineClick,
    onProceedClick,
    itemClick,
    addnewAddress,
    cartData,
    isLoading,
    selectedDate,
    selectedTimeSlot,
    billingAddress,
    deliveryAddress,
    confirmDeliveryDate,
    selectedDeliveryAddress,
    selectedBillingAddress,
    createAddress,
    editAddress,
  } = props;

  const [isDateModalVisible, setIsDateModalVisibile] = useState(false);

  const openDateModal = () => {
    setIsDateModalVisibile(true);
  };
  const closeModal = () => {
    setIsDateModalVisibile(false);
  };

  const items =
    typeof cartData?.cartDetails?.items != 'undefined'
      ? cartData?.cartDetails?.items
      : [];

  const _length = items.length;
  const del_dates = cartData?.delivery_dates;
  const time_slots = cartData?.time_slots;
  let nearest_deliverable_date = '';
  if (selectedDate) {
    nearest_deliverable_date = del_dates?.[selectedDate]?.date;
  } else {
    nearest_deliverable_date = del_dates?.[0]?.date;
  }
  if (nearest_deliverable_date) {
    nearest_deliverable_date = moment(
      nearest_deliverable_date,
      'DD-MM-YYYY',
    ).format('DD MMM YYYY');
  }

  const renderItemCart = ({ item, index }) => (
    <CheckoutCard
      item={item}
      isWish={false}
      isOrderDetails={false}
      isCheckout={true}
    />
  );

  const renderItem = ({ item, index }) => (
    <AddressdetailsCard
      item={item}
      itemClick={itemClick}
      tabIndex={tabIndex}
      selectedDeliveryAddress={selectedDeliveryAddress}
      selectedBillingAddress={selectedBillingAddress}
      editAddress={editAddress}
      count={tabIndex == 0 ? deliveryAddress.length : billingAddress.length}
    />
  );

  const headerComponent = () => {
    return (
      <View>
        <View style={styles.sliderView}>
          <DashSlider
            label1={appTexts.CHECKOUT.summary}
            label2={appTexts.CHECKOUT.payment}
            label3={appTexts.CHECKOUT.status}
            stage={1}
          />
        </View>
        <View
          style={[
            {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              overflow: 'hidden',
              backgroundColor: '#F5F4F4',
              paddingLeft: 20,
              paddingRight: 20,
            },
          ]}>
          {/* <HeadingWithRightLink
            addnewAddress={addnewAddress}
            addressDeatails={true}
          /> */}
          <View style={styles.containers}>
            <View style={styles.addressView}>
              <Text style={styles.nameLabel}>
                {appTexts.CHECKOUT.address_details}
              </Text>
              {deliveryAddress.length >= 1 && billingAddress.length >= 1 ? (
                <View>
                  <TouchableOpacity onPress={addnewAddress}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Image
                        source={images.addressAddIcon}
                        style={styles.ADSIcon}
                      />
                      <Text style={styles.noDataText}>
                        {appTexts.CHECKOUT.add_new_address}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: 'white' }}>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.myOrdersContainer}
              onPress={() => {
                changeTab(0);
              }}>
              <Text
                style={
                  tabIndex === 0 ? styles.orderLabel : styles.inactiveLabel
                }>
                {appTexts.ADDRESS.Delivery}
              </Text>
              <View
                style={
                  tabIndex === 0
                    ? styles.underLineStyle
                    : styles.transparentUnderLineStyle
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.myQuotationContainer}
              onPress={() => {
                changeTab(1);
              }}>
              <Text
                style={
                  tabIndex === 1 ? styles.orderLabel : styles.inactiveLabel
                }>
                {appTexts.ADDRESS.Billing}
              </Text>
              <View
                style={[
                  tabIndex === 1
                    ? styles.underLineStyle
                    : styles.transparentUnderLineStyle,
                  styles.underLineWidth,
                ]}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const footerComponent = () => {
    return (
      <>
        <View style={styles.expecteddeliveryContainer}>
          <View style={styles.expecteddeliveryData}>
            <View style={styles.textContainer}>
              <Text style={styles.expextedText}>
                {appTexts.CHECKOUT.expected_delivery}
              </Text>
              <Text style={styles.dateText}> {nearest_deliverable_date}</Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                openDateModal();
              }}>
              <Image source={images.editIcon} style={styles.locationIcon} />
              <DateModal
                isDateModalVisible={isDateModalVisible}
                closeModal={closeModal}
                dates={del_dates}
                time_slots={time_slots}
                selectedDate={selectedDate}
                selectedTimeSlot={selectedTimeSlot}
                confirmDeliveryDate={confirmDeliveryDate}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.summary}>
          <View style={{ paddingLeft: 20, paddingRight: 20 }}>
            <HeadingWithRightLink
              ordersummaryitems={true}
              orderSummaryText={
                _length +
                ' ' +
                (_length == 1 ? appTexts.CART.item : appTexts.CART.items)
              }
            />
          </View>
        </View>
        <View style={styles.cardContainer}>
          <FlatList
            style={styles.flatListStyle}
            data={items}
            extraData={items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItemCart}
          />
        </View>
        {_length > 0 && (
          <PriceCard
            isOrderDetails={true}
            isOrder={false}
            cartData={cartData}
          />
        )}
        <View style={{ marginBottom: '16%' }}></View>
      </>
    );
  };

  return (
    <View style={styles.screenMain}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={globals.COLOR.screenBackground}
      />
      <Header
        navigation={props.navigation}
        isBackButtonRequired={true}
        onBackButtonClick={onBackButtonClick}
        isLeftTitleRequired={true}
        title={appTexts.FILTER.checkout1}
        customHeaderStyle={{
          height: globals.INTEGER.headerHeight,
          alignItems: 'center',
          backgroundColor: globals.COLOR.headerColor,
        }}
      />
      {isLoading && <Loader />}
      <View style={styles.screenContainerScrollView}>
        <View style={styles.screenDesignContainer}>
          <View style={styles.listContainer}>
            <FlatList
              ListEmptyComponent={
                <View style={{ margin: 20, flexDirection: 'row' }}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      //justifyContent: 'center',
                    }}
                    onPress={() => {
                      createAddress();
                    }}>
                    <Image
                      source={images.addressAddIcon}
                      style={styles.ADSIcon}
                    />
                    <Text style={styles.noDataText}>
                      {appTexts.CHECKOUT.add_new_address}
                    </Text>
                  </TouchableOpacity>
                </View>
              }
              ListHeaderComponent={headerComponent()}
              ListFooterComponent={footerComponent()}
              data={tabIndex == 1 ? billingAddress : deliveryAddress}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={renderItem}
            />
          </View>
        </View>
      </View>
      <FloatButton
        isCategory={true}
        buttonText={appTexts.CHECKOUT.checkout_one_button}
        onButtonClick={onProceedClick}></FloatButton>
    </View>
  );
};

export default CheckoutView;
