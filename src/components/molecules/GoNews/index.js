/**
 * @format
 */

import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const GoNews = ({onPress}) => {
  return (
    <View style={{paddingTop: 16, paddingHorizontal: 16}}>
      <View style={{position: 'relative'}}>
        <Image
          source={require('../../../assets/dummies/sepak-bola.jpg')}
          style={{height: 200, width: '100%', borderRadius: 10}}
        />
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'black',
            opacity: 0.2,
            borderRadius: 10,
          }}
        />
        <View
          style={{
            position: 'absolute',
            height: 15,
            width: 60,
            top: 16,
            left: 16,
          }}>
          <Image
            source={require('../../../assets/logos/white.png')}
            style={{
              width: undefined,
              height: undefined,
              resizeMode: 'contain',
              flex: 1,
            }}
          />
        </View>
      </View>
      <View style={{paddingTop: 16, paddingBottom: 20}}>
        <Text style={{color: '#1C1C1C', fontSize: 16, fontWeight: 'bold'}}>
          GO-NEWS
        </Text>
        <Text style={{color: '#7A7A7A', fontSize: 14, fontWeight: '500'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          laboriosam? Sit sapiente numquam aliquid distinctio?
        </Text>
      </View>
      {/* Custom Button */}
      <TouchableOpacity
        style={{
          backgroundColor: '#61A756',
          paddingHorizontal: 12,
          paddingVertical: 11,
          borderRadius: 10,
          alignSelf: 'flex-end',
        }}
        onPress={onPress}>
        <Text style={{color: 'white', fontSize: 13, fontWeight: 'bold'}}>
          READ
        </Text>
      </TouchableOpacity>
      <View
        style={{
          borderBottomColor: '#E8E9ED',
          borderBottomWidth: 1,
          paddingBottom: 16,
        }}
      />
    </View>
  );
};

export default GoNews;
