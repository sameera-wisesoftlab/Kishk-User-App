import {StyleSheet, I18nManager} from 'react-native';
import globals from '../../lib/globals';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const images = {
  downArrow: require('../../assets/images/cart/arrow.png'),
};

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
  closeContainer: {
    // width: '100%',
    // height: 50,
    alignItems: 'center',
    // alignSelf: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: '4%',
    // paddingRight:'3%',
    paddingLeft: '3%',
    //   //paddingTop:'2%',
    paddingBottom: '2%',
  },
  popupClose: {
    height: 30,
    width: 40,
    marginTop: 10,
  },
  pic: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
  },
  cancelStyle: {
    color: globals.COLOR.black,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoBold,
    fontSize: 16,
  },
  borderphoneb: {
    borderWidth: 1,
    marginHorizontal: '7.5%',
    height: 64,
    width: 310,
    borderRadius: 5,
    borderColor: globals.COLOR.lightgrey,
    marginTop: 16,
    backgroundColor: globals.COLOR.backgroundColor,
  },
  borderphonebc: {
    borderWidth: 1,
    marginHorizontal: '7.5%',
    height: 160,
    width: 310,
    borderRadius: 5,
    borderColor: globals.COLOR.lightgrey,
    marginTop: 16,
    alignItems:'flex-start'
    //backgroundColor:'grey'
    //backgroundColor: globals.COLOR.backgroundColor,
  },
  modalHeader: {
    marginHorizontal: '6%',
  },
  phoneNo: {
    paddingLeft: '6%',
    marginTop: hp('.4%'),
  },
  phoneNoab: {
    paddingLeft: '6%',
    marginTop: hp('.4%'),
  },
  dropDownStyle: {
    borderColor: 'white',
    marginTop: 2,
    position: 'relative',
    zIndex: 10,
  },

  phoneStyle: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    color: globals.COLOR.grey,
    textAlign: 'left',
    fontSize: 12,
  },
  buttonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp('4%'),

    //paddingLeft:'7%'
  },
  phoneSectionb: {
   
    height: 40,
    width:'100%',
    flexWrap:'wrap'
  },
  phoneSectionbc: {
    height:100,
    marginLeft:5,
    marginRight:5,
    alignItems:'flex-start'
   // bottom: 45,
   // right: 4,
  },
  subjectSection1: {
    paddingLeft: 13,
    width:'100%',
    height:40,
    //flexBasis: '74%',
    alignItems: 'center',
    flexDirection: 'row',
    },
    messageSection:{
     right:5,
    // marginHorizontal:10,
      width:'100%',
      height:140,
      //flexBasis: '74%',
      alignSelf: 'flex-start',
      justifyContent:'flex-start', 
      flexDirection: 'row',
     // backgroundColor:'purple'
    },
  boxeserror: {
    bottom:'24%',
  
    height: 160,
    width: 310,
    borderRadius: 5,
    right:'2%'
  },
  boxerror: {
    borderWidth: 1.5,
    borderColor: 'red',
    height: 65,
    width: 310,
    borderRadius: 5,
    bottom: '65%',
    left: 3,
  },
  disableText: {
    fontSize: 15,
    color: globals.COLOR.blackTextColor,
    width: '100%',
    flexDirection: 'row',
    marginHorizontal:5,
    
   // marginLeft: 5,
    //  paddingLeft:I18nManager.isRTL ?'12%':0,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
  },
  arrow: {
    width: 13,
    height: 13,
    resizeMode: 'contain',
    tintColor: globals.COLOR.grey,
  },
  downArrow: {
    marginLeft: '10%',
    alignItems: 'center',
  },
});

export {images, styles};
