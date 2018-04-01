import React from 'react';
import { StyleSheet, Text, View, PanResponder } from 'react-native';
import TypeSelectionBar from '../components/TypeSelectionBar.js';
import ColorSelectionBar from '../components/ColorSelectionBar.js';
import UtilityBar from '../components/UtilityBar.js';
import { Svg } from 'expo';

export default class DrawScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: 'square',
      selectedColor: 'black',
      selectedSize: 25,
      squares: [],
      circles: [],
      triangles: []
    };
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => this.onResponderGrant(evt, gestureState),
      onPanResponderMove: (evt, gestureState) => this.onResponderMove(evt, gestureState),
      onPanResponderRelease: (evt, gestureState) => this.onResponderRelease(evt, gestureState)
    })
  }

  handleTypeSelection = (selectionType) => {
    this.setState(prevState => {
      prevState.selectedType = selectionType
      return prevState
    })
  }

  handleColorSelection = (selectionColor) => {
    this.setState(prevState => {
      prevState.selectedColor = selectionColor
      return prevState
    })
  }

  handleSizeSelection = (selectionSize) => {
    this.setState(prevState => {
      prevState.selectedSize = selectionSize
      return prevState
    })
  }

  onResponderGrant(evt) {

  }

  onResponderMove(evt) {

  }

  onResponderRelease(evt) {
    let locationX, locationY
    [locationX, locationY] = [evt.nativeEvent.locationX, evt.nativeEvent.locationY]

    if (this.state.selectedType == 'square') {
      this.setState(prevState => {
        prevState.squares.push({x: locationX, y: locationY, size: this.state.selectedSize, color: this.state.selectedColor})
        return prevState
      })
    } else if (this.state.selectedType == 'circle') {
      this.setState(prevState => {
        prevState.circles.push({x: locationX, y: locationY, size: this.state.selectedSize/2, color: this.state.selectedColor})
        return prevState
      })
    } else if (this.state.selectedType == 'triangle') {
      this.setState(prevState => {
        var size = this.state.selectedSize
        var x1 = locationX
        var y1 = locationY - size/2
        var x2 = locationX + size/2
        var y2 = locationY + size/2
        var x3 = locationX - size/2
        var y3 = locationY + size/2
        prevState.triangles.push({x1: x1.toString(), y1: y1.toString(), x2: x2.toString(), y2: y2.toString(), x3: x3.toString(), y3: y3.toString(), color: this.state.selectedColor})
        return prevState
      })
    }
  }

  handleClear = () => {
    this.setState(prevState => {
      prevState.squares = []
      prevState.circles = []
      prevState.triangles = []
      return prevState
    })
  }

  render() {
    var squares = this.state.squares.map(
      (square) => <Svg.Rect x={square.x - square.size/2} y={square.y - square.size/2} width={square.size} height={square.size} fill={square.color} />
    )

    var circles = this.state.circles.map(
      (circle) => <Svg.Circle cx={circle.x} cy={circle.y} r={circle.size} fill={circle.color} />
    )

    var triangles = this.state.triangles.map(
      (triangle) => <Svg.Polygon points={triangle.x1 + ',' + triangle.y1 + ' ' + triangle.x2 + ',' + triangle.y2 + ' ' + triangle.x3 + ',' + triangle.y3} fill={triangle.color} />
    )

    return (
      <View style={{ flex: 1 }} >
        <View style={{ flex: .10 }} >
          <ColorSelectionBar onSelection={this.handleColorSelection} />
        </View>
        <View style={{ flex: .825, flexDirection: 'column' }} >
          <View style={{ flex: .9 }} {...this._panResponder.panHandlers} >
            <Svg style={{flex: 1}}>
              {squares}
              {circles}
              {triangles}
            </Svg>
          </View>
          <View style={{ flex: .1 }} >
            <UtilityBar onSelection={this.handleSizeSelection} onClear={this.handleClear} />
          </View>
        </View>
        <View style={{ flex: .075 }} >
          <TypeSelectionBar onSelection={this.handleTypeSelection} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
