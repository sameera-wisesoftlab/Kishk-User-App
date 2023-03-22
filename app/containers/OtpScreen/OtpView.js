import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ImageBackground,
  TouchableWithoutFeedback,
  I18nManager,
} from 'react-native';

import { useRef, useState, useEffect } from 'react';
import { styles, images } from './styles';
import Header from '../../components/Header';
import globals from '../../lib/globals';
import appTexts from '../../lib/appTexts';
import CustomButton from '../../components/CustomButton';
import Loader from '../../components/Loader';
import moment from 'moment';

const LoginView = props => {
  const otpInput = useRef(null);

  const {
    loginButtonPress,
    onBackButtonClick,
    otp,
    setOtp,
    isLoading,
    resendOtpPress,
    send_to,
    timeLeft,
    setTimeLeft,
  } = props;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screenMain}>
        <Header
          isBackButtonRequired={true}
          onBackButtonClick={onBackButtonClick}
          isInitialPage={true}
          isLeftTitleRequired={true}
          title={appTexts.STRING.verifyAccount}
          customHeaderStyle={{
            height: globals.INTEGER.headerHeight,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '10%',
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
            shadowOffset: { width: 9, height: 5 },
            shadowOpacity: globals.INTEGER.opacityHigh,
            shadowRadius: 9,
            elevation: 2,
          }}>
          {props.isLoading && <Loader />}

          <ImageBackground
            source={images.backgroundImage}
            imageStyle={{
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
            style={styles.bgroundImage}>
            <View style={styles.formWrapper}>
              <View style={styles.contentWrapper}>
                <Text style={styles.contenttitle}>
                  {appTexts.STRING.VerifyY}
                </Text>
                {!I18nManager.isRTL && (
                  <View style={styles.verifyView}>
                    <Text style={styles.contentHeader}>
                      {appTexts.STRING.Accounta}
                    </Text>
                  </View>
                )}
                {!I18nManager.isRTL && (
                  <View style={styles.accView}>
                    <Text style={styles.backText}>
                      {appTexts.STRING.starts}
                    </Text>
                  </View>
                )}
              </View>
              <View style={styles.VerifyView1}>
                <Text style={styles.VerifyT}>
                  {appTexts.STRING.VerifyDes}
                  {send_to}.{appTexts.STRING.account}
                </Text>
              </View>
              <View style={styles.CodeView}>
                <View style={styles.enterV}>
                  <TextInput
                    editable={timeLeft !== 0}
                    maxLength={4}
                    style={[
                      styles.disableText,
                      {
                        paddingTop: 0,
                        paddingBottom: 0,
                      },
                    ]}
                    ref={otpInput}
                    value={otp}
                    placeholder={appTexts.STRING.enterC}
                    placeholderTextColor="gray"
                    keyboardType="number-pad"
                    autoFocus={false}
                    onChangeText={val => {
                      setOtp(val);
                    }}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    resendOtpPress();
                    setTimeLeft(120);
                  }}
                  disabled={timeLeft > 0}>
                  <View style={styles.resendV}>
                    {timeLeft > 0 ? (
                      <Text style={styles.ResendTgrey}>
                        {appTexts.STRING.resendC}
                      </Text>
                    ) : (
                        <Text style={styles.ResendT}>
                          {appTexts.STRING.resendC}
                        </Text>
                      )}
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.reseondCode}>
                <Text style={styles.resedText}> {appTexts.OTP.expires}</Text>
                <Text style={styles.resedtextOrange}>
                  {moment.utc(timeLeft * 1000).format('mm:ss')}
                </Text>
              </View>
              <View style={styles.buttonWrapper}>
                <TouchableOpacity
                  disabled={timeLeft < 1}
                  onPress={() => {
                    loginButtonPress();
                  }}>
                  <CustomButton
                    buttonText={appTexts.STRING.verifyText}
                    isOtp={timeLeft > 0}
                    isDisable={timeLeft < 1}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

LoginView.propTypes = {
  loginButtonPress: PropTypes.func,
  resednOtpPress: PropTypes.func,
  onBackButtonPress: PropTypes.func,
  otp: PropTypes.string,
  setOtp: PropTypes.func,
};

export default LoginView;
