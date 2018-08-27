import React, { Component } from 'react';
import ZingUpLifeStore from './src/store/ZingUpLifeStore';
import { Provider } from 'react-redux';
import ZingUpLifeApp from './src/components/common/main/ZingUpLifeApp';

export default class App extends Component {
  render() {
    return (
      <Provider store={ZingUpLifeStore}>
        <ZingUpLifeApp />
      </Provider>
    );
  }
}



