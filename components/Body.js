import React, { Component } from "react";
import { View, Text } from 'react-native';
import { Content1, Content2 } from "./Content";

export default class Body extends Component {

  render() {
    return (
      <View style={{ backgroundColor: 'red' }}>
        <Content1 title={1}/>
        <Content2 title={2}/>
      </View>
    )
  }
}