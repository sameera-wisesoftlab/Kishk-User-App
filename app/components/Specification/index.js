import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  I18nManager,
  FlatList,
  RefreshControl,
} from 'react-native';
import { styles } from './styles';
import appTexts from '../../lib/appTexts';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

let prdt_id = null;
let flatListRef = null;

const ContentProduct = props => {
  const {
    header,
    footer,
    normal_aatrs,
    description,
    product_id,
    isRefresh,
    onRefreshContent,
  } = props;

  if (prdt_id != product_id) {
    try {
      flatListRef.scrollToOffset({ animated: true, offset: 0 });
    } catch (err) { }
    prdt_id = product_id;
  }

  const [isSpecSelected, setIsSpecSelected] = useState(true);
  const [isDescSelected, setIsDescSelected] = useState(false);

  const specPress = () => {
    setIsSpecSelected(!isSpecSelected);
    setIsDescSelected(false);
  };

  const descPress = () => {
    setIsDescSelected(!isDescSelected);
    setIsSpecSelected(!isSpecSelected);
  };

  return (
    <View style={styles.specWrap}>
      <View style={{}}>
        <FlatList
          ref={list => (flatListRef = list)}
          data={normal_aatrs}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={
            <RefreshControl
              refreshing={isRefresh}
              onRefresh={onRefreshContent}
              tintColor={'red'}
              colors={['red']}
            />
          }
          renderItem={({ item, index }) => {
            if (isDescSelected) {
              return null;
            }
            return (
              console.log("@@@@@@@@@@@@@@@", item),
              <View style={styles.model}>
                {item.value != "" && <View style={styles.left}>
                  {item.value && <Text style={styles.mod}>{item.name}</Text>}
                </View>}
                {item.value != "" && <View style={styles.right}>
                  <Text style={styles.modno}>{item.value}</Text>
                </View>}
              </View>
            );
          }}
          ListHeaderComponent={
            <>
              {header}
              <View style={styles.specRow}>
                <TouchableOpacity
                  onPress={() => {
                    specPress();
                  }}>
                  <View style={styles.partOne}>
                    <Text
                      style={
                        isSpecSelected ? styles.selectedSpec : styles.spec
                      }>
                      {appTexts.PRODUCT.spec}
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    descPress();
                  }}>
                  <View style={styles.partTwo}>
                    <Text
                      style={
                        isDescSelected ? styles.selectedSpec : styles.spec
                      }>
                      {appTexts.PRODUCT.des}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={isSpecSelected ? styles.redLine : styles.greyLine} />
              <View
                style={isDescSelected ? styles.descLine : styles.descGrey}
              />

              {isDescSelected && description && (
                <View style={styles.description}>
                  <Text style={styles.para}>{description}</Text>
                </View>
              )}
            </>
          }
          ListFooterComponent={footer}
        />
      </View>
    </View>
  );
};

ContentProduct.propTypes = {
  item: PropTypes.object,
};

export default ContentProduct;
