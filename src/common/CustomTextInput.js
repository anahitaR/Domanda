import React from 'react';
import { View, StyleSheet, TextInput, Platform } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function CustomTextInput({icon, type, ...otherProps}) {
  return (
    <View style={styles.container}>
      <TextInput style={{ fontSize: 16, textAlign: 'right' }} {...otherProps}/>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={'#6D6D6D'} style={styles.icon}/>}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 25,
    flexDirection: "row",
    width: '100%',
    paddingRight: 10,
    marginVertical: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: '#eee',
    elevation: 10,
    height:45,
    justifyContent:'flex-end'
  },
  icon: {
    paddingLeft: 10,

  }
});


export default CustomTextInput;
