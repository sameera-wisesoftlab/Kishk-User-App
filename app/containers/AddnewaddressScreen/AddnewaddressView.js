import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import globals from '../../lib/globals';
import { styles, images } from './styles';
import appTexts from '../../lib/appTexts';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FloatButton from '../../components/FloatButton';
import Header from '../../components/Header';
import Toast from 'react-native-toast-message';
import _ from 'lodash';
import Loader from '../../components/Loader';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Modal from 'react-native-modal';

const AddnewaddressView = props => {
  const {
    onBackButtonClick,
    tabIndex,
    addnewAddress,
    makedefaultaddressClick,
    isCheckboxClicked,
    name,
    setName,
    phone,
    setPhone,
    apartment,
    setApartment,
    pobox,
    setPobox,
    landmark,
    setLandmark,
    region,
    setRegion,
    setChecked,
    checked,
    setbillType,
    billtype,
    addressdefaultClick,
    deliverytype,
    setdeliveryType,
    isloading,
    loader,
    addressData,
    setMapModelVisible,
    checkLocationAccess,
    deliveryaddress,
    setdeliveryAddress,
    billingaddress,
    setbillingAddress,
    hideDefaultAddress,
  } = props;

  //const { openHideDescription } = props;
  const [showCheck, setShowCheck] = useState(true);
  const [showCheck1, setShowCheck1] = useState(true);
  const [showCheck2, setShowCheck2] = useState(true);

  const homePress = () => {
    setShowCheck(!showCheck);
  };
  const officePress = () => {
    setShowCheck1(!showCheck1);
  };
  const othersPress = () => {
    setShowCheck2(!showCheck2);
  };

  return (
    <View style={styles.screenMain}>
      <Header
        navigation={props.navigation}
        iscenterLogoRequired={false}
        isLanguageButtonRequired={false}
        onBackButtonClick={onBackButtonClick}
        isBackButtonRequired={true}
        isLeftTitleRequired={true}
        title={appTexts.PROFILE.Addaddress}
        //title={tabIndex === 0 ? '1' :'2' }
        customHeaderStyle={{
          height: globals.INTEGER.headerHeight,
          backgroundColor: globals.COLOR.headerColor,
        }}
      />

      <View style={styles.screenContainer}>
        <KeyboardAwareScrollView
          scrollEnabled={true}
          style={styles.scrollView}
          extraScrollHeight={100}
          contentContainerStyle={{ justifyContent: 'center', paddingBottom: 30 }}>
          <View style={styles.lineBorder} />
          {/* <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'position' : null}> */}

          <View style={styles.formWrapper}>
            {props.isloading && <Loader />}
            <View style={styles.contentWrapper}>
              <View style={styles.topWrapper}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: '4.3%',
                    paddingRight: '4.3%',
                  }}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      //paddingLeft: '4%',
                      //paddingRight: '4%',
                    }}
                    onPress={() => {
                      setdeliveryAddress(!deliveryaddress);
                    }}>
                    <Image
                      source={deliveryaddress ? images.checkBox : images.check}
                      style={styles.checkBox}
                    />

                    <Text style={styles.orderLabel}>
                      {appTexts.ADDRESS.Delivery}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: '4%',
                      //paddingLeft: '4%',
                      //paddingRight: '4%',
                    }}
                    onPress={() => {
                      setbillingAddress(!billingaddress);
                    }}>
                    <Image
                      source={billingaddress ? images.checkBox : images.check}
                      style={styles.checkBox}
                    />

                    <Text style={styles.orderLabel}>
                      {appTexts.ADDRESS.Billing}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.mainList}>
                <View style={styles.firstprofileWrapper}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.accountName}>
                      {appTexts.ADDRESS.Contactdetails}
                    </Text>
                  </View>
                  <View style={styles.insidecontentWrapper}>
                    <View style={styles.borderphoneb}>
                      <View style={styles.phoneNo}>
                        <Text style={styles.phoneStyle}>
                          {appTexts.ADDRESS.Name}
                        </Text>
                        <Text style={styles.star}> *</Text>
                      </View>
                      <View style={styles.phoneSectionb}>
                        <View style={styles.secondSection1}>
                          <TextInput
                            style={[
                              styles.disableText,
                              {
                                paddingTop: 0,
                                paddingBottom: 0,
                              },
                            ]}
                            placeholderTextColor="#242424"
                            keyboardType="name-phone-pad"
                            value={name}
                            onChangeText={val => {
                              setName(val);
                            }}
                          //autoFocus={true}
                          />
                        </View>
                      </View>
                    </View>

                    <View style={styles.heightWraaper}>
                      <View style={styles.borderphone}>
                        <View style={styles.phoneNo}>
                          <Text style={styles.phoneStyle}>
                            {appTexts.STRING.phonenumber}
                          </Text>
                          <Text style={styles.star}> *</Text>
                        </View>

                        <View style={styles.phoneSection}>
                          <View style={styles.firstSection}>
                            <Image
                              source={require('../../assets/images/ChooseLanguage/mask.png')}
                              style={{ height: 16, width: 25, borderRadius: 6 }}
                            />
                            <View style={styles.iconWrapper}>
                              <TextInput
                                editable={false}
                                style={styles.disableText}
                                placeholder={'+973'}
                                placeholderTextColor="#282828"
                              />
                            </View>
                          </View>
                          <View style={styles.secondSection}>
                            <TextInput
                              style={[
                                styles.disableText,
                                {
                                  //  height: 28,
                                  paddingTop: 0,
                                  paddingBottom: 0,
                                  //textAlignVertical : "top"
                                },
                              ]}
                              value={phone}
                              onChangeText={val => {
                                setPhone(val);
                              }}
                              placeholderTextColor="#242424"
                              keyboardType="number-pad"
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                    {/* 
                    <View style={styles.heightWraaper}>
                      <View style={styles.borderphone}>
                        <View style={styles.phoneNo}>
                          <Text style={styles.phoneStyle}>
                            {'Logged Number'}
                          </Text>
                          <Text style={styles.star}> *</Text>
                        </View>

                        <View style={styles.phoneSection}>
                          <View style={styles.firstSection}>
                            <Image
                              source={require('../../assets/images/ChooseLanguage/mask.png')}
                              style={{height: 16, width: 25, borderRadius: 6}}
                            />
                            <View style={styles.iconWrapper}>
                              <TextInput
                                editable={false}
                                style={styles.disableText}
                                placeholder={'+973'}
                                placeholderTextColor="#282828"
                              />
                            </View>
                          </View>
                          <View style={styles.secondSection}>
                            <TextInput
                              style={[
                                styles.disableText,
                                {
                                  //  height: 28,
                                  paddingTop: 0,
                                  paddingBottom: 0,
                                  //textAlignVertical : "top"
                                },
                              ]}
                              value={loggedphone}
                              onChangeText={val => {
                                setloggedPhone(val);
                              }}
                              placeholderTextColor="#242424"
                              keyboardType="number-pad"
                            />
                          </View>
                        </View>
                      </View>
                    </View> */}

                    <View style={styles.firstprofileWrappers}>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.accountName}>
                          {appTexts.ADDRESS.AddressInfo}
                        </Text>
                      </View>
                      <View style={styles.insidecontentWrappers}>
                        <View style={styles.apartmentWrapper}>
                          <View style={styles.borderphoneb}>
                            <View style={styles.phoneNo}>
                              <Text style={styles.phoneStyle}>
                                {appTexts.ADDRESS.Apartment}
                              </Text>
                              <Text style={styles.star}> *</Text>
                            </View>
                            <View style={styles.phoneSectionb}>
                              <View style={styles.secondSection1}>
                                <TextInput
                                  style={[
                                    styles.disableText,
                                    {
                                      paddingTop: 0,
                                      paddingBottom: 0,
                                    },
                                  ]}
                                  value={apartment}
                                  onChangeText={val => {
                                    setApartment(val);
                                  }}
                                  placeholderTextColor="#242424"
                                  keyboardType="name-phone-pad"
                                //autoFocus={true}
                                />
                              </View>
                            </View>
                          </View>
                        </View>

                        <View style={styles.poBox}>
                          <View style={styles.borderphoneb}>
                            <View style={styles.phoneNo}>
                              <Text style={styles.phoneStyle}>
                                {appTexts.ADDRESS.POBox}
                              </Text>
                              <Text style={styles.star}> *</Text>
                            </View>
                            <View style={styles.phoneSectionb}>
                              <View style={styles.secondSection1}>
                                <TextInput
                                  style={[
                                    styles.disableText,
                                    {
                                      paddingTop: 0,
                                      paddingBottom: 0,
                                    },
                                  ]}
                                  placeholderTextColor="#242424"
                                  keyboardType="name-phone-pad"
                                  //autoFocus={true}
                                  value={pobox}
                                  onChangeText={val => {
                                    setPobox(val);
                                  }}
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                        <View style={styles.poBox}>
                          <View style={styles.borderphoneb}>
                            <View style={styles.phoneNo}>
                              <Text style={styles.phoneStyle}>
                                {appTexts.ADDRESS.Landmark}
                              </Text>
                              <Text style={styles.star}> *</Text>
                            </View>
                            <View style={styles.phoneSectionb}>
                              <View style={styles.secondSection1}>
                                <TextInput
                                  style={[
                                    styles.disableText,
                                    {
                                      paddingTop: 0,
                                      paddingBottom: 0,
                                    },
                                  ]}
                                  placeholderTextColor="#242424"
                                  keyboardType="name-phone-pad"
                                  //autoFocus={true}
                                  value={landmark}
                                  onChangeText={val => {
                                    setLandmark(val);
                                  }}
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                        <View style={styles.poBox}>
                          <View style={styles.borderphoneb}>
                            <View style={styles.phoneNo}>
                              <Text style={styles.phoneStyle}>
                                {appTexts.ADDRESS.Street}
                              </Text>
                              <Text style={styles.star}> *</Text>
                            </View>
                            <View style={styles.phoneSectionb}>
                              <View style={styles.secondSection1}>
                                <TextInput
                                  style={[
                                    styles.disableText,
                                    {
                                      paddingTop: 0,
                                      paddingBottom: 0,
                                    },
                                  ]}
                                  value={region}
                                  onChangeText={val => {
                                    setRegion(val);
                                  }}
                                  placeholderTextColor="#242424"
                                  keyboardType="name-phone-pad"
                                //autoFocus={true}
                                />
                              </View>
                            </View>
                          </View>
                        </View>

                        <TouchableOpacity
                          style={styles.chooseBox}
                          onPress={() => checkLocationAccess()}>
                          <Text style={styles.chooseText}>
                            {appTexts.ADDRESS.Chooselocation}
                          </Text>
                        </TouchableOpacity>
                        <View style={styles.bottomBorder} />
                        <View style={styles.addressType}>
                          <TouchableOpacity
                            onPress={() => {
                              setdeliveryType('home');
                            }}>
                            <View style={styles.firstImage}>
                              <View style={styles.Spacing}>
                                <Image
                                  source={
                                    deliverytype == 'home'
                                      ? require('../../assets/images/search/radio-a.png')
                                      : require('../../assets/images/search/Radio.png')
                                  }
                                  style={styles.phoneImage}
                                />
                              </View>

                              <View style={styles.Spacing}>
                                <Image
                                  source={images.home}
                                  style={styles.phoneImage}
                                />
                              </View>
                              {/* <Text>Home</Text> */}
                              <View style={styles.Spacing}>
                                <Text style={styles.typeText}>
                                  {appTexts.STRING.home}
                                </Text>
                              </View>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => {
                              setdeliveryType('office');
                            }}>
                            <View style={styles.firstImage}>
                              <View style={styles.Spacing}>
                                <Image
                                  source={
                                    deliverytype == 'office'
                                      ? require('../../assets/images/search/radio-a.png')
                                      : require('../../assets/images/search/Radio.png')
                                  }
                                  style={styles.checkBox}
                                />
                              </View>

                              <View style={styles.Spacing}>
                                <Image
                                  source={images.office}
                                  style={styles.phoneImage}
                                />
                              </View>
                              {/* <Text>Home</Text> */}
                              <View style={styles.Spacing}>
                                <Text style={styles.typeText}>
                                  {appTexts.STRING.office}
                                </Text>
                              </View>
                            </View>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => {
                              setdeliveryType('others');
                            }}>
                            <View style={styles.firstImage}>
                              <View style={styles.Spacing}>
                                <Image
                                  source={
                                    deliverytype == 'others'
                                      ? require('../../assets/images/search/radio-a.png')
                                      : require('../../assets/images/search/Radio.png')
                                  }
                                  style={styles.checkBox}
                                />
                              </View>

                              <View style={styles.Spacing}>
                                <Image
                                  source={images.addressIcon}
                                  style={styles.phoneImage}
                                />
                              </View>
                              {/* <Text>Home</Text> */}
                              <View style={styles.Spacing}>
                                <Text style={styles.typeText}>
                                  {appTexts.STRING.others}
                                </Text>
                              </View>
                            </View>
                          </TouchableOpacity>
                        </View>

                        {!hideDefaultAddress && (
                          <View>
                            <TouchableOpacity
                              style={styles.markSection}
                              onPress={() => {
                                addressdefaultClick();
                              }}>
                              {isCheckboxClicked ? (
                                <Image
                                  source={require('../../assets/images/ChooseLanguage/checkbox.png')}
                                  style={styles.checkBox}
                                />
                              ) : (
                                  <Image
                                    source={require('../../assets/images/ChooseLanguage/unCheckbox.png')}
                                    style={styles.checkBox}
                                  />
                                )}

                              <Text style={styles.orderLabel}>
                                {appTexts.ALERT_MESSAGES.defaultRequired}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        )}
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
      <FloatButton
        isCategory={true}
        buttonText={appTexts.EDIT.save}
        onButtonClick={addnewAddress}></FloatButton>
      {/* <MapModel /> */}
    </View>
  );
};

AddnewaddressView.propTypes = {
  isModalVisible: PropTypes.bool,
  isHelpModalVisible: PropTypes.bool,
  logoutButtonPress: PropTypes.func,
  privacyPolicyPress: PropTypes.func,
  termsAndConditionPress: PropTypes.func,
  toggleHelpModal: PropTypes.func,
  faqPress: PropTypes.func,
  toggleModal: PropTypes.func,
  toggleLogoutModal: PropTypes.func,
  selectLanguage: PropTypes.func,
  goBackButton: PropTypes.func,
  addressPress: PropTypes.func,
};

export default AddnewaddressView;
