import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './HeaderStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFPercentage} from 'react-native-responsive-fontsize';

export default function Header1(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={props.back}>
        <Ionicons
          name={'chevron-back-outline'}
          color={'#52617D'}
          size={RFPercentage(3)}
        />
      </TouchableOpacity>
      <Text style={styles.judul}>{props.judul}</Text>
    </View>
  );
}
