import {StyleSheet, I18nManager} from 'react-native';
import globals from '../../lib/globals';
const images = {
  editIcon: require('../../assets/images/addressCard/edit.png'),
  homeIcon: require('../../assets/images/addressCard/home.png'),
  deleteIcon: require('../../assets/images/addressCard/Delete.png'),
  office: require('../../assets/images/addressCard/Office.png'),
  otherIcon: require('../../assets/images/addressCard/others.png'),
};
const styles = StyleSheet.create({
  fullWidthRowContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    width: globals.INTEGER.screenWidthWithMargin,
    height: 160,
    marginTop: 5,
    marginBottom: 7,
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 5,

    //borderRadius:10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: globals.INTEGER.opacityLow,
    elevation: Platform.OS === 'ios' ? 1 : 3,
    borderColor: globals.COLOR.lightgrey,
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
    //backgroundColor: 'yellow'
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
    fontSize: 14,
    //marginLeft:8,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoSemiBold,
    textAlign: 'left',
  },
  addressText: {
    color: '#222222',
    fontSize: 13.5,
    //marginLeft:8,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
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
  },
  locationIcon: {
    width: 30,
    height: 30,
  },
  homeIcon: {
    width: 20,
    height: 20,
  },
  resIcon: {
    width: 18,
    height: 18,
  },
  personDetails: {
    marginTop: 4,
    marginBottom: 4,
  },
  addresswrapper: {
    flexDirection: 'row',
    paddingTop: 2,
    //marginTop: 8,
    paddingBottom: 2,
    //marginBottom: 4,
    //marginEnd: 2,
  },
});

export {styles, images};
