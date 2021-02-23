/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';

import ScrollableProduct from '../../../containers/organisms/ScrollableProduct';
import GoPay from '../../../containers/organisms/GoPay';
import Features from '../../../containers/organisms/Features';
import NavBar from '../../../containers/organisms/NavBar';

import SearchFeature from '../../../components/molecules/SearchFeature';
import GoNews from '../../../components/molecules/GoNews';
import GoInformation from '../../../components/molecules/GoInformation';
import GoBanner from '../../../components/molecules/GoBanner';
import GreyBorder from '../../../components/atoms/GreyBorder';

const Home = ({navigation}) => {
  const route = useRoute();
  console.log('nama route', route.name);

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
        <GoNews onPress={() => navigation.navigate('NewsDetail')} />

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

export default Home;
