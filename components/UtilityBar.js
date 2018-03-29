import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Slider } from 'react-native-elements';

export default class UtilityBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 25
    }
  }

  handleSelection = (selectedSize) => {
    this.setState({ size: selectedSize });

    this.props.onSelection(selectedSize)
  }

  render() {
    return (
      <View style={styles.barContainer} >
        <Slider
          style={styles.slider}
          step={1}
          maximumValue={50}
          minimumValue={1}
          onSlidingComplete={this.handleSelection}
          value={this.state.size}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  barContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },

  slider: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5
  }
});
