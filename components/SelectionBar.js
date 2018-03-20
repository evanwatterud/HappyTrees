import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SelectionButton from './SelectionButton.js';

export default class SelectionBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSelection(selectionType) {

  }

  render() {
    return (
      <View style={styles.barContainer}>
        <SelectionButton onSelection={this.handleSelection} selectionType='square' />
        <SelectionButton onSelection={this.handleSelection} selectionType='circle' />
        <SelectionButton onSelection={this.handleSelection} selectionType='triangle' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  infoText: {
    fontWeight: 'bold',
  },

  barContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
