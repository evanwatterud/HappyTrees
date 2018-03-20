import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

export default class SelectionButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight
        activeOpacity={1}
        underlayColor='white'
        onPress={() => this.props.onSelection(this.props.selectionType) } >
        <View style={this.props.pressStatus ? styles.ButtonDown : styles.playButtonUp} >
          <Text style={this.props.pressStatus ? styles.playTextDown : styles.playTextUp}>button</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  infoText: {
    fontWeight: 'bold',
  },

  barContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
