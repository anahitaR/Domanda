import React, { Component } from "react";
import { View, StyleSheet, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import RegisterHeader from "./RegisterHeader";
import CustomTextInput from "../../common/CustomTextInput";
import CustomButton from "../../common/CustomButton";

const imageBg = require('../../assets/photo.jpg');
class Register extends Component {

  render() {
    return (
      <View style={[styles.container, {
        flexDirection: "column",
      }]}>
        <View style={{flex: 2}}>
          <ImageBackground
            source={imageBg}
            style={{width: '100%', height: '100%'}}
          >
          </ImageBackground>
        </View>
        <View style={[styles.flexRegister, {
        }]}>
          <View style={{ flex: 1, flexDirection: "row",
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',}}>
            <TouchableOpacity style={{marginVertical: 10}}>
          <RegisterHeader tabTitle={'ورود'} />
            </TouchableOpacity>
            <TouchableOpacity style={{marginVertical: 10}}>
        <RegisterHeader
          tabTitle={'ثبت نام'}
          boldColor={'#6FE6E0'}
          borderColor={'#6FE6E0'}
        />
            </TouchableOpacity>
          </View>
          <View style={{
            width: '100%',
            height: 320,
            paddingHorizontal: 40,
            alignItems: 'center',
          }}>
          <CustomTextInput
            type={'name'}
            icon="account-box"
            placeholder="نام کاربری"
            autoCapitalize="none"
            autoCarrect={false}
            name="username"
          />
            <CustomTextInput
              type={'number'}
              icon="phone"
              placeholder="شماره همراه"
              autoCapitalize="none"
              autoCarrect={false}
              name="number"

            />
            <CustomTextInput
              type={'password'}
              icon="lock"
              placeholder="رمز عبور"
              autoCapitalize="none"
              autoCarrect={false}
              name="password"
            />
            <CustomButton title="ثبت نام"/>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6FE6E0',
  },
  flexRegister: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flex: 2,
    backgroundColor: "#ffffff",
  },
});

export default Register;
