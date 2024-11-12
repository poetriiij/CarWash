import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { Service, Profile, Pay, Booking, Notiflogo, Orderlogo, Homelogo } from '../../assets/icon';
import { Gap } from '../../components';

const Home = ({ navigation }) => {
  return (
    <ImageBackground source={require('../../assets/Logo/Homebg.png')} style={styles.background}>
      <View style={styles.overlay} /> 
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.searchContainer}>
          <Gap height={20} />
        </View>
        <Gap height={100} />
        {/* <Text style={styles.categoryText}>MENU</Text> */}
        <Gap height={36} />
        <View style={styles.drinkContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Service')} style={styles.Item}>
            <Image source={Service} style={styles.IconIm} />
            <Text style={styles.Text}>Service</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Booking')} style={styles.Item}>
            <Image source={Booking} style={styles.IconIm} />
            <Text style={styles.Text}>Booking</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('PaymentPage')} style={styles.Item}>
            <Image source={Pay} style={styles.IconIm} />
            <Text style={styles.Text}>Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('DrinkDetail')} style={styles.Item}>
            <Image source={Profile} style={styles.IconIm} />
            <Text style={styles.Text}>Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.navigation}>
          <TouchableOpacity onPress={() => navigation.navigate('Order')}>
            <View style={styles.footerButton}>
              <Orderlogo width={-20} />
              <Text>Order</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={styles.footerButton}>
              <Homelogo width={-20} />
              <Text>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <View style={styles.footerButton}>
              <Notiflogo width={-20} />
              <Text style={styles.addText}>Notification</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', 
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent', 
  },
  scrollViewContainer: {
    paddingBottom: 60,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  categoryText: {
    color: '#FFFFFF', 
    fontSize: 40,
    fontWeight: '900',
    marginHorizontal: 16,
    marginVertical: 16,
    textAlign: 'center',
    // fontFamily: 'RubikBubbles-Regular',
  },
  drinkContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  Item: {
    marginTop:60,
    alignItems: 'center',
    marginBottom: 16,
    width: '50%',
  },
  IconIm: {
    width: 70,
    height: 70,
    marginBottom: 18,
  },
  Text: {
    color: '#FFFFFF', 
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    backgroundColor: '#eef3fc',
    borderTopWidth: 1,
    borderTopColor: '#ffff',
    elevation: 10,
    borderRadius: 20,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
  },
  footerButton: {
    paddingHorizontal: 10,
  },
  addText: {
    fontSize: 14,
  },
});
