import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default class Input extends Component {
  state = {
    text: '',
  };

  render() {
    return (
      <View>
        <TextInput
          {...this.props}
          placeholderTextColor="#ddd"
          style={styles.input}
          value={this.state.text}
          ref={this.props.inputRef}
          onChangeText={text => this.setState({text})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: '#af9b73',
    color: '#999',
    marginBottom: 8,
    fontSize: 14,
    fontWeight: '600',
  },
});
