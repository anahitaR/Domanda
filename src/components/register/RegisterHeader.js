import React from 'react';
import {Image, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const RegisterHeader = (props) => {
  return (
    <View style={{
      borderBottomWidth: 1, borderColor: props.borderColor,
      justifyContent: 'center', alignItems: 'center', width: 100, alignSelf: 'center',
      backgroundColor: '#fff'
    }}>
      <Text style={{color: props.boldColor, fontSize:25}}> {props.tabTitle} </Text>
    </View>
  );
}

RegisterHeader.defaultProps = {
  boldColor: '#6D6D6D',
  borderColor: '#6D6D6D',
};

RegisterHeader.propTypes = {
  boldColor: PropTypes.string,
  tabTitle: PropTypes.string,
  color: PropTypes.string,
};

export default RegisterHeader;
