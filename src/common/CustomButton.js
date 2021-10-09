import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function CustomButton({title, onPress, color ="BlueGrey"}) {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: '#6FE6E0'}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    marginVertical: 60,
    height: 45,

  },
  text: {
    color: '#fff',
    fontSize: 26,
    textTransform: 'uppercase',
  },
});

export default CustomButton;
