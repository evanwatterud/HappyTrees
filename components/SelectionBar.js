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
        <SelectionButton onSelection={this.handleSelection} selectionType='square' pressStatus={true} />
        <SelectionButton onSelection={this.handleSelection} selectionType='circle' pressStatus={true} />
        <SelectionButton onSelection={this.handleSelection} selectionType='triangle' pressStatus={true} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  barContainer: {
    flex: 1,
    flexDirection: 'row'
  }
});
