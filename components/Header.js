import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends Component {

  render() {
    
    const { title, bgColor } = this.props;

    return(
      <View style={ styles.container }>
        <Text style={{ color: '#fff', fontSize:20 }}>Todo List</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    padding: 12,
    backgroundColor: 'steelblue',
  }
})