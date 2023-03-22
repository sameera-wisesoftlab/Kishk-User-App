import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import globals from '../../lib/globals';
import appTexts from '../../lib/appTexts';
import {images, styles} from './styles';
import CustomButton from '../../components/CustomButton';
import Header from '../../components/Header';
import Loader from '../../components/Loader';

const EmailLoginView = props => {
  const {
    loginButtonPress,
    onBackButtonClick,
    signUpButtonPress,
    mail,
    validateMail,
    setMail,
    isLoading,
    onPhoneLoginClick,
    onRightWordClick,
  } = props;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screenMain}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor={'transparent'}
          translucent={false}
        />

        <Header
          isBackButtonRequired={true}
          isRightWordsRequired={true}
          isInitialPage={true}
          onRightWordClick={onRightWordClick}
          SignTitle={appTexts.STRING.skipfor}
          onBackButtonClick={onBackButtonClick}
          isLeftTitleRequired={true}
          title={appTexts.STRING.signin}
          customHeaderStyle={{
            alignItems: 'center',
            height: globals.INTEGER.headerHeight - 5,
            justifyContent: 'center',
            //marginRight:"40%",
            backgroundColor: globals.COLOR.headerColor,
          }}
        />
        <View
          style={{
            flex: 1,
            borderBottomWidth: 0,
            borderColor: globals.COLOR.grey,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            shadowColor: globals.COLOR.grey,
            shadowOffset: {width: 9, height: 5},
            shadowOpacity: globals.INTEGER.opacityHigh,
            shadowRadius: 9,
            elevation: 2,
          }}>
          <ImageBackground
            source={images.backgroundImage}
            imageStyle={{borderTopLeftRadius: 20, borderTopRightRadius: 20}}
            style={styles.bgroundImage}>
            <View style={styles.contentWrapperMain}>
              <View style={styles.contentWrapper}>
                <Text style={styles.contenttitle}>
                  {appTexts.STRING.HelloAgain}
                </Text>
                <View style={styles.welView}>
                  <Text style={styles.contentHeader}>
                    {appTexts.STRING.Welcome}
                  </Text>
                </View>
                <View style={styles.bacView}>
                  <Text style={styles.backText}>{appTexts.STRING.backa}</Text>
                </View>
              </View>

              <View style={styles.borderphone}>
                <View style={styles.phoneNo}>
                  <Text style={styles.phoneStyle}>{appTexts.STRING.mail}</Text>
                </View>

                <View style={styles.phoneScetion}>
                  {/* <View style={styles.firstSection}>
            <Image
              source={require("../../assets/images/ChooseLanguage/mask.png")}
              style={styles.maskImage}
            />
            <View style={styles.inpPhone }>
              <TextInput
                editable={false}
                style={styles.disableText}
                placeholder={"+973"}
                placeholderTextColor="#282828"

              />
            </View>
          </View> */}
                  <View style={styles.secondSection}>
                    <TextInput
                      style={[
                        styles.disableText,
                        {
                          height: 30,
                          paddingTop: 0,
                          paddingBottom: 0,
                        },
                      ]}
                      placeholderTextColor="#242424"
                      keyboardType="email-address"
                      autoFocus={false}
                      value={mail}
                      onChangeText={mailid => {
                        validateMail(false), setMail(mailid);
                      }}
                    />
                  </View>
                </View>
              </View>
              {props.isLoading && <Loader />}
              <View style={styles.buttonWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    loginButtonPress();
                  }}>
                  <CustomButton buttonText={appTexts.STRING.Sign} />
                </TouchableOpacity>
              </View>
              {props.enableDisableStatusSMS === 'enable' ? (
                <View style={styles.orView}>
                  <View style={styles.border} />
                  {/* <Text style={styles.dotView}>----------------------------------</Text> */}
                  <Text style={styles.orStyle}> {appTexts.STRING.or} </Text>
                  <View style={styles.border} />
                  {/* <Text style={styles.dotView}>----------------------------------</Text> */}
                </View>
              ) : null}
              {props.enableDisableStatusSMS === 'enable' ? (
                <TouchableOpacity
                  onPress={() => {
                    onPhoneLoginClick();
                  }}>
                  <View style={styles.semailView}>
                    <Text style={styles.semailStyle}>
                      {appTexts.STRING.phonesignin}
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : null}
            </View>
            <View style={styles.NewUser}>
              <Text style={styles.semailStyle}>{appTexts.STRING.sNew}</Text>
              <View style={styles.ssignView}>
                <TouchableOpacity
                  onPress={() => {
                    signUpButtonPress();
                  }}>
                  <Text style={styles.ssign}>{appTexts.STRING.sUser}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

EmailLoginView.propTypes = {
  loginButtonPress: PropTypes.func,
  setPhone: PropTypes.func,
};

export default EmailLoginView;
