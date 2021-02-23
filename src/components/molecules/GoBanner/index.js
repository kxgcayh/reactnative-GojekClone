/**
 * @format
 */

import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const GoBanner = () => {
  return (
    <View style={{padding: 16}}>
      <View
        style={{
          position: 'relative',
        }}>
        <Image
          source={require('../../../assets/dummies/food-banner.jpg')}
          style={{height: 200, width: '100%', borderRadius: 10}}
        />
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'black',
            opacity: 0.1,
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
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingBottom: 16,
          }}>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
                marginBottom: 15,
              }}>
              Free GO-FOOD Vouchers
            </Text>
            <Text style={{fontSize: 12, fontWeight: '500', color: 'white'}}>
              Quick before they run out!
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              paddingLeft: 12,
            }}>
            {/* Custom Button */}
            <TouchableOpacity
              style={{
                backgroundColor: '#61A756',
                paddingHorizontal: 12,
                paddingVertical: 11,
                borderRadius: 10,
                alignSelf: 'stretch',
                borderBottomColor: '#E8E9ED',
                borderBottomWidth: 1,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                GET VOUCHER
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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

export default GoBanner;
