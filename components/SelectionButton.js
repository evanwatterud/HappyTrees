import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';

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
        <View style={this.props.pressStatus ? styles.buttonDown : styles.buttonUp} >
          <Text style={this.props.pressStatus ? styles.playTextDown : styles.playTextUp}>button</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  buttonDown: {
    flex: 1,
    width: Dimensions.get('window').width/3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black'
  },

  buttonUp: {
    flex: 1,
    width: Dimensions.get('window').width/3,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
