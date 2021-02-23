/**
 * @format
 */

import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import MainFeature from '../../../components/molecules/MainFeature';

class Features extends Component {
  render() {
    return (
      <View
        style={{
          marginTop: 18,
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginHorizontal: 0,
        }}>
        {/* FirstRow */}
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            marginBottom: 18,
          }}>
          <MainFeature
            img={require('../../../assets/icons/go-ride.png')}
            title="GO-Ride"
          />
          <MainFeature
            img={require('../../../assets/icons/go-car.png')}
            title="GO-Car"
          />
          <MainFeature
            img={require('../../../assets/icons/go-bluebird.png')}
            title="GO-BlueBird"
          />
          <MainFeature
            img={require('../../../assets/icons/go-send.png')}
            title="GO-Send"
          />
        </View>
        {/* SecondRow */}
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            marginBottom: 18,
          }}>
          <MainFeature
            img={require('../../../assets/icons/go-deals.png')}
            title="GO-Deals"
          />
          <MainFeature
            img={require('../../../assets/icons/go-pulsa.png')}
            title="GO-Pulsa"
          />
          <MainFeature
            img={require('../../../assets/icons/go-food.png')}
            title="GO-Food"
          />
          <MainFeature
            img={require('../../../assets/icons/go-more.png')}
            title="GO-More"
          />
        </View>
      </View>
    );
  }
}

export default Features;
