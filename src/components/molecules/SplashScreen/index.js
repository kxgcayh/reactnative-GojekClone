import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  });
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'grey'}}>
      <View
        style={{
          flex: 4,
          backgroundColor: 'grey',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../../assets/logos/newGojek.png')}
          style={{width: 125, height: 125}}
        />
        <Text style={{fontSize: 15, fontWeight: '700', color: 'white'}}>
          Gojek Cloned Application
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
