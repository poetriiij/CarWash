import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {
  Exterior,
  Lengkap,
  Mesin,
  Nano,
  Homelogo,
  Salju,
  Notiflogo,
  Orderlogo,
  Poles,
  Price,
  Dana,
  Shoppe,
  Gopay,
  Mandiri,
  Bca,
  Bni,
} from '../../assets/icon';
import {Gap} from '../../components';

const PaymentPage = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../assets/Logo/Homebg2.png')}
      style={styles.background}>
      <View style={styles.overlay} />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Gap height={34} />
        <Text style={styles.title}>Payment</Text>
        <Gap height={34} />
        <View  style={styles.priceimg}>
        <Image source={Price}/>
        </View>
        <Gap height={94} />
        <View style={styles.drinkContainer}>
          <View style={styles.drinkItem}>
            <TouchableOpacity>
              <Image source={Dana} style={styles.drinkImage} />
            </TouchableOpacity>
          </View>
          <View style={styles.drinkItem}>
            <TouchableOpacity>
              <Image source={Shoppe} style={styles.drinkImage} />
            </TouchableOpacity>
          </View>
          <View style={styles.drinkItem}>
            <TouchableOpacity>
              <Image source={Gopay} style={styles.drinkImage} />
            </TouchableOpacity>
          </View>
          <View style={styles.drinkItem}>
            <TouchableOpacity>
              <Image source={Mandiri} style={styles.drinkImage} />
            </TouchableOpacity>
          </View>
          <View style={styles.drinkItem}>
            <TouchableOpacity>
              <Image source={Bca} style={styles.drinkImage} />
            </TouchableOpacity>
          </View>
          <View style={styles.drinkItem}>
            <TouchableOpacity>
              <Image source={Bni} style={styles.drinkImage} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.navigation}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={styles.footerButton}>
              <Homelogo width={-20} />
              <Text>Home</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default PaymentPage;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  priceimg:{
    alignItems: 'center',
    justifyContent:'center',

  },
  title: {
    fontSize: 48,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '400',
  },
  scrollViewContainer: {
    paddingBottom: 60,
  },
  searchContainer: {
    paddingHorizontal: 56,
    paddingVertical: 20,
  },
  headerText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    fontFamily: 'RubikBubbles-Regular',
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    // paddingHorizontal: 56,
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 20,
    paddingVertical: 9,
  },
  categoryText: {
    color: '#000',
    fontSize: 40,
    fontWeight: '900',
    marginHorizontal: 16,
    marginVertical: 16,
    textAlign: 'center',
    fontFamily: 'RubikBubbles-Regular',
  },
  drinkContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  drinkItem: {
    alignItems: 'center',
    marginBottom: '10%',
    width: '50%',
  },
  drinkImage: {
    // width: 140,
    // height: 140,
    marginBottom: 8,
    // borderRadius: 20,
  },
  drinkText: {
    color: '#ffff',
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 100,
    right: 100,
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
