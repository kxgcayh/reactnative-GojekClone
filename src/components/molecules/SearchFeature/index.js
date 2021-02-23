/**
 * @format
 */

import React from 'react';
import {View, Image, TextInput} from 'react-native';

const SearchFeature = () => {
  return (
    <View
      style={{
        marginHorizontal: 14,
        paddingTop: 18,
        flexDirection: 'row',
      }}>
      <View style={{position: 'relative', flex: 1}}>
        <TextInput
          placeholder="What do you want to eat?"
          style={{
            fontSize: 13,
            backgroundColor: 'white',
            borderRadius: 25,
            paddingLeft: 45,
            paddingRight: 20,
            marginRight: 15,
            height: 40,
          }}
        />
        <Image
          source={require('../../../assets/icons/search.png')}
          style={{position: 'absolute', top: 6, left: 12}}
        />
      </View>
      <View
        style={{
          width: 35,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={require('../../../assets/icons/promo.png')} />
      </View>
    </View>
  );
};

export default SearchFeature;
