import {StyleSheet, I18nManager} from 'react-native';
import globals from '../../lib/globals';

const styles = StyleSheet.create({
  modalStyle: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  popupContainer: {
    width: '100%',
    flexDirection: 'column',
    backgroundColor: globals.COLOR.background,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 'auto',
    height: '95%',
  },
  closeContainer: {
    alignSelf: 'flex-end',
    paddingLeft: '3%',
  },
  popupClose: {
    // height: 30,
    width: 40,
    marginTop: 10,
  },
  pic: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
  },
  flatListStyle: {
    marginVertical: 20,
    marginLeft: '2%',
    width: '95%',
    marginBottom: 20,
  },
  nodataf:{
    textAlign:'center',
    fontFamily: I18nManager.isRTL
    ? globals.FONTS.notokufiArabic
    : globals.FONTS.cairoRegular,
  },
  noDataContainer: {
    height: 50,
  },
  loadMoreContainer: {
    margin: 15,
  },
});

export {styles};
