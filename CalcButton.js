import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class CalcButton extends Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    wide: false   
  }

  render() {
    let color = this.props.color;
    let text = this.props.text;
    let wide = this.props.wide;
    
    return (
          <TouchableOpacity onPress={this.props.onPress}>
            <View style={wide ? styles.buttonWide : styles.button} backgroundColor={color}>
              <Text style={styles.buttonText}>{text}</Text>
            </View>
          </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculateView: {
    flex: 1,
    flexDirection: 'row',
  },
  calculation: {
    fontSize: 120,
    fontWeight: 'normal',
    color: 'white',
    paddingTop: 70,
    paddingRight: 10,
    alignSelf: 'flex-end',
  },
  buttonRow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10
    
  },
  button: {
    height: 70,
    width: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWide: {
    height: 70,
    width: 140,
    borderRadius: 50,
    alignItems: 'left',
    justifyContent: 'center',
    paddingLeft: 35
  },
  buttonText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  }
});
