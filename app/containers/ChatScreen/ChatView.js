import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import globals from '../../lib/globals';
import {styles} from './styles';
import appTexts from '../../lib/appTexts';
import Header from '../../components/Header';
import RoundButton from '../../components/RoundButton';

import ServiceWrapperAwait from '../../service/ServiceWrapperAwait';
import Loader from '../../components/Loader';
//import messaging from "@react-native-firebase/messaging";

const ChatView = props => {
  const {logoutButtonPress, chat_id, isFocused} = props;
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [chatTxt, setChatTxt] = useState('');

  let flatList = null;

  const chatData = async () => {
    const sAsyncWrapper = new ServiceWrapperAwait();

    const response = await sAsyncWrapper.get('api/support/' + chat_id, {
      language_attach: false,
      is_auth_required: true,
    });
    const data = new Promise((resolve, reject) => {
      try {
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });

    return data;
  };

  const submitChat = async () => {
    const sAsyncWrapper = new ServiceWrapperAwait();

    const response = await sAsyncWrapper.post('api/support/chat', {
      request_id: chat_id,
      message: chatTxt,
    });
    const data = new Promise((resolve, reject) => {
      try {
        resolve(response);
      } catch (err) {
        reject(err);
      }
    });

    return data;
  };

  useEffect(() => {
    // const unsubscribe = messaging().onMessage(async (remoteMessage) => {
    //   if( isFocused() ) {
    //     setLoader(true);
    //     const data_ = chatData();
    //     data_.then(dat => {
    //       if(dat.success == true) {
    //         setData(dat.data);
    //       } else {
    //         setData([]);
    //       }
    //       setLoader(false);
    //     })
    //   }
    // });

    setLoader(true);
    const data = chatData();
    data.then(data => {
      if (data.success == true) {
        setData(data.data);
      } else {
        setData([]);
      }
      setLoader(false);
    });
  }, [chat_id]);

  const renderchat = item => {
    if (item.user_type == 'admin') {
      return (
        <View style={styles.toWrapper}>
          <View style={styles.toChat}>
            <Text style={styles.tochatText}>{item.message}</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.fromWrapper}>
          <View style={styles.fromChat}>
            <Text style={styles.fromchatText}>{item.message}</Text>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.screenMain}>
      {loader && <Loader />}

      <Header
        navigation={props.navigation}
        isLogoRequired={false}
        isLeftTitleRequired={true}
        title={appTexts.CHAT.Type}
        isBackButtonRequired={true}
        customHeaderStyle={{
          height: globals.INTEGER.headerHeight,
          // alignItems: "center",
          backgroundColor: globals.COLOR.headerColor,
        }}
        onBackButtonClick={() => props.navigation.goBack()}
      />
      {/* <ScrollView> */}
      <View style={{flex: 1, marginTop: 5}}>
        <FlatList
          ref={ref => (flatList = ref)}
          onContentSizeChange={() => flatList.scrollToEnd({animated: true})}
          onLayout={() => flatList.scrollToEnd({animated: true})}
          data={data}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => renderchat(item)}
        />
      </View>

      <KeyboardAvoidingView
        keyboardShouldPersistTaps="always"
        behavior={'padding'}>
        <View style={{marginBottom: 10}}>
          <View style={styles.typeMessage}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <TextInput
                style={styles.inputmessage}
                underlineColorAndroid="transparent"
                placeholder={appTexts.CHAT.placeholder}
                placeholderTextColor="#C9C9C9"
                autoCapitalize="none"
                value={chatTxt}
                onChangeText={txt => setChatTxt(txt)}
                textAlignVertical="top"
                multiline={true}
              />
            </TouchableWithoutFeedback>
          </View>

          <View style={styles.buttonWrappers}>
            <RoundButton
              buttonPosition={'center'}
              buttonText={appTexts.CHAT.Send}
              buttonClick={() => {
                setLoader(true);
                const resp = submitChat();
                resp.then(data => {
                  setLoader(false);
                  setChatTxt('');
                  const _chat_data = chatData();
                  _chat_data.then(_data => {
                    if (_data.success == true) {
                      setData(_data.data);
                    }
                    setLoader(false);
                  });
                });
              }}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
      {/* </ScrollView> */}
    </View>
  );
};

ChatView.propTypes = {
  logoutButtonPress: PropTypes.func,
};

export default ChatView;
