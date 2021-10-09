import React, { Component } from 'react';
import { View } from "react-native";
import Register from './src/components/register/Register';
import  Message  from './src/components/message/Message';

class App extends Component{

  render() {
    return(
      <>
        <Register/>
      </>
    );
  }
}

export default App;

