import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from "./components/Header";
import Body from "./components/Body";

export default class App extends Component {

  render() {
    return(
      <View style={{ flex:1, justifyContent: 'center' }}>
        <Header title="Header Todo List" bgColor="aqua" />
        <Body/>
      </View>
    )
  }
}