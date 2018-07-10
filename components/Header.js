import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends Component {

  render() {
    
    const { title, bgColor } = this.props;

    return(
      <View style={ styles.container }>
        <Text>Todo List</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:0.3,
    paddingTop:20,
    backgroundColor: 'steelblue',
  }
})