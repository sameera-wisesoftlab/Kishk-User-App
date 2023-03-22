import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';
import appTexts from '../../lib/appTexts';
const SliderHorizontal = props => {
  const { renderItem, listItem, isTime, type } = props;

  return (
    <View style={isTime ? styles.listContainerTime : styles.listContainer}>
      <FlatList
        ListEmptyComponent={
          <View style={styles.noDataContainer}>
            <Text style={styles.nodataf}>{appTexts.STRING.nodata}</Text>
          </View>
        }
        style={styles.flatListStyle}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={listItem}
        extraData={listItem}
        contentContainerStyle={{ paddingRight: isTime ? '5%' : null }}
        keyExtractor={(item, index) => type + index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};
SliderHorizontal.propTypes = {
  item: PropTypes.object,
};

export default SliderHorizontal;
