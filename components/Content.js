import React, { Component } from "react";
import { View, Text } from 'react-native';

export class Content1 extends Component{
  render() {
    return(
      <View>
        <Text>Content { this.props.title }</Text>
      </View>
    )
  }
}

export class Content2 extends Component {
  render() {
    const title = this.props.title;
    return (
      <View>
        <Text>Content { title }</Text>
      </View>
    )
  }
}