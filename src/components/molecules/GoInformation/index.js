/**
 * @format
 */

import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const GoInformation = () => {
  return (
    <View style={{padding: 16}}>
      <View
        style={{
          height: 15,
          width: 60,
        }}>
        <Image
          source={require('../../../assets/logos/gojek.png')}
          style={{
            width: undefined,
            height: undefined,
            resizeMode: 'contain',
            flex: 1,
            marginLeft: -4,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: '#1C1C1C',
          marginTop: 15,
        }}>
        Complete Your Profile
      </Text>
      <View style={{flexDirection: 'row', marginBottom: 16}}>
        <View>
          <Image
            source={require('../../../assets/dummies/facebook-connect.png')}
          />
        </View>
        <View style={{marginLeft: 16, flex: 1}}>
          <Text style={{fontSize: 15, color: '#4A4A4A', fontWeight: 'bold'}}>
            Connect With Facebook
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              color: '#4A4A4A',
              width: '70%',
            }}>
            Login faster without Verification Code
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#61A756',
          paddingHorizontal: 12,
          paddingVertical: 11,
          borderRadius: 10,
          alignSelf: 'flex-end',
          borderBottomColor: '#E8E9ED',
          borderBottomWidth: 1,
        }}>
        <Text style={{color: 'white', fontSize: 13, fontWeight: 'bold'}}>
          CONNECT
        </Text>
      </TouchableOpacity>
      <View
        style={{
          borderBottomColor: '#E8E9ED',
          borderBottomWidth: 1,
          paddingBottom: 16,
          marginBottom: 20,
        }}
      />
    </View>
  );
};

export default GoInformation;
