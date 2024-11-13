  import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
  import React from 'react';
  import { BackButton } from '../../../assets/icon';
  const index = ({
    label,
    backgroundColor = '#d9d9d9',
    textColor = '#FFFFFF',
    onPress,
    type,
    icon, 
    size = 150,
  }) => {
    if (type === 'icon-only') {
      return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
          {icon === 'icon-back' && <BackButton />}
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        style={styles.container(backgroundColor, size)}
        activeOpacity={0.7}
        onPress={onPress}>
        <Text style={styles.label(textColor)}>{label}</Text>
      </TouchableOpacity>
    );
  };

  export default index;

  const styles = StyleSheet.create({
    container: (backgroundColor, size) => ({
      backgroundColor: backgroundColor,
      paddingVertical: 15,
      width: '100%',
      height: 70,
      marginTop: 60,
      borderRadius: 20, 
      borderColor: '#000',
      borderWidth: 1.9,
    }),
    label: textColor => ({
      textAlign: 'center',
      fontFamily: 'Poppins-Medium',
      fontSize: 24,
      fontWeight: 'bold',
      color: textColor,
      buttonContainer: {
        alignItems: 'center',
      },
    }),
  });
