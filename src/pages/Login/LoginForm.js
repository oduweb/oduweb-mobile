import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Formik} from 'formik';
import _ from 'lodash';

import {observer, inject} from 'mobx-react';
import axios from 'axios';

import auth from '../../core/auth';

@inject('AuthStore')
@observer
export default class LoginForm extends Component {
  _handleSubmit = async values => {
    const {data} = await axios.post('http://localhost:5001/graphql', {
      query: `
            mutation {
              login(email:"${values.email}",password:"${values.password}"){
                ok
                token
                refreshToken
                errors{
                  path
                  message
                }
              }
            }`,
      headers: {
        'Content-Type': 'application/json',
      },
    }); /*
      .then(result => {
        const token = result.data.data.login.token;
        //alert('token: ' + token);
      });*/
    if (!data.data.login.token) {
      alert(data.login.errors.message);
    }
    this.props.AuthStore.saveToken(data.data.login.token);
  };

  render() {
    /*eslint no-unused-vars: 0*/
    const {navigate, push} = this.props.navigation;
    return (
      <View>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={this._handleSubmit}>
          {({values, handleChange, handleSubmit}) => (
            <View>
              <Text style={styles.SingText}>Giriş</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('email')}
                placeholder="email"
                value={values.email}
                name="email"
                autoCapitalize="none"
              />
              <TextInput
                style={styles.input}
                onChangeText={handleChange('password')}
                placeholder="password"
                name="password"
                value={values.password}
                secureTextEntry={true}
                autoCapitalize="none"
              />
              <Button
                text="Giriş"
                bgColor={'#3f4565'}
                textColor={'#f1f1f1'}
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SingText: {
    marginVertical: 10,
    fontSize: 12,
    color: '#333',
  },
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
