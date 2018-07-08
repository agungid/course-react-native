import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, Alert } from 'react-native';

export default class App extends Component {

  handleClick() {
    alert('Clicked')
  }

  render() {
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={ () => this.handleClick() }
          style={{ backgroundColor: '#d0d0d0', padding: 12 }}
        >
          <Text>Klik Saya!</Text>
        </TouchableOpacity>
        <Button onPress={ () => {
            Alert.alert('Click from button')
          }} title="Click Button" />
      </View>
    )
  }
}