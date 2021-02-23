/**
 * @format
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import NavBarIcon from '../../../components/molecules/NavBarIcon';

class NavBar extends Component {
  render() {
    return (
      <View
        style={{
          height: 54,
          flexDirection: 'row',
          backgroundColor: 'white',
        }}>
        <NavBarIcon
          icon={require('../../../assets/icons/home-active.png')}
          title="Home"
          active
        />
        <NavBarIcon
          icon={require('../../../assets/icons/order.png')}
          title="Order"
        />
        <NavBarIcon
          icon={require('../../../assets/icons/help.png')}
          title="Help"
        />
        <NavBarIcon
          icon={require('../../../assets/icons/inbox.png')}
          title="Inbox"
        />
        <NavBarIcon
          icon={require('../../../assets/icons/account.png')}
          title="Account"
        />
      </View>
    );
  }
}

export default NavBar;
