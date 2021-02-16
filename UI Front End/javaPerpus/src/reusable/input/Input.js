import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './InputStyle';

export default function Input(props) {
  return (
    <View>
      <Text style={styles.text}>{props.text}</Text>
      <TextInput
        style={styles.input}
        placeholder={props.ph}
        keyboardType={props.type}
        onChangeText={props.change}
        secureTextEntry={props.secure}
        maxLength={props.length}
        value={props.value}
      />
    </View>
  );
}
