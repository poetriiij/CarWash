import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, ImageBackground } from 'react-native'; // Mengimpor ImageBackground
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
      Alert.alert('Login failure', error.message);  // Menampilkan alert jika login gagal
    }
  };

  return (
    <ImageBackground 
    source={require('../../assets/icon/LoginPage.png')}
    style={styles.background}>
      <View style={styles.overlay} />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Gap height={50} />
          <Text style={styles.title}>Welcome back!</Text>
          <Text style={styles.subtext}>Login</Text>
        </View>
        <Gap height={134} />
        <View style={styles.contentWrapper}>
          <TextInput
            style={styles.input}
            label="Email Address"
            placeholder="Type your email address"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            style={styles.input}
            label="Password"
            placeholder="Type your password"
            secureTextEntry  // Menambahkan secureTextEntry untuk menyembunyikan password
            onChangeText={setPassword}
            value={password}
          />
          <View style={styles.buttonContainer}>
            <Button
              label="Log in"
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
    backgroundColor: 'transparent',  // Menggunakan transparent agar background gambar terlihat
    paddingHorizontal: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFD5FE',
    marginTop: 100,
  },
  title: {
    fontSize: 30,
    color: '#FFFFFF',
    marginTop: 50,
  },
  subtext: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 100,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center', // Memastikan konten terpusat vertikal
  },
  input: {
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  buttonContainer: {
    alignItems: 'center', // Center content horizontally
    marginBottom: 180,
  },
  button: {
    alignSelf: 'center', // Center button within its container
    marginTop: 20,
    borderRadius: 10,  // Added borderRadius to the button here
  },
  background: {
    flex: 1,
    justifyContent: 'center',  // Menjaga gambar latar belakang agar tetap terpusat
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Warna hitam dengan transparansi 70%
  },
});
