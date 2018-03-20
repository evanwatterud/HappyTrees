import React from 'react';
import { StyleSheet, Text, View, PanResponder } from 'react-native';

export default class DrawScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
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

  render() {
    return (
      <View style={{
        flex: 1
      }} {...this._panResponder.panHandlers} >
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
