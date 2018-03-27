import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SelectionButton from './SelectionButton.js';

export default class SelectionBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      square: true,
      circle: false,
      triangle: false,
      line: false
    }
  }

  handleSelection = (selectionType) => {
    // Reset the state
    this.setState({
      square: false,
      circle: false,
      triangle: false,
      line: false
    })
    // Check which type has been selected, and set that to selected
    this.setState(prevState => {
      prevState[selectionType] = true
      return prevState
    })

    this.props.onSelection(selectionType)
  }

  render() {
    return (
      <View style={styles.barContainer}>
        <SelectionButton onSelection={this.handleSelection} selectionType='square' pressStatus={this.state.square} />
        <SelectionButton onSelection={this.handleSelection} selectionType='circle' pressStatus={this.state.circle} />
        <SelectionButton onSelection={this.handleSelection} selectionType='triangle' pressStatus={this.state.triangle} />
        <SelectionButton onSelection={this.handleSelection} selectionType='line' pressStatus={this.state.line} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  barContainer: {
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 3
  }
});
