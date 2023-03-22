import {StyleSheet, I18nManager} from 'react-native';
import globals from '../../lib/globals';

const images = {
  tick: require('../../assets/images/checkout/Calendar.png'),
  radio: require('../../assets/images/slider/round.png'),
  round: require('../../assets/images/search/Radio.png'),
};

const styles = StyleSheet.create({
  popupContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: globals.COLOR.transparent,
  },
  popupBackground: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: globals.COLOR.black,
    opacity: 0.5,
    //zIndex: 1
  },
  greenTick: {
    width: 30,
    height: 30,
  },
  popupContentContainer: {
    top: 0,
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
  },
  popupDialogContainer: {
    zIndex: 5,
    width: '88%',
    borderRadius: 10,
    backgroundColor: '#D0D0D0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  popupContent: {
    marginBottom: 10,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    //backgroundColor:'gray'
  },
  popupButtonContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    height: 42,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 28,
    paddingRight: 28,
  },
  popupButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  doneButton: {
    backgroundColor: globals.COLOR.custo,
    width: 100,
    height: 45,
    borderRadius: 10,
    backgroundColor: globals.COLOR.custombuttoncolor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButton: {
    //backgroundColor:globals.COLOR.custo,
    width: 100,
    height: 45,
    borderRadius: 10,
    borderColor: globals.COLOR.custombuttoncolor,
    //backgroundColor: '#F5F5F5',
    borderWidth: 0.5,
    //backgroundColor:globals.COLOR.custombuttoncolor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    // fontFamily: globals.FONTS.avenirMedium,
    fontSize: globals.FONTSIZE.fontSizeFifteen,
  },
  cancelText: {
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    // fontFamily: globals.FONTS.avenirMedium,
    fontSize: globals.FONTSIZE.fontSizeFifteen,
    color: globals.COLOR.custombuttoncolor,
  },

  modalMaincontentLogout: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalmainviewLogout: {
    backgroundColor: 'white',
    paddingBottom: '4%',
    paddingTop: '4%',
    paddingLeft: '2%',
    paddingRight: '2%',
    width: '96%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: globals.COLOR.red,
    borderWidth: 0.5,
    // opacity: 0.5,

    // zIndex: 5,
  },
  logText: {
    marginTop: '5%',
  },
  log: {
    color: globals.COLOR.custombuttoncolor,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoRegular,
    fontSize: I18nManager.isRTL ? 12 : 17,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10%',
    marginBottom: '10%',
    width: '90%',
    marginLeft: '10%',
    marginRight: '10%',
  },
  butCancel: {
    width: '48%',
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: globals.COLOR.lightgrey,
  },
  butLogout: {
    width: '48%',
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: globals.COLOR.red,
  },
  // cancelText: {
  //   color: globals.COLOR.text,
  //   fontFamily: I18nManager.isRTL
  //     ? globals.FONTS.notokufiarabic
  //     : globals.FONTS.cairoSemiBold,
  //   fontSize: 14,
  // },
  logoutText: {
    color: 'white',
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabic
      : globals.FONTS.cairoSemiBold,
    fontSize: 14,
  },
});

export {styles, images};
