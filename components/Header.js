import React, { Component } from "react";
import { View, Text } from 'react-native';

export default class Header extends Component {

  render() {
    return(
      <View style={{ backgroundColor:'green' }}>
        <Text>Header</Text>
      </View>
    )
  }
}