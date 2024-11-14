import React, { useState } from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,

} from 'react-native';
import {
  Price,
  Dana,
  Shoppe,
  Gopay,
  Mandiri,
  Bca,
  Bni,
  Check,
} from '../../assets/icon';
import {Button, Gap} from '../../components';

const PaymentPage = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ImageBackground
      source={require('../../assets/Logo/Homebg2.png')}
      style={styles.background}>
      <View style={styles.overlay} />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Gap height={34} />
        <Text style={styles.title}>Payment</Text>
        <Gap height={34} />
        <View style={styles.priceimg}>
          <Image source={Price} />
        </View>
        <Gap height={94} />
        <View style={styles.drinkContainer}>
          <View style={styles.drinkItem}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Image source={Dana} style={styles.drinkImage} />
            </TouchableOpacity>
          </View>
          <View style={styles.drinkItem}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Image source={Shoppe} style={styles.drinkImage} />
            </TouchableOpacity>
          </View>
          <View style={styles.drinkItem}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Image source={Gopay} style={styles.drinkImage} />
            </TouchableOpacity>
          </View>
          <View style={styles.drinkItem}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Image source={Mandiri} style={styles.drinkImage} />
            </TouchableOpacity>
          </View>
          <View style={styles.drinkItem}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Image source={Bca} style={styles.drinkImage} />
            </TouchableOpacity>
          </View>
          <View style={styles.drinkItem}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Image source={Bni} style={styles.drinkImage} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Image source={Check} style={styles.modalImage} />
            <Text style={styles.modalText}>Pembayaran berhasil!</Text>
            <Button
              label="Success!!!"
              backgroundColor="#FFD5FE"
              textColor="black"
              onPress={() =>  navigation.goBack()}
              style={styles.button}
            />
            {/* <Button title="Success" onPress={() => setModalVisible(false)} /> */}
          </View>
        </View>
      </Modal>

      {/* <View style={styles.footer}>
        <View style={styles.navigation}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={styles.footerButton}>
              <Homelogo width={-20} />
              <Text>Home</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View> */}
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
  priceimg: {
    alignItems: 'center',
    justifyContent: 'center',
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
  drinkContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  button: {
    alignSelf: 'center',
  },
  drinkItem: {
    alignItems: 'center',
    marginBottom: '10%',
    width: '50%',
  },
  drinkImage: {
    marginBottom: 8,
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

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalImage: {
    width: 160,
    height: 160,
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
