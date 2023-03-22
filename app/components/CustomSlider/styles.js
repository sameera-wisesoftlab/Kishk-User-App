import { StyleSheet,I18nManager } from 'react-native';

export default StyleSheet.create({
  controlsContainer: {
    flexDirection:I18nManager.isRTL ? 'row-reverse':'row',
    alignItems: 'center',
 //transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
  },
  highThumbContainer: {
    position: 'absolute',
  },
  railsContainer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection:I18nManager.isRTL ? 'row-reverse':'row',
    alignItems: 'center',

  },
  labelFixedContainer: {
    //alignItems:I18nManager.isRTL ? 'flex-end':'flex-start',
  },
  labelFloatingContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems:I18nManager.isRTL ? 'flex-end':'flex-start',

  },
  touchableArea: {
    ...StyleSheet.absoluteFillObject,
  },
});

