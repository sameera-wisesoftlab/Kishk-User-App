import {StyleSheet, I18nManager} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import globals from '../../lib/globals';

let headerButtonContainerWidth =
  globals.SCREEN_SIZE.width - globals.MARGIN.marginTen * 2;
let headerButtonWidth =
  (headerButtonContainerWidth - globals.MARGIN.marginTen * 2) / 3;
const images = {
  addIcon: require('../../assets/images/Profile/Plusicon.png'),
};
const styles = StyleSheet.create({
  screenMain: {
    flex: 1,
    width: globals.SCREEN_SIZE.width,
    height: globals.SCREEN_SIZE.height,
    flexDirection: 'column',
  },
  imageContainer: {
    flex: 0.4,

    width: globals.SCREEN_SIZE.width,
    height: globals.SCREEN_SIZE.height,
    alignItems: 'center',
    paddingTop: '10%',
  },
  headerWrapper: {
    flex: 0.1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '4%',
  },
  languageContainer: {
    flex: 1,
    width: globals.SCREEN_SIZE.width,
    height: globals.SCREEN_SIZE.height,
    paddingTop: '25%',
  },
  imageWrapper: {
    paddingLeft: '5%',
  },
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  lineBorder: {
    height: hp('.2%'),
    backgroundColor: '#F6F6F6',
    marginLeft: '4%',
    marginRight: '4%',
  },
  formWrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  sendPhone: {
    flexDirection: 'row',
    paddingTop: '7%',
  },
  borderView: {
    width: '12%',
    height: 2,

    marginTop: 10,
    marginBottom: 5,
    backgroundColor: '#ff8001',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifyWrapper: {
    paddingLeft: '20%',
  },
  editText: {
    color: '#ff8001',
    paddingLeft: '6%',
    fontSize: 16,
  },
  arrowImage: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    paddingLeft: '5%',
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
  },
  addressCard: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: '20%',
  },
  digitCode: {
    fontSize: 17,
  },
  phoneImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  phoneNumber: {
    fontSize: 15,
  },
  enterDigit: {
    paddingTop: '25%',
  },
  reseondCode: {
    paddingTop: '9%',
  },
  buttonWrapper: {
    paddingTop: '20%',
  },
  submitText: {
    color: 'white',
  },

  logo: {
    width: 85,
    height: 82,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  imageMain: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
  },

  arrowWrapper: {
    flexDirection: 'row',
    paddingRight: '3%',
  },
  edit: {
    width: 30,
    height: 30,
  },

  container: {
    height: 60,
    marginTop: 3,
    alignItems: 'center',
    flexDirection: 'row',
  },
  myOrdersContainer: {
    marginLeft: '1%',
    marginTop: 8,

    width: '48%',
    marginRight: '1%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  myQuotationContainer: {
    marginTop: 8,
    width: '48%',
    marginRight: '1%',

    justifyContent: 'center',
    alignItems: 'center',
  },

  underLineStyle: {
    marginTop: 25,
    width: '85%',
    height: 3,

    backgroundColor: '#FF2C2C',
  },
  transparentUnderLineStyle: {
    marginTop: 25,
    width: '85%',
    height: 2,
  },
  orderLabel: {
    color: '#FF2C2C',

    fontSize: 15,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
  },
  inactiveLabel: {
    color: '#8B90A9',
    fontSize: 15,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
  },
  addAddress: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3%',
    borderRadius: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: globals.INTEGER.opacityLow,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  addressContainer: {
    paddingLeft: '5.5%',
    paddingRight: '5.5%',
    paddingTop: '3%',
  },
  addressText: {
    paddingLeft: '3%',
    paddingRight: '3%',

    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
  },
  listContainer: {
    //marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    //marginTop: hp('25%'),
    //flex: 1,
  },
  noDataText: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    color: '#FF2C2C',
    fontSize: 16,
    marginTop: hp('25%'),
  },
  noDataContainer: {
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
});

export {images, styles};
