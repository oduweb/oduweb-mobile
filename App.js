import React, {Component} from 'react';
import NavigationService from './src/NavigationService';

import store from './src/store/';

import Router from './src/Router';

import {Provider} from 'mobx-react';

export default class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <Router
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}
