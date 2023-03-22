import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

import globals from '../../lib/globals';
import { styles, images } from './styles';
import appTexts from '../../lib/appTexts';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Header from '../../components/Header';
import _ from 'lodash';
import AddressCard from '../../components/AddressCard';
import Loader from '../../components/Loader';

const AddressView = props => {
  const {
    onBackButtonClick,
    onRightButtonPress,
    changeTab,
    tabIndex,
    addressData,
    itemClick,
    deleteClick,
    addnewAddress,
    isLoading,
  } = props;

  const renderItem = ({ item, index }) => (
    <AddressCard
      item={item}
      itemClick={itemClick}
      deleteClick={deleteClick}
      tabIndex={tabIndex}
    />
  );
  return (
    <View style={styles.screenMain}>
      <Header
        navigation={props.navigation}
        iscenterLogoRequired={false}
        onRightButtonPress={onRightButtonPress}
        isLanguageButtonRequired={false}
        onBackButtonClick={onBackButtonClick}
        isBackButtonRequired={true}
        onBackButtonClick={onBackButtonClick}
        isLeftTitleRequired={true}
        title={appTexts.PROFILE.Address}
        customHeaderStyle={{
          height: globals.INTEGER.headerHeight,
          backgroundColor: globals.COLOR.headerColor,
        }}
      />

      {isLoading && <Loader />}

      <View style={styles.screenContainer}>
        <View style={styles.lineBorder} />

        <View style={styles.container}>
          <TouchableOpacity
            style={styles.myOrdersContainer}
            onPress={() => {
              changeTab(0);
            }}>
            <Text
              style={tabIndex === 0 ? styles.orderLabel : styles.inactiveLabel}>
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
              style={tabIndex === 1 ? styles.orderLabel : styles.inactiveLabel}>
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
        <View style={styles.addressCard}>
          <TouchableOpacity
            onPress={() => {
              addnewAddress();
            }}>
            <View style={styles.addressContainer}>
              <View style={styles.addAddress}>
                <Image source={images.addIcon} style={styles.phoneImage} />
                <Text style={styles.addressText}>
                  {appTexts.ADDRESS.Addnew}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.listContainer}>
            {addressData.length === 0 ? (
              <View style={styles.noDataContainer}>
                <Text style={styles.noDataText}>{appTexts.STRING.nodata}</Text>
              </View>
            ) : (
                <FlatList
                  style={styles.flatListStyle}
                  data={addressData}
                  extraData={addressData}
                  keyExtractor={(item, index) => index.toString()}
                  showsVerticalScrollIndicator={false}
                  renderItem={renderItem}
                  tabIndex={tabIndex}
                />
              )}
          </View>
        </View>
      </View>
    </View>
  );
};

AddressView.propTypes = {
  changeTab: PropTypes.func,
  tabIndex: PropTypes.number,
};

export default AddressView;
