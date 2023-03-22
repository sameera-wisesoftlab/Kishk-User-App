import LinearGradient from "react-native-linear-gradient";
import React from 'react';
import { images, styles } from "./styles";
import {  View, Text, TouchableOpacity,Image,TextInput } from 'react-native';
import globals from "../../lib/globals";
import appTexts from "../../lib/appTexts";
import PropTypes from 'prop-types';

import Modal from 'react-native-modal';

const LanguageModal = (props) => {

  const {
      isLanguageModalVisible,
      toggleLanguageModal,
      selectLanguage,
      languageSelected
      } = props;

  
  return (
    <Modal
        
        transparent={true}
          isVisible={isLanguageModalVisible}
          style={styles.modalMaincontentLogout}
        >
          <View style={styles.modalmainviewLogout}>
            <TouchableOpacity onPress={toggleLanguageModal}>
            <View style={styles.closeX}>
              <Text style={styles.xClose}>X</Text>
            </View>
              </TouchableOpacity>
              <View style={styles.logoutTextView}>
                <Text style={styles.logoutTetStyle}>{appTexts.PROFILE.Choose}</Text>
              </View>
              <TouchableOpacity onPress={() => {selectLanguage("EN")}} > 
              <View style={styles.boxView}>
                  <View style={styles.flagLine}>
                    <View style={styles.flagIon}>
                      <Image style={styles.flagView} source={images.redFlag}></Image>
                    </View>
                    <View style={styles.engText}>
                      <Text style={styles.engTexts}>English</Text>
                    </View>
                    
                  </View>
                  <View style={styles.arrowv}>
                  <Image source={languageSelected ==="EN"? images.radioOn : images.radioOff} style={styles.varrow}></Image>
                  </View>
                </View>
                </TouchableOpacity>
                <View style={styles.border}></View>
                <TouchableOpacity onPress={() => {selectLanguage("AR")}}> 
                <View style={styles.boxViewnew}>
                  <View style={styles.flagLine}>
                    <View style={styles.flagIon}>
                      <Image style={styles.flagView} source={images.sFlag}></Image>
                    </View>
                    <View style={styles.engText}>
                      <Text style={styles.engTexts}>عربى</Text>
                    </View>
                  </View>
                  <View style={styles.arrowv}>
                  <Image source={languageSelected ==="AR"? images.radioOn : images.radioOff} style={styles.varrow}></Image>
                  </View>
                </View>
                </TouchableOpacity>
           
                      </View>
        </Modal>
  );
};

LanguageModal.propTypes = {

isLanguageModalVisible:PropTypes.bool,
toggleLanguageModal:PropTypes.func,
selectLanguage:PropTypes.func,
};

export default LanguageModal;