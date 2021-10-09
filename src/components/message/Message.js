import React, { Component } from "react";
import { View, StyleSheet, Text, Image, ImageBackground, TouchableOpacity, TextInput } from "react-native";
const send = require('../../assets/send.png');

class Message extends Component {

  render() {
    return (
      <View style={[styles.container, {
        flexDirection: "column",
      }]}>
        <View style={[styles.flexUp, {
        }]}>
          <Text style={styles.text}>سیستم من خراب شده نمیدونم چیکار کنم ؟</Text>
        </View>
        <View style={[styles.flexMessage, {
        }]}>
        </View>
        <View style={[styles.flexDown, {
        }]}>
          <TouchableOpacity>
          <Image source={send} style={styles.imageSend}/>
          </TouchableOpacity>
          <TextInput style={styles.textInput} placeholder={'- پاسخ خود را بنویسید'}></TextInput>

        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  flexUp: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  flexMessage: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flex: 4,
    backgroundColor: "#6FE6E0",
  },
  flexDown: {
    flex: 0.5,
    backgroundColor: "#ffffff",
    justifyContent: 'space-between',
    flexDirection: 'row',

  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  textInput: {
    paddingRight: 10,
    alignItems: 'center',
    fontSize: 16,
  },
  imageSend: {
    width: 30,
    height: 30,
    alignItems: 'center',
    marginVertical: 20,
    marginLeft: 10,

  }
});

export default Message;
