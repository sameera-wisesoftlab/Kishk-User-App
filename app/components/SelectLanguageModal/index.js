import LinearGradient from "react-native-linear-gradient";
import React from 'react';
import { images, styles } from "./styles";
import { View, Text, TouchableOpacity, Image, TextInput, I18nManager } from 'react-native';
import globals from "../../lib/globals";
import appTexts from "../../lib/appTexts";
import PropTypes from 'prop-types';
import RNRestart from 'react-native-restart';
import Modal from 'react-native-modal';

const SelectLanguageModal = (props) => {

  const {
    isSelectLanguageModalVisible,
    SelectLanguagecloseModal,
    selectLanguage,
    languageSelected

  } = props;

  return (
    <Modal
      isVisible={isSelectLanguageModalVisible}
      style={styles.modalMaincontentHelp}

      animationIn="slideInUp"
      animationOut="slideOutRight"
      onSwipeComplete={SelectLanguagecloseModal}
      swipeDirection={["left", "right", "up", "down"]}
    >
      <View style={styles.modalmainviewHelp}>

        <TouchableOpacity onPress={() => { SelectLanguagecloseModal(); }}>
          <View style={styles.clo}>
            <Text style={styles.x}>X</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.headingLine}>
          <View style={styles.helptextWarpper}>
            <Text style={styles.helpheadaText}>{appTexts.SELECT_LANGUAGE.Choose}</Text>
          </View>
        </View>
        <View style={styles.languageContainer}>

          <TouchableOpacity onPress={() => {
            selectLanguage("EN");
          }}
          >
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
                  <Image source={languageSelected === 'EN'? images.varrowred:images.varrowgrey} style={styles.varrow}></Image>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              selectLanguage("AR");
            }}
          >
            <View style={styles.boxView}>
              <View style={styles.flagLine}>
                <View style={styles.flagIon}>
                  <Image style={styles.flagView} source={images.greenFlag}></Image>
                </View>
                <View style={styles.engText}>
                  <Text style={styles.engTexts}>عربى</Text>
                </View>
              </View>
              <View style={styles.arrowv}>
              <Image source={languageSelected === 'AR'? images.varrowred:images.varrowgrey} style={styles.varrow}></Image>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.design}>
            <Image source={images.design} style={styles.greenDesign}></Image>
          </View>
        </View>
      </View>
    </Modal>
  );
};

SelectLanguageModal.propTypes = {
  toggleScanModal: PropTypes.func,
  isSelectLanguageModalVisible: PropTypes.bool
};

export default SelectLanguageModal;