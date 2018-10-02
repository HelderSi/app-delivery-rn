import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux'
import store from './store'

import Pedido from './pages/Pedido'

export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Pedido />
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
