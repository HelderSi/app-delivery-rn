import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux'
import store from './store'
import firebase from 'firebase'

import Routes from './Routes'

export default class App extends Component{

  componentWillMount(){
    // Initialize Firebase
    let config = {
      apiKey: "AIzaSyAdIfcRHFb1IoBg3vpBP9A5s-7EJkq6CVU",
      authDomain: "rn-course-delivery.firebaseapp.com",
      databaseURL: "https://rn-course-delivery.firebaseio.com",
      projectId: "rn-course-delivery",
      storageBucket: "rn-course-delivery.appspot.com",
      messagingSenderId: "842936748809"
    };
    firebase.initializeApp(config);
  }

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
