import React, { Component } from "react";
import { View, Text } from 'react-native';

export default class Header extends Component {

  render() {
    
    const { title, bgColor } = this.props;

    return(
      <View style={{ backgroundColor: bgColor }}>
        <Text>{ title }</Text>
      </View>
    )
  }
}