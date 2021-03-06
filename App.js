import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawScreen from './containers/DrawScreen.js';

export default class App extends React.Component {
  render() {
    return (
      <DrawScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
