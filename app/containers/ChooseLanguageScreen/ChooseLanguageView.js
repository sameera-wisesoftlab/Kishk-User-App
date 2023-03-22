import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import globals from '../../lib/globals';
import appTexts from '../../lib/appTexts';
import { images, styles } from './styles';

import Header from '../../components/Header';

const ChooseLanguageView = props => {
  const { selectLanguage } = props;

  return (
    <View style={styles.screenMain}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={'transparent'}
        translucent={false}
      />
      <Header
        headerTitle={appTexts.SELECT_LANGUAGE.selectL}
        customHeaderStyle={{
          height: 35,
          bottom: 15,
          justifyContent: 'center',
          marginHorizontal: '7.5%',
          backgroundColor: globals.COLOR.headerColor,
        }}
      />
      {/* <View
        style={{
          flex: 1,
          borderBottomWidth: 0,
          borderColor: globals.COLOR.grey,

          shadowColor: globals.COLOR.grey,
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowRadius: 5,
          shadowOpacity: globals.INTEGER.opacityHigh,
          elevation: 10,
        }}> */}
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
        <View
          style={{
            flex: 1,
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
          }}>
          <View
            style={{
              flex: 1,
              width: '100%',
              height: '100%',
              position: 'absolute',
              overflow: 'hidden',
              marginTop: '5%',
              backgroundColor: '#fff',
              borderTopRightRadius: 25,
              borderTopLeftRadius: 25,
            }}>
            <Image
              source={images.backgroundImage}
              style={{
                resizeMode: 'cover',
                width: '100%',
                height: '95%',
                alignSelf: 'center',
                marginTop: 25,
              }}
            />
          </View>

          <View style={styles.imageContainer}>
            <Image source={images.boyImagegif} style={styles.logo} />
          </View>

          <View style={styles.languageContainer}>
            <View>
              <View style={styles.chooselanText}>
                <Text style={styles.chooseText}>{appTexts.STRING.Choose}</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                selectLanguage('EN');
              }}>
              <View style={styles.boxView}>
                <View style={styles.flagLine}>
                  <View style={styles.flagIon}>
                    <Image
                      style={styles.flagView}
                      source={images.redFlag}></Image>
                  </View>
                  <View style={styles.engText}>
                    <Text style={styles.engTexts}>English</Text>
                  </View>
                </View>
                <View style={styles.arrowv}>
                  <Image source={images.varrow} style={styles.varrow}></Image>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                selectLanguage('AR');
              }}>
              <View style={styles.boxView}>
                <View style={styles.flagLine}>
                  <View style={styles.flagIon}>
                    <Image
                      style={styles.flagView}
                      source={images.greenFlag}></Image>
                  </View>
                  <View style={styles.engText}>
                    <Text style={styles.engTexts}>عربى</Text>
                  </View>
                </View>
                <View style={styles.arrowv}>
                  <Image source={images.varrow} style={styles.varrow}></Image>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.design}>
              <Image source={images.design} style={styles.greenDesign}></Image>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

ChooseLanguageView.propTypes = {
  selectLanguage: PropTypes.func,
};

export default ChooseLanguageView;
{
}
