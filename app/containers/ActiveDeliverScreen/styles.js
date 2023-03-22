import {StyleSheet, I18nManager, Platform} from 'react-native';
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

  // supportIcon: require("../../assets/images/profileicon/support.png"),
  // logoutIcon:require("../../assets/images/profileicon/logout.png"),
  // arrowIcon:require("../../assets/images/profileicon/arrow.png"),
  // pencil:require("../../assets/images/profileicon/Edit.png"),

  // phone:require('../../assets/images/profileicon/Phone.png'),
  // mail:require('../../assets/images/profileicon/mail.png'),
  // close:require("../../assets/images/profileicon/cloo.png"),
  // main:require("../../assets/images/temp/main.png"),
  // cam:require("../../assets/images/Icons/camera.png"),

  // language:require('../../assets/images/profileicon/language.png'),
};
const styles = StyleSheet.create({
  screenMain: {
    flex: 1,
    width: globals.SCREEN_SIZE.width,
    height: globals.SCREEN_SIZE.height,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 0.4,
    //backgroundColor:'red',
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
    //backgroundColor:'green',
    width: globals.SCREEN_SIZE.width,
    height: globals.SCREEN_SIZE.height,
    //alignItems: 'center',
    paddingTop: '25%',
  },
  imageWrapper: {
    paddingLeft: '5%',
  },
  screenContainer: {
    flex: 1,
    //backgroundColor: 'globals.COLOR.transparent',
    backgroundColor: 'white',
    // marginBottom: globals.INTEGER.screenBottom
  },
  screenContainerScrollView: {
    width: globals.SCREEN_SIZE.width,
    height: globals.SCREEN_SIZE.height,
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
  otpWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    paddingTop: 5,
  },
  engButton: {
    width: 142,
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff8001',
  },
  borderView: {
    width: '12%',
    height: 2,
    //borderRadius: 5,
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: '#ff8001',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    paddingLeft: 0,
    height: 40,
    fontSize: 13,
    width: '15%',
    borderColor: 'gray',
    borderBottomWidth: 1.5,
    textAlign: 'center',
  },
  verifyText: {
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    fontSize: hp('2.4%'),
    color: '#232020',
    fontWeight: 'bold',
    fontFamily: globals.FONTS.avenirMedium,
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
  contentWrapper: {
    paddingTop: hp('2%'),
    //borderBottomWidth:1,
    //borderBottomColor:'red',
    //paddingLeft:4
  },
  headingText: {
    fontSize: hp('2.1%'),
    color: '#232020',
    fontFamily: globals.FONTS.avenirMedium,
  },
  descriptionText: {
    paddingTop: hp('1.5%'),
    fontSize: hp('1.8%'),
    color: '#232020',
    lineHeight: 22,
    fontFamily: globals.FONTS.avenirMedium,
  },
  profileWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '1%',
    paddingRight: '1%',
    //flex:1,
    //backgroundColor:'green'

    //alignItems:'center'
  },
  editSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  imageSection: {
    paddingLeft: '3%',
    //borderRadius: 40,
  },
  editButton: {
    paddingRight: '4%',
    paddingTop: hp('1.5%'),
  },
  detailsWrapper: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingLeft: '5%',
  },
  phoneLine: {flexDirection: 'row', width: '100%'},
  phoneIcon: {paddingRight: '5%', alignSelf: 'center'},
  emailLine: {flexDirection: 'row'},
  emailIcon: {paddingRight: '5%', alignSelf: 'center'},
  borderView: {justifyContent: 'center', flexDirection: 'row'},
  mainView: {flexDirection: 'row', justifyContent: 'center'},
  closeStyle: {resizeMode: 'contain', width: 30, height: 30},
  camStyle: {
    height: 26,
    width: 26,
    marginLeft: 6,
    position: 'absolute',
    alignSelf: 'center',
    top: 82,
  },
  mainViewStyle: {
    width: '25%',
    height: 3,
    borderRadius: 5,
    marginTop: hp('0.5%'),
    //marginBottom: hp('1%'),
    backgroundColor: '#FFF0F5',
  },
  borderStyle: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: 'lightgray',
    marginLeft: '16%',
    marginTop: -15,
    //borderRadius: 0.2,
    //borderStyle: "dashed",
    // opacity: 0.5,
    // zIndex: 0,
    // marginTop: hp("1.3%"),
    // marginBottom: hp("1%"),
  },
  logo: {
    width: 85,
    height: 82,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  modallogo: {
    width: 100,
    height: 97,
    resizeMode: 'cover',
    borderRadius: 18,
    alignSelf: 'center',
  },
  modalimageWarpper: {
    //backgroundColor:'red'
    alignSelf: 'center',
  },
  Name: {
    fontSize: 16,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.openSansSemiBold,
    textAlign: 'left',
  },
  Email: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.openSansSemiBold,
    fontSize: 13,
    color: '#707070',
  },

  Phone: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.openSansSemiBold,
    fontSize: 13,
    color: '#707070',
  },
  editName: {
    fontFamily: globals.FONTS.avenirHeavy,
    fontSize: hp('1.7%'),
    color: '#ff8001',
  },
  listWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //paddingTop:hp('3%'),
    paddingBottom: hp('5%'),
    paddingLeft: '3%',
  },
  mainList: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.openSansLight,
    //paddingTop:hp('80%'),
    //marginTop:15,
    //backgroundColor:'gray',
    paddingTop: 20,
    flex: 1,
  },
  imageMain: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
  },
  contentHeading: {
    fontFamily: globals.FONTS.avenirMedium,
    fontSize: hp('2%'),
    paddingLeft: '4%',
    paddingRight: '4%',
    //color:'#707070'
  },
  contentsWrapper: {
    //paddingLeft:'8%'
  },
  imagemainWrapper: {
    //paddingLeft:'5%'
  },
  arrowWrapper: {
    flexDirection: 'row',
    paddingRight: '3%',
  },
  edit: {
    width: 30,
    height: 30,
  },
  firstprofileWrapper: {
    backgroundColor: 'lightgray',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    // height:50,
    height: hp('92%'),
  },
  insidecontentWrapper: {
    backgroundColor: 'white',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    height: hp('60%'),
  },

  accountName: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    color: 'white',
  },
  profilewraperOne: {
    //backgroundColor:'lightgray',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  container: {
    //width: globals.INTEGER.screenWidthWithMargin,
    height: 60,
    marginTop: 3,
    alignItems: 'center',
    flexDirection: 'row',
    //backgroundColor:'pink'
  },
  myOrdersContainer: {
    marginLeft: '1%',
    marginTop: 8,
    //height: 32,
    width: '48%',
    marginRight: '1%',
    //backgroundColor: 'red',
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  myQuotationContainer: {
    //height: 32,
    marginTop: 8,
    width: '48%',
    marginRight: '1%',
    //backgroundColor:'green',
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  underLineStyle: {
    marginTop: 25,
    width: '85%',
    height: 3,
    //borderRadius:2,
    backgroundColor: '#FF2C2C',
  },
  transparentUnderLineStyle: {
    marginTop: 25,
    width: '85%',
    height: 2,
    //borderRadius: 2,
    //backgroundColor: 'gray'
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

    //borderRadius:10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: globals.INTEGER.opacityLow,
    elevation: Platform.OS === 'ios' ? 1 : 2,
    //borderColor:globals.COLOR.lightgrey,
  },
  addressContainer: {
    paddingLeft: '5.5%',
    paddingRight: '5.5%',
    paddingTop: '3%',
  },
  addressText: {
    paddingLeft: '3%',
    paddingRight: '3%',
    //fontSize:15,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
  },
  listContainer: {
    marginTop: 5,
    flex: 1,
    backgroundColor: globals.COLOR.background,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  noDataContainer: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {images, styles};
