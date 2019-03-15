import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCS6CL5f_26IyrRkb1_362BCVvEj1vX1o4',
      authDomain: 'reactnativeauth-843d6.firebaseapp.com',
      databaseURL: 'https://reactnativeauth-843d6.firebaseio.com',
      projectId: 'reactnativeauth-843d6',
      storageBucket: 'reactnativeauth-843d6.appspot.com',
      messagingSenderId: '471286728276'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
