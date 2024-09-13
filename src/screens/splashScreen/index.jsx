import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

function SplashScreen({navigation}) {
  useEffect(() => {
    navigation.navigate('Login');
  }, []);
  return (
    <View style={{backgroundColor: '#9878ff'}}>
      <Text style={{color: '#fff'}}>Lucid Ocean</Text>
    </View>
  );
}

export default SplashScreen;
