import {StyleSheet, I18nManager} from 'react-native';
import globals from '../../lib/globals';

const images = {};

const styles = StyleSheet.create({
  modalStyle: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  popupContainer: {
    width: '100%',

    //	height: '100%',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // borderWidth: 1,
    // overflow:'hidden',
    marginTop: 'auto',

    //padding:'3%',
  },
  pic: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
  },
  dayText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '3%',
    bottom: '4%',
  },
  Tuetext: {
    paddingLeft: 8,
    width: 25,
    height: 25,
    borderRadius: 15,
    backgroundColor: globals.COLOR.custombuttoncolor,

    left: 4,
  },
  Tuetext2: {
    paddingLeft: 8,
    width: 25,
    height: 25,
    borderRadius: 15,
    backgroundColor: globals.COLOR.custombuttoncolor,
    right: 4,
  },
  fontView: {
    textAlign: 'left',
    color: '#000000',
    fontSize: 15,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
  },
  ratetextBox: {
    paddingBottom: '4%',
  },
  rateText: {
    textAlign: 'left',
    color: '#343438',
    fontSize: 15,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
  },
  fontViewText: {
    color: globals.COLOR.grey,
    fontSize: 14,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
  },
  fontText: {
    color: globals.COLOR.backgroundColor,
    fontSize: 14,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
  },
  fifthView: {
    left: 5,
  },
  TuetextView: {
    right: 4,
  },
  dayText1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 10,
  },
  closeContainer: {
    // width: '100%',
    // height: 50,
    // alignItems: 'flex-end',
    alignSelf: 'flex-end',

    paddingTop: '4%',
    // paddingRight:'3%',
    paddingLeft: '3%',
    //   //paddingTop:'2%',
    paddingBottom: '2%',
  },
  popupBackground: {
    width: '100%',
    height: '100%',
    backgroundColor: globals.COLOR.transparent,
    zIndex: 1,
  },
  popupContentContainer: {
    top: 0,
    position: 'absolute',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    zIndex: 3,
  },
  radio: {
    width: 30,
    height: 30,
  },
  popupContent: {
    height: '40%',
    width: '100%',
    backgroundColor: globals.COLOR.white,
    alignItems: 'flex-end',
  },
  popupClose: {
    height: 30,
    width: 40,
    marginTop: 10,
  },
  popupCloseText: {
    textAlign: 'center',
    color: globals.COLOR.lightTextColor,
    fontSize: 18,
  },
  lineTop: {
    width: 150,
    borderColor: globals.COLOR.greyBackground,
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: '28%',

    marginTop: '3%',
  },
  sortByText: {
    marginLeft: '5%',
    width: '95%',
    textAlign: 'left',
    color: globals.COLOR.Text,
    fontSize: 18,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
  },
  discountText: {
    textAlign: 'left',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: 16,
  },
  flatListStyle: {
    marginTop: 20,
    marginLeft: '5%',
    width: '95%',
    marginBottom: 20,
  },
  listItem: {
    width: '95%',
    height: 40,
  },
  square: {
    height: 10,
    width: 10,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  labelView: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
  },
  discountTextContainer: {
    width: '90%',
    height: 40,
    justifyContent: 'center',
  },
  textContainer: {
    marginLeft: '5%',
    marginRight: '5%',
    width: '90%',
    flexDirection: 'row',
  },
  favIconContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '10%',
    height: 40,
  },
  ratingWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: '2%',
    paddingBottom: '2%',
  },
  msgText: {
    fontSize: 12,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    color: '#818181',
  },
  borderphoneb: {
    borderWidth: 1,
    //marginHorizontal:"4%",
    height: 50,
    width: 320,
    borderRadius: 5,
    borderColor: globals.COLOR.lightgrey,
    //marginTop:10,
    //padding:10,
    backgroundColor: 'pink',
    //paddingLeft:'2%',
    //marginLeft:'5%'
  },
  phoneNo: {
    paddingLeft: '3%',
    paddingTop: '2%',
    //marginTop: hp('1%'),
  },
  phoneSectionb: {
    bottom: 8,

    right: 2,
  },
  secondSection1: {
    paddingLeft: 13,
    flexBasis: '74%',
    flexDirection: 'row',
  },
  boxView: {
    width: '100%',
    height: 160,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 3,
  },
  textView: {
    marginLeft: '3%',
    marginTop: '2%',
    flexDirection: 'row',
  },
  outsideWrapper: {
    paddingTop: '3%',
    paddingBottom: '5%',
  },
  inputMessages: {
    marginLeft: '3.4%',
    marginRight: '3%',
    //lineHeight:30,
    fontSize: 15,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    //backgroundColor:'red',
    flex: 1,
    textAlignVertical: 'top',
  },
  poBox: {paddingTop: '2%', paddingBottom: '2%'},
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '8%',
    paddingBottom: '2%',
  },
});

export {images, styles};
