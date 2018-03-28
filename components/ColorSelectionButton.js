import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import { Svg } from 'expo';

export default class ColorSelectionButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight
        activeOpacity={1}
        underlayColor='white'
        onPress={() => this.props.onSelection(this.props.selectionColor) } >
        <View style={this.props.pressStatus == this.props.selectionColor ? styles.buttonDown : styles.buttonUp} >
          <Svg width={35} height={35} >
            <Svg.Rect
              x={2}
              y={2}
              width={30}
              height={30}
              stroke={this.props.selectionColor == 'white' ? 'black' : null}
              strokeWidth={this.props.selectionColor == 'white' ? 1 : 0}
              fill={this.props.selectionColor} />
          </Svg>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  buttonDown: {
    flex: 1,
    width: Dimensions.get('window').width/8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightsteelblue'
  },

  buttonUp: {
    flex: 1,
    width: Dimensions.get('window').width/8,
    justifyContent: 'center',
    alignItems: 'center',

  }
});
