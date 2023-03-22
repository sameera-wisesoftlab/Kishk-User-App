import LinearGradient from "react-native-linear-gradient";
import React from 'react';
import { images, styles } from "./styles";
import {  View, Text, TouchableOpacity,Image,TouchableHighlight } from 'react-native';
import globals from "../../lib/globals";
import appTexts from "../../lib/appTexts";
import PropTypes from 'prop-types';

import Modal from 'react-native-modal';


const LogoutModal = (props) => {

  const {
      isLogoutModalVisible,  
      logoutButtonPress,
      toggleLogoutModal,
      onLogoutClick,
      onCancelClick
      } = props;

  
  return (
    <Modal
        transparent={true}
        animationIn="slideInUp" 
          animationOut="slideOutRight" 
          onSwipeComplete={logoutButtonPress}
          swipeDirection={["left", "right", "up", "down"]}
          isVisible={isLogoutModalVisible}
          style={styles.modalMaincontentLogout}
        >
          <View style={styles.modalmainviewLogout}>
            <View style={styles.logText}>
              <Text style={styles.log}>{appTexts.LOGOUT.sure}</Text>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.butCancel} onPress={()=>{onCancelClick()}}>
              <View>
               <Text style={styles.cancelText}>{appTexts.LOGOUT.cancel}</Text> 
              </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.butLogout} onPress={()=>{onLogoutClick()}}>
              <View>
               <Text style={styles.logoutText}>{appTexts.LOGOUT.logout}</Text> 
              </View>
              </TouchableOpacity>
              
            </View>
              
          </View>
        </Modal>
  );
};

LogoutModal.propTypes = {

isLogoutModalVisible:PropTypes.bool,
logoutButtonPress:PropTypes.func,
toggleLogoutModal:PropTypes.func,
};

export default LogoutModal;