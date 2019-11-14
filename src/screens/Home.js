import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hoş Geldiniz.!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
