/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';

import ScrollableProduct from './containers/organisms/ScrollableProduct';
import GoPay from './containers/organisms/GoPay';
import Features from './containers/organisms/Features';
import NavBar from './containers/organisms/NavBar';

import SearchFeature from './components/molecules/SearchFeature';
import GoNews from './components/molecules/GoNews';
import GoInformation from './components/molecules/GoInformation';
import GoBanner from './components/molecules/GoBanner';

const GreyBorder = () => {
  return (
    <View style={{height: 17, backgroundColor: '#F2F2F4', marginTop: 20}} />
  );
};

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        {/*Search Box */}
        <SearchFeature />

        {/* GoPay */}
        <GoPay />

        {/* Main Features */}
        <Features />

        <GreyBorder />

        {/* News Section */}
        <GoNews />

        {/* Internal Infromation Section */}
        <GoInformation />

        {/* GoFood Banner Section */}
        <GoBanner />

        {/* Nearby Go-Food */}
        <ScrollableProduct />
      </ScrollView>

      {/* Bottom Navigation */}
      <NavBar />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  //
});
