import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  I18nManager,
} from 'react-native';

import globals from '../../lib/globals';
import appTexts from '../../lib/appTexts';
import { images, styles } from './styles';
import CustomButton from '../../components/CustomButton';
import Header from '../../components/Header';
import Loader from '../../components/Loader';

const LoginView = props => {
  const {
    loginButtonPress,
    onBackButtonClick,
    signUpButtonPress,
    phone,
    validatePhone,
    setPhone,
    isLoading,
    onEmailSigninClick,
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
          onRightWordClick={onRightWordClick}
          isInitialPage={true}
          SignTitle={appTexts.STRING.skipfor}
          onBackButtonClick={onBackButtonClick}
          isLeftTitleRequired={true}
          title={appTexts.STRING.signin}
          customHeaderStyle={{
            alignItems: 'center',
            height: globals.INTEGER.headerHeight - 5,
            justifyContent: 'center',
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
          <ImageBackground
            source={images.backgroundImage}
            imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
            style={styles.bgroundImage}>
            <View style={styles.contentWrapperMain}>
              <View style={styles.contentWrapper}>
                <View style={styles.uer}>
                  <Text style={styles.contenttitle}>
                    {appTexts.STRING.HelloAgain}
                  </Text>
                </View>
                {!I18nManager.isRTL && (
                  <View style={styles.welView}>
                    <Text style={styles.contentHeader}>
                      {appTexts.STRING.Welcome}
                    </Text>
                  </View>
                )}
                {!I18nManager.isRTL && (
                  <View style={styles.bacView}>
                    <Text style={styles.backText}>{appTexts.STRING.backa}</Text>
                  </View>
                )}
              </View>

              <View style={styles.borderphone}>
                <View style={styles.phoneNo}>
                  <Text style={styles.phoneStyle}>
                    {appTexts.STRING.phonenumber}
                  </Text>
                </View>

                <View style={styles.phoneScetion}>
                  <View style={styles.firstSection}>
                    <Image
                      source={require('../../assets/images/ChooseLanguage/mask.png')}
                      style={styles.maskImage}
                    />
                    <View style={styles.inpPhone}>
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
                          paddingTop: 0,
                          paddingBottom: 0,
                        },
                      ]}
                      placeholderTextColor="#242424"
                      keyboardType="number-pad"
                      autoFocus={false}
                      value={phone}
                      onChangeText={num => {
                        validatePhone(false), setPhone(num);
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
              <View style={styles.orView}>
                <View style={styles.border} />
                <Text style={styles.orStyle}>{appTexts.STRING.or}</Text>
                <View style={styles.border} />
              </View>
              <TouchableOpacity
                onPress={() => {
                  onEmailSigninClick();
                }}>
                <View style={styles.semailView}>
                  <Text style={styles.semailStyle}>
                    {appTexts.STRING.semail}
                  </Text>
                </View>
              </TouchableOpacity>
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

LoginView.propTypes = {
  loginButtonPress: PropTypes.func,
  setPhone: PropTypes.func,
};

export default LoginView;
