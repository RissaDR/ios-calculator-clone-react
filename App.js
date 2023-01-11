import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalcButton from './CalcButton.js';

var expression = " ";

export default function App() {
  const [number, setNumber] = useState(expression);
  return (
    <View style={styles.container}>

      <View style={styles.calculateWindow}>
        <View style={styles.calculationTextBox}>
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.calculation}>{number}</Text>
        </View>
      </View>
      <View style={styles.buttonRow}>
        <CalcButton onPress={() => { setNumber(clearExpression()); }} color="lightgray" text="AC"></CalcButton>
        <CalcButton onPress={() => { setNumber(switchSign()); }} color="lightgray" text="⁺∕₋"></CalcButton>
        <CalcButton onPress={() => { setNumber(percentage()); }} color="lightgray" text="%"></CalcButton>
        <CalcButton onPress={() => { setNumber(collectExpression(" / ")); }} color="orange" text="÷"></CalcButton>
      </View>

      <View style={styles.buttonRow}>
        <CalcButton onPress={() => { setNumber(collectExpression("7")); }} color="dimgray" text="7"></CalcButton>
        <CalcButton onPress={() => { setNumber(collectExpression("8")); }} color="dimgray" text="8"></CalcButton>
        <CalcButton onPress={() => { setNumber(collectExpression("9")); }} color="dimgray" text="9"></CalcButton>
        <CalcButton onPress={() => { setNumber(collectExpression(" * ")); }} color="orange" text="×"></CalcButton>
      </View>

      <View style={styles.buttonRow}>
        <CalcButton onPress={() => { setNumber(collectExpression("4")); }} color="dimgray" text="4"></CalcButton>
        <CalcButton onPress={() => { setNumber(collectExpression("5")); }} color="dimgray" text="5"></CalcButton>
        <CalcButton onPress={() => { setNumber(collectExpression("6")); }} color="dimgray" text="6"></CalcButton>
        <CalcButton onPress={() => { setNumber(collectExpression(" - ")); }} color="orange" text="-"></CalcButton>
      </View>

      <View style={styles.buttonRow}>
        <CalcButton onPress={() => { setNumber(collectExpression("3")); }} color="dimgray" text="3"></CalcButton>
        <CalcButton onPress={() => { setNumber(collectExpression("2")); }} color="dimgray" text="2"></CalcButton>
        <CalcButton onPress={() => { setNumber(collectExpression("1")); }} color="dimgray" text="1"></CalcButton>
        <CalcButton onPress={() => { setNumber(collectExpression(" + ")); }} color="orange" text="+"></CalcButton>
      </View>

      <View style={styles.buttonRow}>
        <CalcButton onPress={() => { setNumber(collectExpression("0")); }} wide={true} color="dimgray" text="0"></CalcButton>
        <CalcButton onPress={() => { setNumber(collectExpression(".")); }} color="dimgray" text="."></CalcButton>
        <CalcButton onPress={() => { setNumber(parseExpression(expression)); }} color="dimgray" text="="></CalcButton>
      </View>
    </View>
  );
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
  calculationTextBox: {
    height: 120,
    marginTop: 70,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  calculation: {
    fontSize: 120,
    fontWeight: 'normal',
    color: 'white',
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

function percentage() {
  expression /= 100;
  return expression;
}

function switchSign() {
  if (expression.charAt(0) == "-") {
    expression = expression.slice(1);
  } else {
    expression = "-" + expression;
  }
  return expression;
}

function clearExpression() {
  expression = " ";
  return expression;
}

function collectExpression(input) {
  expression += input;
  return expression;
}

function parseExpression() {
  try {
    expression = eval(expression).toString();
  } finally {
    return expression;
  }
}