/**
 * @format
 */

import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import GoPayFeature from '../../../components/molecules/GoPayFeature';

class GoPay extends Component {
  render() {
    return (
      <View style={{marginHorizontal: 17, marginTop: 12}}>
        <View
          style={{
            padding: 14,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#2C5FB8',
          }}>
          <Image source={require('../../../assets/icons/gopay.png')} />
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 17,
            }}>
            Rp. 99.000.000
          </Text>
        </View>
        <View
          style={{
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            flexDirection: 'row',
            paddingTop: 20,
            paddingBottom: 14,
            backgroundColor: '#2F65BD',
          }}>
          <GoPayFeature
            img={require('../../../assets/icons/pay.png')}
            title="Pay"
          />
          <GoPayFeature
            img={require('../../../assets/icons/nearby.png')}
            title="Nearby"
          />
          <GoPayFeature
            img={require('../../../assets/icons/topup.png')}
            title="Top Up"
          />
          <GoPayFeature
            img={require('../../../assets/icons/more.png')}
            title="More"
          />
        </View>
      </View>
    );
  }
}

export default GoPay;
