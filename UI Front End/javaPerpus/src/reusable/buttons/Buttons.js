import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ButtonsStyle';

export default function Buttons(props) {
  return (
    <TouchableOpacity onPress={props.press}>
      <View
        style={[
          styles.button,
          {
            width: props.width,
            backgroundColor: props.bgColor,
            borderColor: props.borColor,
            height: props.height,
            borderRadius: props.radius,
          },
        ]}>
        <Text style={[styles.text, {color: props.color}]}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}
