import {StyleSheet, I18nManager} from 'react-native';
import globals from '../../lib/globals';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const images = {};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#ffffff',
    // borderRadius: 10,
    // borderWidth: 1,
    // borderColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',

    // marginBottom: 10,
    // width:"50%",
    // overflow: 'hidden',
    marginHorizontal: 4,
  },
  leftTabView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  toptabs: {
    // flex: 1,
    // height:100,
    // justifyContent: 'center',
    // padding:10,
    // alignItems: 'center',
    width: '70%',
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
  middleTabView: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rightTabView: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  leftHeadingLabelView1: {
    //flexDirection: 'row',
    // justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  },
  leftHeadingLabelView2: {
    //flexDirection: 'row',
    // justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  nameLabel: {
    alignContent: 'center',
    // justifyContent: 'center',
    // height:20,
    color: globals.COLOR.black,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiarabicBold
      : globals.FONTS.cairoRegularBold,
    fontSize: 14,
    width: '100%',
  },
  measure1: {
    backgroundColor: '#EFEBEB',
    padding: 2,
    borderRadius: 5,
    width: 120,
    alignSelf: 'flex-start',
    height: 30,
    justifyContent: 'center',
  },
  measure: {
    backgroundColor: '#EFEBEB',
    padding: 2,
    borderRadius: 5,
    width: 120,
    alignSelf: 'flex-end',
    height: 30,
    justifyContent: 'center',
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
  linkText: {
    top: 0,
    color: globals.COLOR.linkTextColor,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: 12,
  },
  leftIcon: {
    width: 20,
    height: 20,
  },
  underLineStyle: {
    backgroundColor: globals.COLOR.themeGreen,
  },
  transparentUnderLineStyle: {
    marginTop: 5,
    width: '75%',
    height: 4,
    borderRadius: 2,
    backgroundColor: globals.COLOR.transparent,
  },
  underLineWidth: {
    width: '75%',
  },
  calenderFilterContainer: {
    marginLeft: '4%',
    width: '36%',
  },
  calenderFilterView: {
    width: '100%',
    height: 30,
    backgroundColor: globals.COLOR.headerColor,
    shadowColor: globals.COLOR.borderColor,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: globals.INTEGER.opacityMedium,
    shadowRadius: 0.5,
    elevation: 1,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
  },
  sortFilterIcon: {
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 40,
    height: 40,
  },
  dateText: {
    textAlign: 'left',
    color: globals.COLOR.textColor,
    fontFamily: I18nManager.isRTL
      ? globals.FONTS.notokufiArabic
      : globals.FONTS.cairoRegular,
    fontSize: 10,
  },
  arrowIcon: {
    position: 'absolute',
    right: 5,
    width: 10,
    height: 10,
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
  sortFilt: {
    borderWidth: 1,
    height: 42,
    width: 70,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    borderColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 6,
    //marginHorizontal:2
  },
  border: {
    borderRightWidth: 1,
    height: 18,

    borderColor: globals.COLOR.borderColor,
  },
});

export {images, styles};
