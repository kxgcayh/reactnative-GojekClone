import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import NavBar from '../../../containers/organisms/NavBar';

const Order = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>This is Order Detail</Text>
      </View>
      <NavBar />
    </SafeAreaView>
  );
};

export default Order;
