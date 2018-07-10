import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';

export class Content1 extends Component{
  render() {
    return(
      <View style={ styles.item1 }>
        <Text>Content { this.props.title }</Text>
      </View>
    )
  }
}

export class Content2 extends Component {
  render() {
    const title = this.props.title;
    return (
      <View style={ styles.item2 }>
        <Text>Content { title }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item1: {
    backgroundColor: 'powderblue',
    width: 70,
    height: 70,
  },
  item2: {
    backgroundColor: 'skyblue',
    width:70,
    height: 70,
  }
})