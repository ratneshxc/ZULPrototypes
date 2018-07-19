import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AppRoute from './src/config/Route'
import ZingUpLifeStore from './src/store/ZingUpLifeStore';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core'


export default class App extends Component {
  render() {
    return (
      <Provider store={ZingUpLifeStore}>
        <AppRoute />
      </Provider>
    );
  }
}


