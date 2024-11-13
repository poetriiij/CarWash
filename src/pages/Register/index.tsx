import { StyleSheet, Text, View, Alert, ImageBackground, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { createAccount } from '../../../config/firebase';
import { Button, Gap, TextInput } from '../../components';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigation = useNavigation(); // Untuk navigasi

  const onPressRegister = async () => {
    try {
      await createAccount({ email, password, name });
      Alert.alert('You have successfully registered, You can login now!');
    } catch (error) {
      Alert.alert('Registration failed', error.message);
    }
  };

  return (
    <ImageBackground 
      source={require('../../assets/icon/SignUpPage.png')}
      style={styles.background}>
      <View style={styles.overlay} />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Welcome!</Text>
          <Text style={styles.subtext}>Create an Account</Text>
        </View>
        <Gap height={60}/>
        <View style={styles.contentWrapper}>
          <TextInput 
            style={styles.input} 
            label="Full Name" 
            placeholder="Type your full name" 
            placeholderTextColor="#FFFFFF" 
            value={name} 
            onChangeText={setName} 
          />
          <TextInput 
            style={styles.input} 
            label="Email Address" 
            placeholder="Type your email address" 
            placeholderTextColor="#FFFFFF" 
            value={email} 
            onChangeText={setEmail} 
            keyboardType="email-address" 
          />
          <TextInput 
            style={styles.input}
            label="Password" 
            placeholder="Type your password" 
            placeholderTextColor="#FFFFFF" 
            value={password} 
            onChangeText={setPassword} 
          />
          <View style={styles.buttonContainer}>
            <Button
              label="Sign Up"
              backgroundColor="#FFD5FE"
              textColor="black"
              onPress={onPressRegister}
              style={styles.button}
            />
            <Text style={styles.accountText}>Already have an account?</Text>
            <View style={styles.signInContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.signInText}>Sign in</Text>
              </TouchableOpacity>
              <Text style={styles.accountText}> to your account</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 30,
    color: '#FFFFFF',
    marginTop: 100,
  },
  subtext: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 20,
  },
  contentWrapper: {
    flex: 1,
  },
  input: {
    borderRadius: 20, 
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 10, 
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 10, 
  },
  signInContainer: {
    flexDirection: 'row', 
    marginTop: 10,
  },
  accountText: {
    fontSize: 17,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  signInText: {
    fontSize: 17,
    color: '#FFFFFF',
    textDecorationLine: 'underline', // Garis bawah pada teks "Sign in"
    fontWeight: '500',
  },
  background: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
