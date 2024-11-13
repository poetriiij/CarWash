import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Gap } from '../../components';
import { Logo } from '../../assets/index';

const Splash = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icon/HomeCarWash.png')} style={styles.background} />
      <Gap height={270} />
      <Text style={styles.title}>WELCOME TO CAR WASH!</Text>
      <Text style={styles.subtext}>Expert Car Washing</Text>
      <Text style={styles.subtext}>Service Provider</Text>
      <Gap height={35} />
      <TouchableOpacity
        TouchableOpacity style={[styles.button, styles.buttonDisabled]}
        onPress={() => navigation.navigate('Login')}
        disabled={true}>
        <Text style={styles.buttonTextDisabled}>Booking Now!</Text>
      </TouchableOpacity>
      <Gap height={20} />
      <TouchableOpacity style={styles.transparentButton} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Gap height={10} />
      <TouchableOpacity style={styles.transparentButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    color: '#FFFFFF',
  },
  subtext: {
    fontSize: 35,
    color: '#FFFFFF',
  },
  background: {
    width: '100%', 
    height: '100%', 
    position: 'absolute',
  },
  button: {
    backgroundColor: '#d9d9d9',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
  },
  transparentButton: {
    backgroundColor: 'transparent', 
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#E841D5',
    alignItems: 'center',
  },
  buttonTextDisabled: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
