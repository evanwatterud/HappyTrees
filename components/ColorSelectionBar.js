import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ColorSelectionButton from './ColorSelectionButton.js';

export default class ColorSelectionBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'black'
    }
  }

  handleSelection = (selectionColor) => {
    this.setState(prevState => {
      prevState.selected = selectionColor
      return prevState
    })

    this.props.onSelection(selectionColor)
  }

  render() {
    return (
      <View style={styles.barContainer}>
        <ColorSelectionButton onSelection={this.handleSelection} selectionColor='black' pressStatus={this.state.selected} />
        <ColorSelectionButton onSelection={this.handleSelection} selectionColor='blue' pressStatus={this.state.selected} />
        <ColorSelectionButton onSelection={this.handleSelection} selectionColor='green' pressStatus={this.state.selected} />
        <ColorSelectionButton onSelection={this.handleSelection} selectionColor='brown' pressStatus={this.state.selected} />
        <ColorSelectionButton onSelection={this.handleSelection} selectionColor='yellow' pressStatus={this.state.selected} />
        <ColorSelectionButton onSelection={this.handleSelection} selectionColor='purple' pressStatus={this.state.selected} />
        <ColorSelectionButton onSelection={this.handleSelection} selectionColor='red' pressStatus={this.state.selected} />
        <ColorSelectionButton onSelection={this.handleSelection} selectionColor='white' pressStatus={this.state.selected} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  barContainer: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 3,
    borderTopWidth: 2,
    marginTop: 20
  }
});
