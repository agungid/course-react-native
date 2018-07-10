import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

export default class App extends Component {

  render() {
    return(
      <View style={ styles.container }>
        <Header />
        <Body/>
        <Footer/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
});