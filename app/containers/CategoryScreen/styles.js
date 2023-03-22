import {StyleSheet, I18nManager} from 'react-native';
import globals from '../../lib/globals';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

let headerButtonContainerWidth =
  globals.SCREEN_SIZE.width - globals.MARGIN.marginTen * 2;
let headerButtonWidth =
  (headerButtonContainerWidth - globals.MARGIN.marginTen * 2) / 3;

const images = {};

const styles = StyleSheet.create({
  screenMain: {
    flex: 1,

    flexDirection: 'column',
    backgroundColor: 'white',
    // backgroundColor: globals.COLOR.screenBackground
  },
  screenContainerScrollView: {
    //width: globals.SCREEN_SIZE.width,
    // height: globals.SCREEN_SIZE.height ,
    backgroundColor: 'white',
    flex: 1,
  },

  screenDesignContainer: {
    width: globals.SCREEN_SIZE.width,
    paddingBottom: globals.INTEGER.screenPaddingFromFooter,
    backgroundColor: globals.COLOR.background,
    height: globals.SCREEN_SIZE.height,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: globals.INTEGER.opacityHigh,
    elevation: Platform.OS === 'ios' ? 1 : 5,
    borderColor: globals.COLOR.lightgrey,
  },
  scroll: {
    flex: 1,
    width: wp('60%'),
  },
  head: {
    marginLeft: wp('25%'), // wp('5%'),
    marginRight: wp('12%'),
    width: wp('40%'),
    // paddingLeft:'5%',
    // paddingRight: '13%',
    height: 50,
  },
  row: {
    //flex:1,
    alignSelf: 'stretch',
    // width:'40%',
    height: 50,
    backgroundColor: 'white',
    borderBottomColor: globals.COLOR.background,
    borderBottomWidth: 0.25,
    // borderRightColor:globals.COLOR.greyText,
    // borderRightWidth:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeRow: {
    backgroundColor: globals.COLOR.background,
    borderRightWidth: 0,
  },
  rowTouch: {
    width: '100%',
  },
  rowText: {
    color: globals.COLOR.greyText,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: 14,
    textAlign: 'left',
    width: '90%',
    marginLeft: 10,
  },
  listContainer: {
    //width:wp('60%'),
    marginLeft: wp('2%'),
    marginRight: wp('5%'),
    //height:'100%'
  },
  heading: {
    marginLeft: '2%',
    marginRight: '2%',
    // paddingTop:'5%'
  },
  botList: {
    flex: 1,
  },
  topList: {
    minHeight:510,
    //marginBottom:'15%'
  },
  redLine: {
    height: hp('.5%'),
    backgroundColor: 'red',
    width: wp('35%'),
  },
  rowStyle: {
    width: wp('35%'),
    height: '100%',
    // borderRightWidth: 1,
    // borderRightColor: globals.COLOR.greyText,
    backgroundColor: 'white',
  },
  categoryRightLink: {
    right: 30,
    minWidth: '60%',
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: globals.COLOR.red,
    height: 30,
    bottom: 8,
  },
  linkLabelRed: {
    top: 0,
    color: globals.COLOR.darkRed,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: I18nManager.isRTL ? 11 : 13,
  },
  nameLabelCat: {
    top: 0,
    color: globals.COLOR.red,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: 15,
  },
});

export {images, styles};
