import React from 'react';
import { StyleSheet, Text, View, PanResponder } from 'react-native';
import SelectionBar from '../components/SelectionBar.js';
import { Svg } from 'expo'

export default class DrawScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: 'square'
    };
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!

        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        // Tracks swiping coordinates
        console.log(gestureState.moveX);
        console.log(gestureState.moveY);
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The swipe or tap has ended
        console.log(evt.nativeEvent.pageX);
        console.log(evt.nativeEvent.pageY);
      }
    })
  }

  handleTypeSelection = (selectionType) => {
    this.setState(prevState => {
      prevState.selectedType = selectionType
      return prevState
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }} >
        <View style={{
          flex: .925
        }} {...this._panResponder.panHandlers} >
        </View>
        <View style={{ flex: .075 }} >
          <SelectionBar onSelection={this.handleTypeSelection}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
