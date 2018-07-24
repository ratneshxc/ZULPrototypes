import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AppRoute from './src/config/Route'
import ZingUpLifeStore from './src/store/ZingUpLifeStore';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import ZulaWakeUpbtn from './src/components/Zula/ZulaWakeUpbtn';

export default class App extends Component {
  render() {
    return (
      <Provider store={ZingUpLifeStore}>
        <View style={{flex:1}}>
          <Root>
            <AppRoute />
          </Root>
          {/* <ZulaWakeUpbtn /> */}
        </View>
      </Provider>
    );
  }
}


