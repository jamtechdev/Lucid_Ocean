import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import loginImg from '../../images/loginImage.webp';

function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={loginImg} style={styles.image} />
      </View>
      <Text>Login Screen</Text>

      <Button title="Login" onPress={() => navigation.navigate('Dashboard')} />
      <Button
        title="Guest Login"
        onPress={() => navigation.navigate('Guest Login')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#c5a4fe',
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 70,
  },
  image: {
    height: 300,
    width: 300,
    padding: 50,
  },
});

export default LoginScreen;
