/**
 * @format
 */

import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import ScrollableItem from '../../../components/molecules/ScrollableItem';

class ScrollableProduct extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            height: 15,
            width: 60,
            marginLeft: 16,
          }}>
          <Image
            source={require('../../../assets/logos/go-food.png')}
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
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16,
            paddingHorizontal: 16,
          }}>
          <Text
            style={{
              fontSize: 17,
              color: '#1C1C1C',
              fontWeight: 'bold',
            }}>
            Nearby Restaurants
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61A756'}}>
            See All
          </Text>
        </View>
        <ScrollView
          horizontal={true}
          style={{flexDirection: 'row', paddingLeft: 16}}>
          {/* Product */}
          <ScrollableItem
            foodImg={require('../../../assets/dummies/go-food-kfc.jpg')}
            place="KFC Aeon Mall"
          />
          <ScrollableItem
            foodImg={require('../../../assets/dummies/go-food-gm.jpg')}
            place="Bakmi Aeon Mall"
          />
          <ScrollableItem
            foodImg={require('../../../assets/dummies/go-food-banka.jpg')}
            place="Martabak Aeon Mall"
          />
          <ScrollableItem
            foodImg={require('../../../assets/dummies/go-food-orins.jpg')}
            place="Martabak Orins"
          />
          <ScrollableItem
            foodImg={require('../../../assets/dummies/go-food-pak-boss.jpg')}
            place="Ayam Bakar Boss"
          />
        </ScrollView>
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
  }
}

export default ScrollableProduct;
