import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Button} from 'react-native';

import {observer, inject} from 'mobx-react';
import CounterStore from '../store/CounterStore';

@inject('CounterStore')
@observer
export default class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.numberText}></Text>
          <View style={styles.buttonContainer}>
            <Button title="Arttır" />
            <Button title="Azalt" />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    fontSize: 28,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
