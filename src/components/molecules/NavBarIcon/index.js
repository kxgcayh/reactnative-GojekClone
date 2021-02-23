/**
 * @format
 */
import React from 'react';
import {View, Image, Text} from 'react-native';
import IconHome from '../../../assets/icons/home-active.png';
import IconOrder from '../../../assets/icons/order.png';

const NavBarIcon = (props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image style={{width: 26, height: 26}} source={props.icon} />
      <Text
        style={{
          fontSize: 10,
          marginTop: 4,
          color: props.active ? '#43AB4A' : '#545454',
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default NavBarIcon;
