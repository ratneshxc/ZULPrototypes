import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AppRoute from './src/config/Route'
import ZingUpLifeStore from './src/store/ZingUpLifeStore';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import Zula from './src/components/Zula/Zula';


export default class App extends Component {
  render() {
    return (
      <Provider store={ZingUpLifeStore}>
        <View style={{ flex: 1 }}>
          <Root>
            <AppRoute />
          </Root>
          <Zula />
        </View>
      </Provider>
    );
  }
}



