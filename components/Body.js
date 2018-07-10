import React, { Component } from "react";
import { View, Text, StyleSheet, CheckBox } from 'react-native';

import { Content1, Content2 } from "./Content";

export default class Body extends Component {

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.listItem }>
          <View style={ styles.listItemLeft }>
            <CheckBox />
            <CheckBox />
          </View>
          <View style={ styles.listItemRight }>
            <Text style={{ padding:7 }}>List item one</Text>
            <Text style={{ padding: 7 }}>List item twu</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:5,
    backgroundColor: '#ffffff'
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    padding:10
  },
  listItemLeft: {
    flex: 1
  },
  listItemRight: {
    flex: 9
  }
})