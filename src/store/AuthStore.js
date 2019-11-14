import {observable, action} from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';

import NavigationService from '../NavigationService.js';

class AuthStore {
  @observable token = null;

  @action async saveToken(token) {
    try {
      await AsyncStorage.setItem('token', token);
      await this.setupAuth();
      console.log(NavigationService);
    } catch (e) {
      console.log(e);
    }
  }

  @action async setupAuth() {
    await this.getToken();
  }

  @action async getToken() {
    try {
      //await AsyncStorage.removeItem('token');
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        NavigationService.navigate('Auth');
        return false;
      }

      this.token = token;
      NavigationService.navigate('App');
    } catch (e) {
      console.log(e);
    }
  }
}

export default new AuthStore();
