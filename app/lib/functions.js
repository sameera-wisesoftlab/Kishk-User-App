import {Alert} from 'react-native';
import globals from './globals';
import appTexts from './appTexts';
import Toast from 'react-native-toast-message';

const commonFunctions = {
  displayAlert: (alertTitle, alertMessage, from = 'N/F') => {
    let title = alertTitle ? alertTitle : appTexts.STRING.appName;
    Alert.alert(
      title,
      alertMessage,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  },
  displayAlertWithCallBack: (alertTitle, alertMessage, callBack) => {
    let title = alertTitle ? alertTitle : appTexts.STRING.appName;
    Alert.alert(
      title,
      alertMessage,
      [
        {
          text: 'OK',
          onPress: () => {
            callBack();
          },
        },
      ],
      {cancelable: false},
    );
  },
  displayToast: (type, position, title, message) => {
    Toast.show({
      type: type,
      position: position,
      text1: title,
      text2: message,
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 60,
      bottomOffset: 40,
    });
  },
  validatePassword: stringValue => {
    let returnObject = {
      isUpperLower: false,
      isLetter: false,
      isDigits: false,
      isSymbol: false,
      isValidLength: false,
    };
    if (stringValue.match(/[a-z]/g) || stringValue.match(/[A-Z]/g)) {
      returnObject.isLetter = true;
    }
    if (stringValue.match(/[a-z]/g) && stringValue.match(/[A-Z]/g)) {
      returnObject.isUpperLower = true;
    }
    if (stringValue.match(/[0-9]/g)) {
      returnObject.isDigits = true;
    }
    if (stringValue.match(/[^a-zA-Z\d]/g)) {
      returnObject.isSymbol = true;
    }
    if (stringValue.length >= 8) {
      returnObject.isValidLength = true;
    }
    return returnObject;
  },
  isValidEmail(emailTxt) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(emailTxt)) return true;
    else false;
  },
  isValidPhone(nameTxt) {
    let reg = /^[0-9]{6,10}$/;
    if (reg.test(nameTxt)) return true;
    else false;
  },
  isValidName(nameTxt) {
    let reg = /^[a-zA-Z ]{2,30}$/;
    if (reg.test(nameTxt)) return true;
    else false;
  },
};

export default commonFunctions;
