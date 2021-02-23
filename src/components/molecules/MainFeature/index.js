/**
 * @format
 */

import React from 'react';
import {View, Image, Text} from 'react-native';

const MainFeature = (props) => {
  return (
    <View
      style={{
        width: `${100 / 4}%`,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          width: 58,
          height: 58,
          backgroundColor: 'white',
          borderRadius: 18,
          borderWidth: 1,
          borderColor: '#ECF0F1',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={props.img} />
      </View>
      <Text
        style={{
          marginTop: 6,
          fontSize: 11,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default MainFeature;
