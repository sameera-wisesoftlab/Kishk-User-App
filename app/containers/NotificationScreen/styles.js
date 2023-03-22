import {StyleSheet, I18nManager, Platform} from 'react-native';
import globals from '../../lib/globals';

let headerButtonContainerWidth =
  globals.SCREEN_SIZE.width - globals.MARGIN.marginTen * 2;
let headerButtonWidth =
  (headerButtonContainerWidth - globals.MARGIN.marginTen * 2) / 3;

const images = {
  // settingsButton: require("../../assets/images/listCard/check-box-active.png"),
  // dot: require("../../assets/images/profileicon/Dot.png"),
  // noti: require("../../assets/images/listCard/Notify.png"),
};

const styles = StyleSheet.create({
  descritpionText: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    textAlign: 'left',
    fontSize: 13,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  screenContainer: {
    marginTop: 5,
    //width: globals.INTEGER.screenWidthWithMargin,
    width: globals.INTEGER.screenWidth,
    // height: globals.INTEGER.screenContentHeight - 5 + globals.INTEGER.footerTabBarHeight,
    //height: globals.INTEGER.screenContentHeight,
    //marginLeft: globals.INTEGER.leftRightMargin,

    //width: globals.SCREEN_SIZE.width,
    //height: globals.SCREEN_SIZE.height,
    backgroundColor: globals.COLOR.background,
    borderRadius: 30,
    flex: 1,
    // marginBottom:'80%'
  },
  screenMain: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  timeText: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.avenirLight,
    fontSize: 12,
    color: '#919191',
  },
  completedescritpionText: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    fontSize: 12,
    color: globals.COLOR.red,
  },
  readText: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    fontSize: 12,
    color: 'grey',
  },
  redText: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    fontSize: 12,
    color: globals.COLOR.red,
  },
  descritpionView: {
    width: '100%',
    paddingTop: '2%',
    paddingBottom: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '3%',
  },
  descritpionViewDot: {
    width: '100%',
    paddingTop: '2%',
    paddingBottom: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingLeft: "5%",
  },
  notificationText: {
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '5%',
    // paddingBottom: "12%",
    height: '100%',
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: globals.COLOR.greyBackground,
  },
  settingText: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.avenirMedium,
    fontSize: 15,
  },
  firstWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    paddingRight: '2%',
    paddingTop: '5%',
  },
  delivreyAddress: {
    flexDirection: 'row',
    // justifyContent: "space-between",
    paddingTop: '4%',
    alignItems: 'center',
  },
  shadowContainerStyle: {
    // borderWidth: 0.5,
    marginBottom: '5%',
    marginHorizontal: '1%',
    borderRadius: 15,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: Platform.OS == 'ios' ? 0.2 : 1.0,
    elevation: 2,
    paddingLeft: '5%',
    paddingRight: '5%',
    backgroundColor: 'white',
  },
  box1: {
    width: '92%',
    marginLeft: '4%',
    marginRight: '4%',
    borderWidth: 0.5,
    borderRadius: 20,
    borderColor: 'white',
    backgroundColor: 'white',
    //height:'18%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
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
    backgroundColor: globals.COLOR.red,
    marginRight: '2%',
  },
  firstSection: {
    alignItems: 'center',
    // marginTop: "18%",
    height: '30%',
    backgroundColor: '#fff',
  },
  secondSection: {
    marginTop: '5%',
  },
  happyText: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    color: globals.COLOR.lightTextColor,
    fontSize: 22,
    textAlign: 'center',
  },
  dotno: {
    height: 8,
    width: 8,
    borderRadius: 30,
    backgroundColor: 'white',
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
  },
  lineTwo: {
    marginLeft: '10%',
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
    shadowOpacity: 0.22,
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
      : globals.FONTS.cairoRegular,
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

export {images, styles};
