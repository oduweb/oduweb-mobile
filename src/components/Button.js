import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropType from 'prop-types';

export default class Button extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={[styles.button, {backgroundColor: this.props.bgColor}]}>
          <Text style={[styles.text, {color: this.props.textColor}]}>
            {this.props.text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Button.propTypes = {
  text: PropType.string.isRequired,
  bgColor: PropType.string,
  textColor: PropType.string,
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 3,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
  },
});
