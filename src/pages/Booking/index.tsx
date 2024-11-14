import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, ImageBackground } from 'react-native';
import { Button, Gap, TextInput } from '../../components';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../../config/firebase';

const auth = getAuth(app);

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Logged in user:', user);
      navigation.replace('Home');
    } catch (error) {
      console.log(error);
      Alert.alert('Login failure', error.message);
    }
  };

  return (
    <ImageBackground 
      source={require('../../assets/icon/AccountPage.png')}
      style={styles.background}>
      <View style={styles.overlay} />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Booking</Text>
        </View>
        <Gap height={134} />
        <View style={styles.contentWrapper}>
          <TextInput
            style={styles.input}
            label="Email"
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            style={styles.input}
            label="Password"
            placeholder="Password"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />
          <View style={styles.buttonContainer}>
            <Button
              label="Login"
              backgroundColor="#FFD5FE"
              textColor="black"
              onPress={onPressLogin}
              style={styles.button}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    color: '#FFFFFF',
    marginTop: 50,
    fontWeight: 'bold',
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    alignSelf: 'center',
    borderRadius: 10,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
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
