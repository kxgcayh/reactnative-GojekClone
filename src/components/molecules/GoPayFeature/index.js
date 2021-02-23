/**
 * @format
 */

import React from 'react';
import {View, Image, Text} from 'react-native';

const GoPayFeature = (props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={props.img} />
      <Text
        style={{
          color: 'white',
          fontSize: 13,
          fontWeight: 'bold',
          marginTop: 15,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default GoPayFeature;
