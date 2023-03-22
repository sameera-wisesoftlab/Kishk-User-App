import {StyleSheet, I18nManager} from 'react-native';
import globals from '../../lib/globals';
const images = {
  editIcon: require('../../assets/images/addressCard/edit.png'),
  homeIcon: require('../../assets/images/addressCard/home.png'),
  homegIcon: require('../../assets/images/addressCard/homeg.png'),
  officegIcon: require('../../assets/images/addressCard/officeg.png'),
  office: require('../../assets/images/addressCard/Office.png'),
  greenTick: require('../../assets/images/addressCard/Card–2.png'),
  otherIcon: require('../../assets/images/addressCard/others.png'),
  othergIcon: require('../../assets/images/addressCard/pin.png'),
};
const styles = StyleSheet.create({
  fullWidthRowContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    width: globals.INTEGER.screenWidthWithMargin,
    // height: 155,
    marginTop: 5,
    marginBottom: 7,
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 5,
    borderColor: '#D0D0D0',
    borderWidth: 1,
  },
  rowContainerHome: {
    width: globals.INTEGER.screenWidthWithMargin,
    // height: 155,
    marginTop: 5,
    marginBottom: 7,
    backgroundColor: '#fafffa',
    padding: 8,
    borderRadius: 5,

    //borderRadius:10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: globals.INTEGER.opacityLow,
    //elevation: Platform.OS === 'ios' ? 1 : 3,
    borderColor: '#4CAF50',
    borderWidth: 1,
  },

  firstContainer: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    //alignItems:'flex-start',
    backgroundColor: 'red',
  },
  secondContainer: {
    width: '100%',
    height: 20,
    flexDirection: 'row',
    //backgroundColor: 'green'
  },
  thirdContainer: {
    width: '100%',
    height: 20,
    flexDirection: 'row',
  },

  textOne: {
    //textAlign: 'right',
    color: '#000000',
    fontSize: 12,
    marginLeft: 8,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
  },
  textOneHome: {
    //textAlign: 'right',
    color: '#4CAF50',
    fontSize: 12,
    marginLeft: 8,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
  },
  textTwo: {
    backgroundColor: '#E8E8E8',
    borderRadius: 6,
    color: '#000000',
    fontSize: 12,
    paddingLeft: 9,
    paddingRight: 9,
    marginLeft: 10,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
  },
  nameText: {
    color: '#222222',
    fontSize: 13,
    //marginLeft:8,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    textAlign: 'left',
  },
  addressText: {
    color: '#222222',
    fontSize: 13,
    //marginLeft:8,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    textAlign: 'left',
  },

  statusContainer: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  amountContainer: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  pendingdotView: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 5,
    backgroundColor: '#DB3236',
  },

  delivereddotView: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 5,
    backgroundColor: '#97B337',
  },
  accepteddotView: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 5,
    backgroundColor: '#1F9245',
  },
  deliveryscheduledotView: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 5,
    backgroundColor: '#FBA233',
  },
  addressLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '1.5%',
  },
  locationIcon: {
    width: 30,
    height: 30,
  },
  greenIcon: {
    width: 19,
    height: 19,
    resizeMode: 'contain',
  },
  resIcon: {
    width: 18,
    height: 18,
  },
  personDetails: {
    marginTop: 3,
    marginBottom: 3,
  },
  addresswrapper: {
    marginTop: 6,
    marginEnd: 2,
    flexDirection: 'row',
  },
  grayColor: {
    backgroundColor: '#E8E8E8',
    height: 14,
    width: 14,
    borderRadius: 8,
  },
  greenColor: {
    backgroundColor: '#4CAF50',
    height: 14,
    width: 14,
    borderRadius: 8,
  },
});

export {styles, images};
