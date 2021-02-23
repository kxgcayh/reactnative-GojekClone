/**
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import NavBarIcon from '../../../components/molecules/NavBarIcon';
import {useNavigation} from '@react-navigation/native';

export default function () {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <View
      style={{
        height: 54,
        flexDirection: 'row',
        backgroundColor: 'white',
      }}>
      <NavBarIcon
        onPress={() => navigation.navigate('Home')}
        icon={require('../../../assets/icons/home-active.png')}
        title="Home"
        active
      />
      <NavBarIcon
        onPress={() => navigation.navigate('Order')}
        icon={require('../../../assets/icons/order.png')}
        title="Order"
      />
      <NavBarIcon
        onPress={() => alert('Help')}
        icon={require('../../../assets/icons/help.png')}
        title="Help"
      />
      <NavBarIcon
        onPress={() => alert('Inbox')}
        icon={require('../../../assets/icons/inbox.png')}
        title="Inbox"
      />
      <NavBarIcon
        onPress={() => alert('Account')}
        icon={require('../../../assets/icons/account.png')}
        title="Account"
      />
    </View>
  );
}
