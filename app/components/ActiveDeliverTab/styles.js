import {StyleSheet, I18nManager} from 'react-native';
import globals from '../../lib/globals';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const images = {};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 4,
  },
  mapListView: {
    borderWidth: 1,

    width: '95%',
    borderRadius: 12,
    borderColor: '#fff',
    backgroundColor: '#ffffff',
    // alignSelf:'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    //    paddingRight:30,
    paddingHorizontal: 5,
    marginHorizontal: 7,
    alignItems: 'center',
  },
  listMap: {
    flexDirection: 'row',
    height: 37,
    // alignSelf:'center',
    width: '70%',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  toptabselected: {
    // flex: 1,
    height: 43,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    width: '70%',
    borderBottomColor: globals.COLOR.red,

    //paddingHorizontal:15,
    // padding:10,
  },
  toptabs: {
    width: '70%',
  },

  middleTabView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftHeadingLabelView: {
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameLabel: {
    alignContent: 'center',
    justifyContent: 'center',
    // height:20,
    color: globals.COLOR.grey,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: 14,
  },
  nameLabelSelected: {
    alignContent: 'center',
    justifyContent: 'center',
    color: globals.COLOR.red,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: 14,
  },
});

export {images, styles};
