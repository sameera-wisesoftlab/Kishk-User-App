import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { styles } from "./styles";
import appTexts from "../../../lib/appTexts";

const ProfileItem = (props) => {
  const { itemText, itemImage, onItemClick, arrowImage,languageText } = props;

  return (
    <View style={styles.itemConatiner}>
      <TouchableOpacity
        style={styles.listWrapper}
        onPress={() => {
          onItemClick();
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.imagemainWrapper}>
            <Image source={itemImage} style={styles.imageMain} />
          </View>
          <View style={styles.contentsWrapper}>
            <Text style={styles.contentHeading}>{itemText}</Text>
          </View>
        </View>
        <View style={styles.languageWrapper}>
        <Text style={styles.languageHeading}>{languageText}</Text>
        </View>
        <View style={styles.arrowWrapper}>
          <Image source={arrowImage} style={styles.arrowImage} />
        </View>
      
      </TouchableOpacity>
      {/* <View style={{borderBottomWidth:1,borderBottomColor:'red'}}/> */}
    </View>
  );
};
ProfileItem.propTypes = {
  itemText: PropTypes.string,
  itemImage: PropTypes.number,
  onItemClick: PropTypes.func,
  arrowImage: PropTypes.number,
  languageText:PropTypes.string,
};

export default ProfileItem;
