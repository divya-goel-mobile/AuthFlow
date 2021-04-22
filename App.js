/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (  
      <Provider store={store}>   
        <Navigation />
      </Provider>
    );
  }
}
