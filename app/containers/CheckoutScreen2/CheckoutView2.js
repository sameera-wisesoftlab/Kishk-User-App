import React, { useState, useRef } from 'react';
import {
  View,
  ScrollView,
  Text,
  FlatList,
  StatusBar,
  I18nManager,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import globals from '../../lib/globals';
import appTexts from '../../lib/appTexts';
import { styles, images } from './styles';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import FloatButton from '../../components/FloatButton';
import FilterCard from '../../components/FilterCard';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ChooseFileModal from '../../components/ChooseFile';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import DashSlider from '../../components/DashSlider';
import HeadingWithRightLink from '../../components/HeadingWithRightLink';
import Loader from '../../components/Loader';
import PriceCard from '../../components/PriceCard';

const CheckoutView2 = props => {
  const {
    onBackButtonClick,
    onPayClick,
    selectedMethod,
    setSelectedMethod,
    isLoading,
    settingsData,
    choseFile,
    choseFileModalVisible,
    setChoseFileModalVisible,
    imageData,
    removeFile,
    cartdata
  } = props;

  const payOptions = settingsData?.data?.payment_options;
  let payOptionPardsed = {};
  try {
    payOptionPardsed = JSON.parse(payOptions);
  } catch (err) {
    payOptionPardsed = {};
  }
  const cod_fee = settingsData?.data?.cod_fee || 0;
  const cod = payOptionPardsed?.cod;
  const online = payOptionPardsed?.online;
  const ofline = payOptionPardsed?.ofline;
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
        title={appTexts.FILTER.checkout2}
        customHeaderStyle={{
          height: globals.INTEGER.headerHeight,
          alignItems: 'center',
          backgroundColor: globals.COLOR.headerColor,
        }}
      />
      {isLoading && <Loader />}
      <ScrollView>
        <View style={styles.screenDesignContainer}>
          <View style={styles.sliderView}>
            <DashSlider
              label1={appTexts.CHECKOUT.summary}
              label2={appTexts.CHECKOUT.payment}
              label3={appTexts.CHECKOUT.status}
              isSuccess={false}
              stage={2}
            />
          </View>
          <View style={styles.paySection}>
            <HeadingWithRightLink nameLabel={appTexts.CHECKOUT.paymethod} />
          </View>
          <View style={styles.sectionPay}>
            {online == 'Y' && (
              <>
                <TouchableOpacity
                  onPress={() => {
                    setSelectedMethod(
                      selectedMethod == 'online' ? '' : 'online',
                    );
                  }}>
                  <View style={styles.online}>
                    <View style={styles.left}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {selectedMethod == 'online' ? <Image
                          source={images.tick}
                          style={{ width: 30, height: 30 }}
                        /> : null}
                        <Image
                          source={images.online}
                          style={styles.onlineImage}
                        />
                      </View>
                      <View style={styles.textOn}>
                        <Text style={styles.onText}>
                          {appTexts.CHECKOUT.online}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.downArrow}>
                      {selectedMethod == 'online' ? (
                        <Image source={images.upArrow} style={styles.arrow} />
                      ) : (
                          <Image source={images.downArrow} style={styles.arrow} />
                        )}
                    </View>
                  </View>
                </TouchableOpacity>

                {selectedMethod == 'online' && (
                  <View style={styles.boxView}>
                    <PriceCard
                      isOrderDetails={true}
                      isOrder={false}
                      cartData={cartdata}
                    />
                    {/* <View style={styles.halfRowCod}>
                      <View
                        style={{
                          width: '70%',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={images.tick}
                          style={{ width: 15, height: 15, marginTop: 4 }}
                        />
                        <Text style={styles.codText}>
                          {appTexts.CHECKOUT.online}
                        </Text>
                      </View>
                    </View> */}
                    {/* <View style={styles.cardBox}>
                      <View style={styles.cardText}>
                        <TextInput
                          style={styles.txt}
                          placeholder={appTexts.CHECKOUT.cardno}></TextInput>
                      </View>
                      <View style={styles.cardImage}>
                        <Image
                          source={images.cardIcon}
                          style={styles.cardStyle}
                        />
                      </View>
                    </View> */}
                    {/* <View style={styles.halfRow}>
                      <View style={styles.halfBox}>
                        <TextInput
                          style={styles.txt}
                          placeholder={appTexts.CHECKOUT.expire}></TextInput>
                      </View>
                      <View style={styles.halfBox}>
                        <Text style={styles.txt}>{appTexts.CHECKOUT.cvv}</Text>
                      </View>
                    </View> */}
                    {/* <View style={styles.cardBox}>
                      <View style={styles.cardText}>
                        <TextInput
                          style={styles.txt}
                          placeholder={appTexts.CHECKOUT.name}></TextInput>
                      </View>
                    </View> */}
                  </View>
                )}
                <View style={styles.divide}></View>
              </>
            )}

            {ofline == 'Y' && (
              <>
                <TouchableOpacity
                  onPress={() => {
                    setSelectedMethod(
                      selectedMethod == 'ofline' ? '' : 'ofline',
                    );
                  }}>
                  <View style={styles.online}>
                    <View style={styles.left}>
                      <View style={styles.onImage}>
                        <Image
                          source={images.offline}
                          style={styles.onlineImage}
                        />
                      </View>
                      <View style={styles.textOn}>
                        <Text style={styles.onText}>
                          {appTexts.CHECKOUT.offline}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.downArrow}>
                      {selectedMethod == 'ofline' ? (
                        <Image source={images.upArrow} style={styles.arrow} />
                      ) : (
                          <Image source={images.downArrow} style={styles.arrow} />
                        )}
                    </View>
                  </View>
                </TouchableOpacity>

                {selectedMethod == 'ofline' && (
                  <View style={styles.halfRowOfline}>
                    <View
                      style={{
                        width: '90%',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 80,
                        borderWidth: 1,
                        borderRadius: 10,
                        borderStyle: 'dashed',
                      }}>
                      <TouchableOpacity
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        onPress={() => setChoseFileModalVisible(true)}>
                        {!imageData.selected && (
                          <Text style={styles.codText}>
                            {appTexts.STRING.selectf}
                          </Text>
                        )}
                        {imageData.selected && (
                          <>
                            <Text style={styles.codText}>
                              {(imageData.nameImage.length > 10 ? '...' : '') +
                                imageData.nameImage.substr(-10)}
                            </Text>
                            <TouchableOpacity
                              style={{
                                width: 22,
                                height: 22,
                                backgroundColor: 'red',
                                borderRadius: 25,
                                //alignSelf: 'center',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                              onPress={() => removeFile()}>
                              <Text
                                style={[
                                  {
                                    textAlign: 'center',
                                    color: '#fff',
                                    fontWeight: '700',
                                    //textAlignVertical: 'center',
                                    //height: 20,
                                    //marginTop: 2,
                                  },
                                ]}>
                                X
                              </Text>
                            </TouchableOpacity>
                          </>
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>
                )}

                <View style={styles.divide}></View>
              </>
            )}

            {cod == 'Y' && (
              <>
                <TouchableOpacity
                  onPress={() => {
                    setSelectedMethod(selectedMethod == 'cod' ? '' : 'cod');
                  }}>
                  <View style={styles.online}>
                    <View style={styles.left}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {selectedMethod == 'cod' ? <Image
                          source={images.tick}
                          style={{ width: 30, height: 30 }}
                        /> : null}
                        <Image
                          source={images.cash}
                          style={styles.onlineImage}
                        />
                      </View>
                      <View style={styles.textOn}>
                        <Text style={styles.onText}>
                          {appTexts.CHECKOUT.cash}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.downArrow}>
                      {selectedMethod == 'cod' ? (
                        <Image source={images.upArrow} style={styles.arrow} />
                      ) : (
                          <Image source={images.downArrow} style={styles.arrow} />
                        )}
                    </View>
                  </View>
                </TouchableOpacity>
                <View style={styles.divide}></View>
                {selectedMethod == 'cod' && (
                  <View style={styles.halfRowCod}>
                    <PriceCard
                      isOrderDetails={true}
                      isOrder={false}
                      cartData={cartdata}
                      codfees={cod_fee}
                    />
                    {/* <View
                      style={{
                        width: '70%',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={images.tick}
                        style={{ width: 15, height: 15, marginTop: 4 }}
                      />
                      <Text style={styles.codText}>
                        {appTexts.CHECKOUT.cashco}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: '30%',
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={[
                          styles.codText,
                          { textAlign: 'right', width: '85%' },
                          {
                            fontSize: 14,
                            fontFamily: I18nManager.isRTL
                              ? globals.FONTS.notokufiarabicBold
                              : globals.FONTS.cairoBold,
                            color: globals.COLOR.black,
                            textAlign: 'left',
                          },
                        ]}>
                        {appTexts.CART.price} {cod_fee}
                      </Text>
                    </View> */}
                  </View>
                )}
              </>
            )}
          </View>
        </View>
      </ScrollView>

      {choseFileModalVisible && (
        <ChooseFileModal
          closeModal={() => setChoseFileModalVisible(false)}
          isVisible={true}
          choseFile={choseFile}
        />
      )}

      <FloatButton
        isCheckout={true}
        selectedMethod={selectedMethod}
        buttonText={selectedMethod == 'online' ? appTexts.CHECKOUT.now : appTexts.CHECKOUT.placeOrder}
        onButtonClick={() => onPayClick()}
      />
    </View>
  );
};

CheckoutView2.propTypes = {};

export default CheckoutView2;
