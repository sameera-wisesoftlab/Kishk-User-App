import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity, I18nManager } from 'react-native';
import { styles, images } from './styles';
import appTexts from '../../lib/appTexts';
const AddressCard = props => {
  const { item, itemClick, tabIndex, deleteClick } = props;

  return (
    <View>
      <View style={styles.fullWidthRowContainer}>
        {tabIndex === 0 && (
          <View style={styles.rowContainer}>
            <View style={styles.addressLine}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {/* <Image source={images.homeIcon} style={styles.homeIcon} /> */}
                <Image
                  source={
                    item.address_type == 'office'
                      ? images.office
                      : item.address_type == 'home'
                        ? images.homeIcon
                        : item.address_type == 'others'
                          ? images.otherIcon
                          : null
                  }
                  style={styles.homeIcon}
                />
                <Text style={styles.textOne}>
                  {item.address_type === 'home' ? appTexts.STRING.home : null}
                  {item.address_type === 'office' ? appTexts.STRING.office : null}
                  {item.address_type === 'others' ? appTexts.STRING.others : null}
                </Text>
                {item.is_default === 'Y' && (
                  <View style={styles.defaultWrapper}>
                    {/* <Text style={styles.textTwo}>{appTexts.EDIT.default}</Text> */}
                  </View>
                )}
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                  onPress={() => {
                    itemClick(item.id);
                  }}>
                  <Image source={images.editIcon} style={styles.locationIcon} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    deleteClick(item.id);
                  }}>
                  <Image
                    source={images.deleteIcon}
                    style={styles.locationIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.personDetails}>
              <Text style={styles.nameText}>{item.name}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.nameText}>{item.phone}</Text>
              </View>
            </View>
            <View style={styles.addresswrapper}>
              <Text style={styles.addressText}>
                {/* {item.apartment_name}
                {' , '}
                {item.street_name}
                {' , '}
                {item.postal_code}
                {' , '}
                {item.land_mark} */}
                {item.apartment_name}
                {' , '}
                {item.street_name || ''}
                {item.street_name ? ' , ' : ''}
                {item.postal_code}
                {' , '}
                {item.land_mark}
              </Text>
              {/* <Text style={{color: 'green'}}>{'D_id :' + item.id}</Text> */}
            </View>
          </View>
        )}
      </View>

      <View style={styles.fullWidthRowContainer}>
        {tabIndex === 1 && (
          <View style={styles.rowContainer}>
            <View style={styles.addressLine}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={images.homeIcon} style={styles.homeIcon} />
                <Text style={styles.textOne}>{item.address_type}</Text>
                {item.is_default === 'Y' && (
                  <View style={styles.defaultWrapper}>
                    <Text style={styles.textTwo}>{appTexts.EDIT.default}</Text>
                  </View>
                )}
              </View>
              {/* <TouchableOpacity
                onPress={() => {
                  itemClick(item.id);
                }}>
                <Image source={images.editIcon} style={styles.locationIcon} />
              </TouchableOpacity> */}
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                  onPress={() => {
                    itemClick(item.id);
                  }}>
                  <Image source={images.editIcon} style={styles.locationIcon} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    deleteClick(item.id);
                  }}>
                  <Image
                    source={images.deleteIcon}
                    style={styles.locationIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.personDetails}>
              <Text style={styles.nameText}>{item.name}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.nameText}>{item.phone}</Text>
              </View>
            </View>
            <View style={styles.addresswrapper}>
              <Text style={styles.addressText}>
                {/* {item.apartment_name}
                {' , '}
                {item.street_name}
                {' , '}
                {item.postal_code}
                {' , '}
                {item.land_mark} */}

                {item.apartment_name}
                {' , '}
                {item.street_name || ''}
                {item.street_name ? ' , ' : ''}
                {item.postal_code}
                {' , '}
                {item.land_mark}
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
AddressCard.propTypes = {
  item: PropTypes.object,
  tabIndex: PropTypes.number,
};

export default AddressCard;
