import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { Button, Gap } from '../../components';
import { Profile } from '../../assets/icon';

const AccountProfile = ({ navigation }) => {
  const email = 'makawogekeisya@gmail.com';
  const name = 'Keisya Natalia Makawoge';
  const password = '********';

  return (
    <ImageBackground 
      source={require('../../assets/icon/AccountPage.png')}
      style={styles.background}>
      <View style={styles.overlay} />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Account</Text>
          <Image source={Profile} style={styles.icon} />
        </View>
        <Gap height={70} />
        <View style={styles.contentWrapper}>
          <Text style={styles.label}>Name</Text>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{name}</Text>
          </View>
          <Text style={styles.label}>Email</Text>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{email}</Text>
          </View>
          <Text style={styles.label}>Password</Text>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{password}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default AccountProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    color: '#FFFFFF',
    marginTop: 50,
    fontWeight: 'bold',
  },
  contentWrapper: {
    marginTop: 20,  // Memberi jarak antara icon dan konten
  },
  textContainer: {
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 17,
    borderWidth: 1.9,
  },
  label: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '600',
    marginBottom: 12,

  },
  text: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
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
  icon: {
    width: 110,
    height: 110,
    marginTop: 20,
    borderRadius: 55,
  },
});
