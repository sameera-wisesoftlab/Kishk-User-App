import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  I18nManager,
} from 'react-native';

import globals from '../../lib/globals';
import appTexts from '../../lib/appTexts';
import { images, styles } from './styles';
import CustomButton from '../../components/CustomButton';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import Toast from 'react-native-toast-message';
import DateTimePicker from '../../components/DateTimePicker';
import moment from 'moment';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const LoginView = props => {
  const {
    loginButtonPress,
    onBackButtonClick,
    submitMobileNumber,
    firstname,
    setFirstname,
    middlename,
    setMiddlename,
    lastname,
    setLastname,
    email,
    setEmail,
    mobile,
    setMobile,
    signupPress,
    isloading,
    isCheckboxClicked,
    onBoxClick,
    onTermsClick,
    gender,
    setGender,
    onCalendarPress,
    bdate,
    setSelectedDate,
    isShowDatePicker,
    cancelClick,
    doneClick,
    birthDate,
    setBirthDate,
  } = props;

  return (
    <View style={styles.screenMain}>
      <Header
        isBackButtonRequired={true}
        isLeftTitleRequired={true}
        isInitialPage={true}
        onBackButtonClick={onBackButtonClick}
        title={appTexts.STRING.signup}
        customHeaderStyle={{
          alignItems: 'center',
          height: globals.INTEGER.headerHeight + 20,
          justifyContent: 'center',
          marginRight: '40%',
          backgroundColor: globals.COLOR.headerColor,
        }}
      />

      <ImageBackground
        source={images.backgroundImage}
        imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
        style={styles.bgroundImage}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <KeyboardAwareScrollView>
            {props.isloading && <Loader />}
            <View style={styles.contentWrapperMain}>
              <View style={styles.contentWrapper}>
                <Text style={styles.contenttitle}>
                  {appTexts.STRING.hellos}
                </Text>
                {!I18nManager.isRTL && (
                  <View style={styles.SignText}>
                    <Text style={styles.contentHeader}>
                      {appTexts.STRING.signut}
                    </Text>
                  </View>
                )}

                <View style={styles.GetText}>
                  <Text style={styles.backText}>{appTexts.STRING.getstar}</Text>
                </View>
              </View>
              <View style={styles.signhello}>
                <View style={styles.borderphoneb}>
                  <View style={styles.phoneNo}>
                    <Text style={styles.phoneStyle}>
                      {appTexts.STRING.firstname}
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
                        autoFocus={false}
                        value={firstname}
                        onChangeText={val => {
                          setFirstname(val);
                        }}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.borderphoneb}>
                  <View style={styles.phoneNo}>
                    <Text style={styles.phoneStyle}>
                      {appTexts.STRING.middlename}
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
                        value={middlename}
                        onChangeText={val => {
                          setMiddlename(val);
                        }}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.borderphoneb}>
                  <View style={styles.phoneNo}>
                    <Text style={styles.phoneStyle}>
                      {appTexts.STRING.lastname}
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
                        value={lastname}
                        onChangeText={val => {
                          setLastname(val);
                        }}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.borderphoneb}>
                  <View style={styles.phoneNo}>
                    <Text style={styles.phoneStyle}>
                      {appTexts.STRING.emailaddress}
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
                        keyboardType="email-address"
                        value={email}
                        autoCapitalize="none"
                        onChangeText={val => {
                          setEmail(val);
                        }}
                      />
                    </View>
                  </View>
                </View>

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
                        style={styles.maskImage}
                      />
                      <View style={styles.inpPhone}>
                        <TextInput
                          editable={false}
                          style={styles.disableTextnum}
                          placeholder={'+973'}
                          placeholderTextColor="#282828"
                        />
                      </View>
                    </View>
                    <View style={styles.secondSection}>
                      <TextInput
                        style={[
                          styles.disableTextnum,
                          {
                            paddingTop: 0,
                            paddingBottom: 0,
                          },
                        ]}
                        placeholderTextColor="#242424"
                        keyboardType="number-pad"
                        value={mobile}
                        onChangeText={val => {
                          setMobile(val);
                        }}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.CodeView}>
                  <View style={styles.enterV}>
                    <View style={styles.calViews}>
                      <Text style={styles.phoneStyle}>
                        {appTexts.EDIT.birth}
                      </Text>
                      <Text style={styles.star}> *</Text>
                    </View>

                    <TextInput
                      style={[
                        styles.disableText,
                        {
                          paddingTop: 0,
                          paddingBottom: 0,
                        },
                      ]}
                      placeholderTextColor="#242424"
                      keyboardType="email-address"
                      value={bdate}
                      autoCapitalize="none"
                    />
                  </View>

                  <TouchableOpacity
                    onPress={() => {
                      onCalendarPress();
                    }}>
                    <Image source={images.cal} style={styles.calImage} />
                  </TouchableOpacity>
                </View>

                <View style={styles.genderLine}>
                  <TouchableOpacity
                    onPress={() => {
                      setGender('Male');
                    }}
                    style={{ flexDirection: 'row' }}>
                    <View style={styles.checkImage}>
                      <Image
                        source={
                          gender == 'Male' ? images.checkBox : images.check
                        }
                        style={styles.check}
                      />
                    </View>
                    <View style={styles.males}>
                      <Image source={images.male} style={styles.males} />
                    </View>
                    <View style={styles.mText}>
                      <Text style={styles.gText}>{appTexts.EDIT.male}</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      setGender('Female');
                    }}
                    style={{ flexDirection: 'row' }}>
                    <View style={styles.checkImage}>
                      <Image
                        source={
                          gender == 'Female' ? images.checkBox : images.check
                        }
                        style={styles.check}
                      />
                    </View>
                    <View style={styles.males}>
                      <Image source={images.female} style={styles.males} />
                    </View>
                    <View style={styles.mText}>
                      <Text style={styles.gText}>{appTexts.EDIT.female}</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={styles.semailView}>
                  <TouchableOpacity
                    onPress={() => {
                      onBoxClick();
                    }}>
                    <View style={styles.imag}>
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
                    </View>
                  </TouchableOpacity>
                  <View style={styles.TermsView}>
                    <Text style={styles.semailStyle}>
                      {appTexts.STRING.readand}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      onTermsClick();
                    }}>
                    <View style={styles.acceptView}>
                      <Text style={styles.semailStyleb}>
                        {appTexts.STRING.termsand}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <DateTimePicker
                  selectedDate={birthDate}
                  setSelectedDate={setSelectedDate}
                  mode={'date'}
                  isShowDatePicker={isShowDatePicker}
                  cancelClick={cancelClick}
                  doneClick={doneClick}
                  placeholder=" "
                />

                <View style={styles.buttonWrapper}>
                  <TouchableOpacity
                    onPress={() => {
                      signupPress();
                    }}>
                    <CustomButton buttonText={appTexts.STRING.signup} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.NewUser}>
              <Text style={styles.alreadyStyle}>
                {appTexts.STRING.alreadyhav}
              </Text>
              <View style={styles.ssignView}>
                <TouchableOpacity
                  onPress={() => {
                    submitMobileNumber();
                  }}>
                  <Text style={styles.ssign}>{appTexts.STRING.signin}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};

LoginView.propTypes = {
  loginButtonPress: PropTypes.func,
  setPhone: PropTypes.func,
};

export default LoginView;
