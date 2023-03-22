import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity, I18nManager } from 'react-native';
import { styles, images } from './styles';

const CategoryFilterCard = props => {
  const { item, onCheckBoxChecked = () => { }, checkBox = false } = props;
  const { lang, product_count, id } = item;

  const [isCheckboxClicked, setIsCheckboxClicked] = useState(checkBox);

  const onItemClick = () => {
    onCheckBoxChecked(id);
    setIsCheckboxClicked(!isCheckboxClicked);
  };

  const getLang = () => (I18nManager.isRTL ? 'ar' : 'en');

  const getTitle = () => {
    if (!lang) {
      return null;
    }

    const nameData = lang.find(i => i.language === getLang());
    return nameData.name;
  };

  return (
    <TouchableOpacity onPress={onItemClick}>
      <View style={styles.wrapper}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.textOne}>
            <Text style={styles.title}>{getTitle()}</Text>
          </View>
          <View style={styles.num}>
            <Text style={styles.number}>{`(${product_count})`}</Text>
          </View>
        </View>
        <View style={styles.box}>
          {isCheckboxClicked ? (
            <Image
              resizeMode="contain"
              source={images.checkboxa}
              style={styles.boxCheck}
            />
          ) : (
              <Image
                resizeMode="contain"
                source={images.checkbox}
                style={styles.boxCheck}
              />
            )}
        </View>
      </View>
    </TouchableOpacity>
  );
};
CategoryFilterCard.propTypes = {
  item: PropTypes.object,
};

export default CategoryFilterCard;
