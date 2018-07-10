import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';

import { Content1, Content2 } from "./Content";

export default class Body extends Component {

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.body }>

          <Content1 title={1} />

          <View style={{ backgroundColor: '#96aebc', height: 100, alignSelf: 'flex-end' }}>
            <Text>Align Self</Text>
          </View>

          <Content2 title={2} />
        </View>
        <View style={ styles.body2 }>
          <Content1 title={1} />
          <Content2 title={2} />
        </View>
        <View style={styles.body3}>
          <Content1 title={1} />
          <Content2 title={2} />
          <Content1 title={3} />
          <Content2 title={4} />
          <Content1 title={5} />
          <Content2 title={6} />
          <Content1 title={7} />
          <Content2 title={8} />
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
  body: {
    flex: 5,
    backgroundColor: '#d5dae2',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  body2: {
    flex: 5,
    backgroundColor: '#e2dbd5',
    justifyContent: 'center'
  },
  body3: {
    flex: 5,
    backgroundColor: '#d6c5c5',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
  }
})