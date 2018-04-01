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
      keys: 0,
      selectedType: 'square',
      selectedColor: 'black',
      selectedSize: 25,
      squares: [],
      circles: [],
      triangles: [],
      strokes: [],
      currentPoints: []
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
    let locationX, locationY
    [locationX, locationY] = [evt.nativeEvent.locationX, evt.nativeEvent.locationY]

    if (this.state.selectedType == 'line') {
      this.setState(prevState => {
        prevState.currentPoints.push(`M${locationX} ${locationY}`)
        return prevState
      })
    }
  }

  onResponderMove(evt) {
    let locationX, locationY
    [locationX, locationY] = [evt.nativeEvent.locationX, evt.nativeEvent.locationY]

    if (this.state.selectedType == 'line') {
      this.setState(prevState => {
        prevState.currentPoints.push(`L${locationX} ${locationY}`)
        return prevState
      })
    }
  }

  onResponderRelease(evt) {
    let locationX, locationY
    [locationX, locationY] = [evt.nativeEvent.locationX, evt.nativeEvent.locationY]
    let size = this.state.selectedSize
    let color = this.state.selectedColor

    if (this.state.selectedType == 'square') {
      this.setState(prevState => {
        let square = (
          <Svg.Rect
            key={this.state.keys}
            x={locationX - size/2}
            y={locationY - size/2}
            width={size}
            height={size}
            fill={color}
          />
        )
        prevState.squares.push(square)
        prevState.keys = prevState.keys + 1
        return prevState
      })
    }

    else if (this.state.selectedType == 'circle') {
      this.setState(prevState => {
        let circle = (
          <Svg.Circle
            key={this.state.keys}
            cx={locationX}
            cy={locationY}
            r={size/2}
            fill={color}
          />
        )
        prevState.circles.push(circle)
        prevState.keys = prevState.keys + 1
        return prevState
      })
    }

    else if (this.state.selectedType == 'triangle') {
      this.setState(prevState => {
        let x1 = locationX
        let y1 = locationY - size/2
        let x2 = locationX + size/2
        let y2 = locationY + size/2
        let x3 = locationX - size/2
        let y3 = locationY + size/2
        let triangle = (
          <Svg.Polygon
            key={this.state.keys}
            points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`}
            fill={color}
          />
        )
        prevState.triangles.push(triangle)
        prevState.keys = prevState.keys + 1
        return prevState
      })
    }

    else if (this.state.selectedType == 'line') {
      let path = (
        <Svg.Path
          key={this.state.keys}
          d={this.concatCurrentPoints()}
          stroke={color}
          strokeWidth={size}
          fill='none'
        />
      )

      this.setState(prevState => {
        prevState.strokes.push(path)
        prevState.keys = prevState.keys + 1
        prevState.currentPoints = []
        return prevState
      })
    }
  }

  handleClear = () => {
    this.setState(prevState => {
      prevState.squares = []
      prevState.circles = []
      prevState.triangles = []
      prevState.strokes = []
      return prevState
    })
  }

  concatCurrentPoints = () => {
    var path = ''
    if (this.state.currentPoints.length > 0) {
      this.state.currentPoints.forEach(point => {
        path = path + ` ${point}`
      })
    }
    return path
  }

  render() {
    return (
      <View style={{ flex: 1 }} >
        <View style={{ flex: .10 }} >
          <ColorSelectionBar onSelection={this.handleColorSelection} />
        </View>
        <View style={{ flex: .825, flexDirection: 'column' }} >
          <View style={{ flex: .9 }} {...this._panResponder.panHandlers} >
            <Svg style={{flex: 1}}>
              {[...this.state.squares]}
              {[...this.state.circles]}
              {[...this.state.triangles]}
              {[...this.state.strokes]}
              <Svg.Path
                d={this.concatCurrentPoints()}
                stroke={this.state.selectedColor}
                strokeWidth={this.state.selectedSize}
                fill='none'
              />
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
