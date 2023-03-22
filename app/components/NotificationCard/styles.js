import {StyleSheet, I18nManager} from 'react-native';
import globals from '../../lib/globals';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  fullWidthRowContainer: {
    flex: 1,
    width: '100%',

    backgroundColor: globals.COLOR.background,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  fullContainer: {
    width: '100%',
    paddingBottom: hp('5%'),
    backgroundColor: globals.COLOR.headerColor,
    paddingTop: '5%',
  },
  TextView: {
    fontSize: 15,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    color: globals.COLOR.black,
    textAlign: 'left',
  },
  TextViewLight: {
    fontSize: 15,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    color: globals.COLOR.black,
  },
  TextViewLightText: {
    fontSize: 13,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    color: globals.COLOR.black,
  },
  box1: {
    width: '92%',
    height: '83%',
    marginLeft: '4%',
    marginRight: '4%',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'white',
    backgroundColor: 'white',
    //height:'18%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: globals.INTEGER.opacityHigh,
    shadowRadius: 2.22,
    elevation: 1,
    //elevation: 2,
    marginTop: '5%',
  },
  lineOne: {
    flexDirection: 'row',
    marginTop: '2%',
    flexWrap: 'nowrap',
    marginLeft: '5%',
    alignItems: 'center',
    width: '70%',
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 30,
    backgroundColor: 'black',
  },
  textOne: {
    paddingLeft: '2%',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
  },
  textOnes: {
    paddingLeft: '8%',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
  },
  textOneStyle: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    color: globals.COLOR.black,
  },
  lineTwo: {
    marginLeft: '6%',
    marginRight: '4%',
    marginTop: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '3%',
  },
  min: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    color: globals.COLOR.greyText,
  },
  min1: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    color: globals.COLOR.custombuttoncolor,
  },
  box2: {
    width: '92%',
    marginLeft: '4%',
    marginRight: '4%',
    borderWidth: 0.5,
    borderRadius: 20,
    borderColor: 'white',
    backgroundColor: 'white',
    //height:'30%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: globals.INTEGER.opacityLow,
    shadowRadius: 2.22,
    elevation: 3,
    //elevation: 2,
    marginTop: '4%',
  },
  textLightStyle: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    color: globals.COLOR.greyText,
    fontSize: 14,
  },

  textBoldStyle: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoBold,
    color: globals.COLOR.greyText,
    fontSize: 14,
  },
  lineOnes: {
    flexDirection: 'row',
    marginTop: '5%',
    flexWrap: 'nowrap',
    marginLeft: '8%',
    alignItems: 'center',
    width: '70%',
  },
  bottom: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: '10%',
  },
  notify: {
    height: 100,
    width: 100,
  },
});

export {styles};
