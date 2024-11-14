import { StyleSheet, Text, View, TextInput as Input } from 'react-native';
import React from 'react';

const TextInput = ({ placeholder, label,value,
  onChangeText,
  keyboardType,
  secureTextEntry }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#8D92A3" 
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  input: {
    fontSize: 16,
    color: '#000',
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontWeight: '600',
    borderColor: '#000',
    borderWidth: 1.9,
  },
});
