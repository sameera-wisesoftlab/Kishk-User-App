import React, { useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
  I18nManager,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import globals from '../../lib/globals';
import appTexts from '../../lib/appTexts';

import { styles } from './styles';
import Header from '../../components/Header';
import _ from 'lodash';
import CustomButton from '../../components/CustomButton';
import Loader from '../../components/Loader';
import HTML from 'react-native-render-html';
import NetInfo from '@react-native-community/netinfo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as termsPrivacyFaqActions from '../../actions/termsPrivacyFaqActions';
import * as LoginActions from '../../actions/LoginActions';
import FastImage from 'react-native-fast-image';
import { loginServiceActionSuccess } from '../../actions/LoginActions';

const AppIntrosliderloginScreen = props => {
  const renderItem = ({ item }) => {
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}>
        <SafeAreaView>
          {/* <Image source={{uri: item.image}} style={styles.image} /> */}
          <FastImage
            source={{
              uri: item.image,
              priority: FastImage.priority.normal,
              cache: FastImage.cacheControl.immutable,
            }}
            style={styles.image}
          />
          <View style={styles.titlestyle}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.Textwidth}>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        </SafeAreaView>
      </View>
    );
  };

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      props.smsStatusResponse();
    });

    return () => {
      unsubscribe();
    };
  }, [props.navigation]);

  //mounted
  useEffect(() => handleComponentMounted(), []);
  const handleComponentMounted = () => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        props.howToUse();
        props.smsStatusResponse();
      } else {
        functions.displayAlert(
          null,
          globals.ALERT_MESSAGES.noInternet,
          'Intro',
        );
      }
    });
  };

  //updated
  const handleComponentUpdated = () => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
      } else {
        functions.displayAlert(
          null,
          appTexts.ALERT_MESSAGES.noInternet,
          'Intro',
        );
      }
    });
  };

  const onBackButtonClick = () => {
    props.navigation.navigate('LangStackNavigator', {
      screen: 'ChooseLanguageScreen',
    });
  };

  const submitMobileNumber = () => {
    if (_.get(props, 'smsStatus.data.sms') === 'disable') {
      props.navigation.navigate('LoginStackNavigator', {
        screen: 'EmailLoginScreen',
      });
    } else {
      props.navigation.navigate('LoginStackNavigator', { screen: 'LoginScreen' });
    }
    props.resetSmsStatus();
  };

  const _data = props?.howToUseData || [];
  let _max = 0;
  try {
    _max = _data ? _data.length - 1 : -1;
  } catch (err) {
    _max = -1;
  }

  return (
    <View style={styles.screenMain}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={'transparent'}
        translucent={false}
      />
      <Header
        isBackButtonRequired={true}
        onBackButtonClick={onBackButtonClick}
        isInitialPage={true}
        isLeftTitleRequired={true}
        title={appTexts.APP_INTRO.KishkWel}
        customHeaderStyle={{
          height: globals.INTEGER.headerHeight,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '8%',
          backgroundColor: globals.COLOR.headerColor,
        }}
      />

      {/* {props.isLoading && <Loader />} */}
      <View style={styles.IntroView}>
        <AppIntroSlider
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showDoneButton={false}
          showNextButton={false}
          dotStyle={styles.dotA}
          activeDotStyle={styles.dotB}
          data={props.howToUseData}
          onSlideChange={(index, lastIndex) => {
            if (index == _max) {
              props.is_intro_finished(true);
            }
          }}
        />

        <View style={styles.loginButton}>
          <TouchableOpacity
            onPress={() => {
              submitMobileNumber();
            }}>
            <CustomButton buttonText={appTexts.STRING.getstar} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state, props) => {
  return {
    howToUseData: _.get(
      state,
      'termsFaqPrivacyReducer.howToUseDataReponse',
      '',
    ),
    isLoading: _.get(state, 'termsFaqPrivacyReducer.isLoading', ''),
    chosenLanguage: _.get(state, 'loginReducer.chosenLanguage', ''),
    smsStatus: _.get(state, 'loginReducer.smsstatus', ''),
    is_intro_finished: _.get(state, 'loginReducer.intro_finished', ''),
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      howToUse: termsPrivacyFaqActions.howToUseApp,
      smsStatusResponse: LoginActions.getSmsStatus,
      is_intro_finished: LoginActions.is_intro_finished,
      // resetSms: LoginActions.reset_SMS,
      resetSmsStatus: LoginActions.resetSmsStatus,
    },
    dispatch,
  );
};

const AppIntrosliderloginScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppIntrosliderloginScreen);

AppIntrosliderloginScreenWithRedux.navigationOptions = ({ navigation }) => ({
  header: null,
});

export default AppIntrosliderloginScreenWithRedux;
