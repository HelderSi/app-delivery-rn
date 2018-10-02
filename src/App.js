import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux'
import store from './store'

import Routes from './Routes'

export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Routes />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
