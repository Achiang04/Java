import React, {useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

import styles from './RegisterStyle.js';
import Input from '../../reusable/input/Input';
import Icon from '../../reusable/buttons/Icon';
import Buttons from '../../reusable/buttons/Buttons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {wp, hp} from '../../reusable/Responsive/dimen';

export default function Register({navigation}) {
  const [show, setShow] = useState(true);
  const [visible, setVisible] = useState(true);
  const [username, setUsername] = useState('asep3');
  const [name, setName] = useState('asep3');
  const [password, setPassword] = useState('asep3');
  const [loading, setLoading] = useState(false);

  const regisAction = (name, password, username) => {
    setLoading(true);
    console.log('try regis');
    fetch(`https://murmuring-shelf-21670.herokuapp.com/employee/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: name,
        password: password,
        user_name: username,
      }),
    })
      .then((response) => {
        console.log('response', response);
        AsyncStorage.setItem('userToken', response);
        setLoading(false);
        console.log('regis done');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  let buffer;
  if (loading) {
    buffer = <ActivityIndicator color={'#1A3150'} size={wp(20)} />;
  } else {
    buffer = <Text>Sign Up</Text>;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Input
          text={'Name'}
          ph={'Masukkan Name'}
          change={(item) => setName(item)}
          length={40}
          value={name}
        />
        <View>
          <Input
            text={'Password'}
            ph={'Masukkan Password'}
            secure={visible}
            change={(item) => setPassword(item)}
            length={35}
            value={password}
          />
          <View style={styles.icon}>
            <Icon
              name={show === true ? 'eye-off' : 'eye'}
              size={RFPercentage(2.5)}
              color="black"
              press={() => {
                setVisible(!visible);
                setShow(!show);
              }}
            />
          </View>
        </View>
        <Input
          text={'Username'}
          ph={'Masukkan Email'}
          change={(item) => setUsername(item)}
          length={40}
          value={username}
        />
        <Buttons
          text={buffer}
          color={'white'}
          bgColor={'#3C8B43'}
          borColor={'#3C8B43'}
          height={40}
          width={'90%'}
          radius={7}
          press={() => regisAction(name, password, username)}
        />
        <TouchableOpacity
          style={styles.signUpText}
          onPress={() => navigation.replace('Login')}>
          <Text style={styles.text}>Already have account ? Sign In</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
