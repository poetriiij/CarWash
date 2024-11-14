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
  import {Button, Gap} from '../../components';
  
  const Booking = ({navigation}) => {
    return (
      <ImageBackground
        source={require('../../assets/Logo/Homebg2.png')}
        style={styles.background}>
        <View style={styles.overlay} />
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <Gap height={34} />
          <Text style={styles.title}>Booking</Text>
          <Gap height={150} />
          <View style={styles.drinkContainer}>
          <Text style={styles.timetop}>Date</Text>
          <View style={styles.time}>
            <Text style={styles.text}>11/18/24</Text>
        </View>
        <Text style={styles.timetop}>Time</Text>
        <View style={styles.time}>
            <Text style={styles.text}>09:22</Text>
        </View>
          </View>

        </ScrollView>
        <Gap height={20} />
        <View style={styles.buttonContainer}>
          <Button
              label="Booking"
              backgroundColor="#FFD5FE"
              textColor="black"
              onPress={() => navigation.navigate('PaymentPage')}
              style={styles.button}
            />
            </View>
      </ImageBackground>
    );
  };
  
  export default Booking;
  
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    timetop:{
        fontWeight: '800',
        color: '#ffff',
        fontSize: 16,
        paddingLeft: '5%',
    },
    time: {
        backgroundColor: '#FFFFFF',     
        padding: 10,                    
        borderRadius: 20,               
        alignItems: 'left',           
        justifyContent: 'center',       
        shadowColor: '#000',            
        shadowOpacity: 0.2,
        shadowOffset: { width: 2, height: 2 },
        elevation: 3,                   
        marginVertical: 20,             
        width: '100%', 
        height: '23%',              
      },
      text: {
        textAlign: 'left',
        fontSize: 15,            
        color: '#000000',  
        fontWeight: 'bold',
        paddingLeft: 20,        
      },
    priceimg:{
      alignItems: 'center',
      justifyContent:'center',
    },
    buttonContainer: {
        alignItems: 'center', 
        marginBottom: 180,
        paddingHorizontal: 40,
      },
    button: {
        alignSelf: 'center',
      },
    title: {
      fontSize: 48,
      textAlign: 'center',
      color: '#fff',
      fontWeight: '400',
    },
    scrollViewContainer: {
      paddingBottom: 60,
      alignItems: 'center',
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
