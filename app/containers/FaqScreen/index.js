import React, {useEffect, Component} from 'react';
import {View, FlatList, I18nManager, BackHandler} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {connect} from 'react-redux';
import Modal from 'react-native-modal';
import {styles, images} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import globals from '../../lib/globals';
import appTexts from '../../lib/appTexts';
import FaqView from './FaqView';
import {bindActionCreators} from 'redux';
import * as TermsActions from '../../actions/termsPrivacyFaqActions';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Accordion from './Accordian';
import _ from 'lodash';
import Loader from '../../components/Loader';
const FaqScreen = props => {
  //will focus
  useEffect(() => {
    return props.navigation.addListener('focus', () => {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
        } else {
          functions.displayAlert(
            null,
            globals.ALERT_MESSAGES.noInternet,
            'Faq',
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
        props.FaqsData();
      } else {
        functions.displayAlert(null, globals.ALERT_MESSAGES.noInternet, 'Faq');
      }
    });
    BackHandler.addEventListener(
      'hardwareBackPress',
      (backPressed = () => {
        props.navigation.goBack();
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

  const handleComponentUnmount = () => {};

  //updated
  useEffect(() => handleComponentUpdated());

  const handleComponentUpdated = () => {};
  const onBackButtonPress = () => {
    props.navigation.goBack();
  };

  const lang = I18nManager.isRTL ? 'ar' : 'en';

  return (
    <View style={styles.screenMain}>
      <FaqView onBackButtonPress={onBackButtonPress} />
      <View style={{height: hp('.5%'), backgroundColor: '#f8f8f8'}}></View>
      <View style={styles.formWrapper}>
        {props.isLoading && <Loader />}
        <FlatList
          style={{
            flex: 1,
            marginBottom: 80,
            maxWidth: widthPercentageToDP('100%'),
          }}
          data={props.FaqsDetails.data}
          keyExtractor={item => props.FaqsDetails.data.indexOf(item).toString()}
          showsVerticalScrollIndicator={true}
          renderItem={({item, index, separators}) => (
            <Accordion
              title={item.lang[lang].question}
              data={item.lang[lang].answer}
            />
          )}
        />
      </View>
    </View>
  );
};
const mapStateToProps = (state, props) => {
  return {
    FaqsDetails: _.get(state, 'termsFaqPrivacyReducer.faqsAPIReponse', ''),
    languageSelected: _.get(state, 'loginReducer.selectedLanguage', ''),
    isLoading: _.get(state, 'termsFaqPrivacyReducer.isLoading', ''),
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      FaqsData: TermsActions.faqs,
    },
    dispatch,
  );
};

const faqScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FaqScreen);

faqScreenWithRedux.navigationOptions = ({navigation}) => ({
  header: null,
});

export default faqScreenWithRedux;
