import {StyleSheet, I18nManager} from 'react-native';
import globals from '../../lib/globals';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const images = {
  redFlag: require('../../assets/images/ChooseLanguage/union.png'),
  greenFlag: require('../../assets/images/ChooseLanguage/mask.png'),
  varrowred: require('../../assets/images/ChooseLanguage/radioa.png'),
  varrowgrey: require('../../assets/images/ChooseLanguage/Radio.png'),
};

const styles = StyleSheet.create({
  modalMaincontentHelp: {
    //justifyContent: "center",
    justifyContent: 'flex-end',
    margin: 0,
  },
  DineImage: {
    height: 40,
    width: 40,

    resizeMode: 'contain',
  },
  arrowImage: {
    height: 20,
    width: 20,
    marginLeft: '25%',
    tintColor: globals.COLOR.greyText,
    resizeMode: 'contain',
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
  },
  Outerview: {
    flexDirection: 'row',

    alignItems: 'center',
  },
  modalmainviewHelp: {
    backgroundColor: 'white',
    width: wp('90%'),
    height: wp('70%'),
    padding: '3%',
    marginBottom: '70%',
    alignSelf: 'center',
    //borderRadius: 10,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  border: {
    borderWidth: 2,
    borderColor: 'lightgrey',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '25%',
    marginRight: '20%',
    marginBottom: '3%',
  },
  clo: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: '2%',
  },

  headingLine: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '2%',
  },
  x: {
    color: globals.COLOR.greyText,
    fontSize: 18,
  },
  helptextWarpper: {
    flexDirection: 'row',
    //justifyContent:'center',
    paddingTop: hp('1%'),

    // width:'50%'
  },
  formWrapper: {
    marginHorizontal: '3%',
    borderWidth: 1,
    borderRadius: 5,
    height: '25%',
    borderColor: globals.COLOR.borderColor,
    marginVertical: '2%',
    padding: 10,
  },
  applytext: {
    paddingTop: hp('2%'),
    paddingBottom: hp('1.5%'),
    //paddingLeft:'10%',
    width: '25%',
  },
  textinp: {
    color: globals.COLOR.Text,
    textAlign: 'center',
    marginLeft: '20%',
  },
  resettext: {
    paddingTop: hp('2%'),
    paddingBottom: hp('1.5%'),
    //paddingLeft:'5%',
    width: '25%',
  },
  wholeView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '5%',
    marginHorizontal: '3%',
  },
  helpheadaText: {
    fontSize: 17,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    textAlign: 'left',
    color: globals.COLOR.black,
  },
  helpheadText: {
    fontSize: 15,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    textAlign: 'left',
    color: globals.COLOR.Text,
  },
  applyTexts: {
    fontSize: 13,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    textAlign: 'center',
    color: globals.COLOR.greyText,
  },
  doubText: {
    marginLeft: '10%',
  },

  resetTexts: {
    fontSize: 15,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    textAlign: 'center',
    color: globals.COLOR.greyText,
  },
  screenMain: {
    flex: 1,
    backgroundColor: globals.COLOR.headerColor,
    // backgroundColor:'yellow',
  },
  screenMainContainer: {
    position: 'absolute',
    top: 0,
    width: globals.SCREEN_SIZE.width,
    height: globals.SCREEN_SIZE.height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgroundImage: {
    flex: 0.99,
    resizeMode: 'cover',
    borderWidth: 3,
    borderBottomWidth: 0,
    borderColor: globals.COLOR.lightgrey,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowColor: globals.COLOR.grey,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: globals.INTEGER.opacityHigh,
    shadowRadius: 2,
  },
  imageContainer: {
    flex: 1,
    marginTop: hp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 230,
    height: 400,
    resizeMode: 'contain',
  },
  languageContainer: {
    flex: 1,
    marginTop: 5,
  },

  chooselanText: {
    marginVertical: hp('2%'),
  },
  chooseText: {
    // color:'black',
    //fontSize:16
    textAlign: 'center',
    fontSize: hp('2.8%'),
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    color: '#1d2226',
  },
  boxView: {
    height: 60,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '2%',
    marginHorizontal: '6%',
    borderRadius: 10,
    marginBottom: '2%',
    backgroundColor: globals.COLOR.backgroundColor,
  },
  flagLine: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  flagIon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flagView: {
    width: 38,
    height: 18,
    borderRadius: 8,
  },
  arrowv: {
    marginRight: '4%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  varrow: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
  },
  greenDesign: {
    marginTop: hp('10%'),
    width: 180,
    height: 260,
    resizeMode: 'contain',
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
  },
  engTexts: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    fontSize: 17,
  },

  engText: {
    paddingLeft: '12%',
  },

  // boxVies:{
  //     height:50,
  //     width:'95%',
  //     borderWidth:0.5,
  //     borderColor:'#707070',
  //     flexDirection:'row',
  //     justifyContent:'space-between',
  //           marginTop:'8%',
  //     borderRadius:5,

  //   marginLeft:'3%'
  //      },
  //      hinput: {
  //         //marginTop:-4
  //         // margin: 15,
  //         // height: 40,
  //         // borderColor: '#7a42f4',
  //         // borderWidth: 1
  //         fontFamily: globals.FONTS.openSansLight,
  //         fontSize: hp('2%'),
  //         textAlign: I18nManager.isRTL ? "right" : "left",
  //         color:"#707070",
  //         marginLeft:'2%'

  //       },
  //       arrowv:{
  //         marginRight:'4%',
  //         alignItems:'center',
  //         justifyContent:'center'
  //           },
  //           search:{
  //             width:20,
  //             height:20,
  //             alignSelf:'center'
  //           },
  listV: {
    marginTop: '5%',
  },
});

export {images, styles};
