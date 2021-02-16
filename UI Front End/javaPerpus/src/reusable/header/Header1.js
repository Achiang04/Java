import React from 'react';
import {View, Text} from 'react-native';
import styles from './HeaderStyle';

export default function Header1(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.judul}>{props.judul}</Text>
    </View>
  );
}
