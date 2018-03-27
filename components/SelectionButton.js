import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import { Svg } from 'expo';

export default class SelectionButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var selection = null
    if (this.props.selectionType == 'square') {
      selection = <Svg.Rect x={2} y={2} width={30} height={30} strokeWidth={2} stroke='black' fill='white' />
    } else if (this.props.selectionType == 'circle') {
      selection = <Svg.Circle cx={17} cy={17} r={15} strokeWidth={2} stroke='black' fill='white' />
    } else if (this.props.selectionType == 'triangle') {
      selection = <Svg.Polygon points='17,2 32,32 2,32' strokeWidth={2} stroke='black' fill='white' />
    } else {
      selection = <Svg.Line x1={2} y1={2} x2={32} y2={32} stroke='black' strokeWidth={2} />
    }
    return (
      <TouchableHighlight
        activeOpacity={1}
        underlayColor='white'
        onPress={() => this.props.onSelection(this.props.selectionType) } >
        <View style={this.props.pressStatus ? styles.buttonDown : styles.buttonUp} >
          <Svg width={35} height={35} >
            {selection}
          </Svg>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  buttonDown: {
    flex: 1,
    width: Dimensions.get('window').width/4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightsteelblue'
  },

  buttonUp: {
    flex: 1,
    width: Dimensions.get('window').width/4,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
