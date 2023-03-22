import { StyleSheet, I18nManager } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import globals from '../../lib/globals';

let headerButtonContainerWidth =
  globals.SCREEN_SIZE.width - globals.MARGIN.marginTen * 2;
let headerButtonWidth =
  (headerButtonContainerWidth - globals.MARGIN.marginTen * 2) / 3;

const images = {
  pro: require('../../assets/images/checkout/Profile-img.png'),
  saudi: require('../../assets/images/edit/flag.png'),
  check: require('../../assets/images/search/Radio.png'),
  checkBox: require('../../assets/images/search/radio-a.png'),
  male: require('../../assets/images/edit/Male.png'),
  cal: require('../../assets/images/edit/Calendar.png'),
  female: require('../../assets/images/edit/Female.png'),
  frame: require('../../assets/images/checkout/frame.png'),
  picon: require('../../assets/images/checkout/profile-image.jpg'),
  camere: require('../../assets/images/checkout/camera.png'),
  newF: require('../../assets/images/checkout/Group_19069.png'),
  NewC: require('../../assets/images/checkout/raphael_camera_flat-circle-white-on-red_96x96.png'),
};

const styles = StyleSheet.create({
  screenMain: {
    flex: 1,
    //    flexDirection:'column',
    backgroundColor: globals.COLOR.screenBackground,
  },
  screenContainerScrollView: {
    width: globals.SCREEN_SIZE.width,
    // height: globals.SCREEN_SIZE.height,
    backgroundColor: 'white',
    // flex:1,
    // marginBottom:heightPercentageToDP('15%')
  },

  screenDesignContainer: {
    width: globals.SCREEN_SIZE.width,
    // paddingBottom: globals.INTEGER.screenPaddingFromFooter,
    backgroundColor: globals.COLOR.background,
    // height: globals.SCREEN_SIZE.height,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    //flex:1,
  },
  textInpu: {
    width: '100%',
  },
  profilePic: {
    // flex:0.25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: heightPercentageToDP('2%'),
    paddingTop: heightPercentageToDP('2%'),
  },
  pro: {
    width: 140,
    height: 150,
  },
  male: {
    // height: 26,
    // width: 26,
    // marginLeft: 6,
    // position: 'absolute',
    // alignSelf: 'center',
    // top: 82,
  },
  editSection: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white',
    flex: 1,
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: heightPercentageToDP('2%'),
    // paddingTop:'8%',
    // paddingBottom:'5%',
  },

  boxView: {
    width: '100%',
    height: 80,
    borderWidth: 0.5,
    // marginTop:'8%',
    marginBottom: '5%',
    borderRadius: 5,
    borderColor: globals.COLOR.border,
    paddingLeft: '4%',
    paddingRight: '2%',
    paddingTop: '2%',
    //paddingBottom:'2%'
  },
  boxViewBirth: {
    width: '100%',
    height: 80,
    borderWidth: 0.5,
    // marginTop:'8%',
    marginBottom: heightPercentageToDP('4%'),
    borderRadius: 5,
    borderColor: globals.COLOR.border,
    paddingLeft: '4%',
    paddingRight: '2%',
    paddingTop: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  calImage: {
    width: 30,
    height: 30,
  },
  name: {
    color: globals.COLOR.greyText,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: 14,
    textAlign: 'left',
  },
  input: {
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: 17,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  flagLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagSaudi: {
    width: 28,
    height: 16,
    borderRadius: 5,
  },
  disable: {
    paddingLeft: '2%',
  },
  calView: {
    flexDirection: 'row',
  },
  disText: {
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: 16,
  },
  txt: {
    paddingLeft: '2%',
    width: I18nManager.isRTL ? '26%' : '80%',
  },
  txtin: {
    color: globals.COLOR.text,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: 16,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    // backgroundColor:'red'
  },
  star: {
    color: 'red',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: 16,
  },
  mail: {
    flexDirection: 'row',
  },
  genderLine: {
    flexDirection: 'row',
    alignItems: 'center',
    // flex:2
    marginBottom: heightPercentageToDP('18%'),
    //justifyContent:'center'
  },
  check: {
    width: 30,
    height: 30,
  },
  male: {
    height: 31,
    width: 31,
    marginLeft: 6,
    position: 'absolute',
    alignSelf: 'center',
    top: 78,
  },
  males: {
    width: 30,
    height: 30,
  },
  checkImage: {
    paddingRight: '5%',
  },
  mText: {
    paddingRight: '5%',
    justifyContent: 'center',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: 16,
    color: '#233249',
  },
  modalimageWarpper: {
    alignSelf: 'center',
    position: 'relative',
    top: -5,
    zIndex: 2,
  },
  cus: {
    marginTop: '2%',
  },
  modallogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 55,
    alignSelf: 'center',
  },
  frame: {
    width: 160,
    height: 150,
  },
});

export { images, styles };
