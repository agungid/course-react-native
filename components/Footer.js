import React,{ Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Footer extends Component {

  render() {
    return(
      <View style={ styles.container }>
        <Text>Footer</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    backgroundColor: '#E0E0E0',
    paddingTop: 20
  }
})