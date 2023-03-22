import React, { useEffect } from 'react';
import { View, I18nManager, BackHandler, ScrollView } from 'react-native';

import { connect } from 'react-redux';
import { styles } from './styles';
import globals from '../../lib/globals';
import NetInfo from '@react-native-community/netinfo';
import _ from 'lodash';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Loader from '../../components/Loader';
import { bindActionCreators } from 'redux';
import * as TermsActions from '../../actions/termsPrivacyFaqActions';
import Header from '../../components/Header';
import HTML from 'react-native-render-html';

const AboutAsScreen = props => {
  //will focus
  useEffect(() => {
    return props.navigation.addListener('focus', () => {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
        } else {
          functions.displayAlert(
            null,
            globals.ALERT_MESSAGES.noInternet,
            'About',
          );
        }
      });
    });
  }, [props.navigation]);

  //mounted
  useEffect(() => handleComponentMounted(), []);

  const handleComponentMounted = () => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        props.about();
      } else {
        functions.displayAlert(
          null,
          globals.ALERT_MESSAGES.noInternet,
          'About',
        );
      }
    });
    BackHandler.addEventListener(
      'hardwareBackPress',
      (backPressed = () => {
        props.navigation.goBack(null);
        return true;
      }),
    );
  };

  //unmount
  useEffect(() => {
    return () => {
      handleComponentUnmount();
    };
  }, []);

  const handleComponentUnmount = () => { };

  //updated
  useEffect(() => handleComponentUpdated());

  const handleComponentUpdated = () => { };

  const logoutButtonPress = () => {
    props.doLogout();
  };

  const onBackButtonClick = () => {
    props.navigation.goBack();
  };

  const lang = I18nManager.isRTL ? 'ar' : 'en';
  let _data = _.get(props, 'aboutas.data.lang', {})[lang];
  _data = typeof _data == 'undefined' ? {} : _data;

  let aboutAsData = '<html></html>';
  try {
    let html = _data.content.trim();
    html = html
      .replace(
        /<p><strong>/g,
        '<span style="marginTop:10;fontSize: 13;line-height:30px;font-weight:900;">',
      )
      .replace(/<\/strong><\/p>/g, '</span>')
      .replace(/<p>/g, '<br><p>')
      .replace('<br><p>', '<p>');
    const fontF =
      lang == 'ar' ? globals.FONTS.notokufiArabic : globals.FONTS.cairoRegular;
    aboutAsData =
      "<span style=\"color:'#323232';text-align:left;padding:10;fontSize: 13;lineHeight: 22;font-family:" +
      fontF +
      '">' +
      html +
      '</span>';
  } catch (err) {
    aboutAsData = '<html></html>';
  }

  return (
    <View style={styles.screenMain}>
      {props.isLoading && <Loader />}
      <Header
        navigation={props.navigation}
        isLeftTitleRequired={true}
        isBackButtonRequired={true}
        onBackButtonClick={onBackButtonClick}
        title={_data.title}
        customHeaderStyle={{
          height: globals.INTEGER.headerHeight,
          backgroundColor: globals.COLOR.headerColor,
        }}
      />
      <View style={{ height: hp('.5%'), backgroundColor: '#f8f8f8' }}></View>
      <ScrollView style={{ backgroundColor: 'white' }}>
        <View style={styles.formWrapper}>
          <View style={styles.contentWrapper}>
            {aboutAsData != '' && (
              <HTML
                containerStyle={styles.renderContents}
                source={{ html: aboutAsData }}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state, props) => {
  return {
    aboutas: _.get(state, 'termsFaqPrivacyReducer.aboutAPIReponse', ''),
    isLoading: _.get(state, 'termsFaqPrivacyReducer.isLoading', ''),
    languageSelected: _.get(state, 'loginReducer.selectedLanguage', ''),
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      about: TermsActions.aboutAs,
    },
    dispatch,
  );
};

const profileScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AboutAsScreen);

profileScreenWithRedux.navigationOptions = ({ navigation }) => ({
  header: null,
});

export default profileScreenWithRedux;
