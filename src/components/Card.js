import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import propTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const {text, backgroundColor} = this.props;
    return (
      <View style={[styles.cardContainer, {backgroundColor}]}>
        <Text style={styles.cardText}> {text} </Text>
      </View>
    );
  }
}

Card.propTypes = {
  text: propTypes.string,
  backgroundColor: propTypes.string,
};

const styles = StyleSheet.create({
  cardContainer: {},
  cardText: {},
});
