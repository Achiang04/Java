import React, {useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  TouchableOpacity,
} from 'react-native';

import Axios from 'axios';
import {RFPercentage} from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './LoginStyle';
import Input from '../../reusable/input/Input';
import Icon from '../../reusable/buttons/Icon';
import Buttons from '../../reusable/buttons/Buttons';

export default function Login({navigation}) {
  const [show, setShow] = useState(true);
  const [visible, setVisible] = useState(true);
  const [username, setUsername] = useState('asep1');
  const [password, setPassword] = useState('asep1');

  // async function loginAction(username, password) {
  //   console.log('try to login');
  //   try {
  //     const response = await Axios.post(`http://10.0.2.2:9000/authenticate`, {
  //       body: JSON.stringify({
  //         userName: username,
  //         password: password,
  //       }),
  //     });
  //     console.log('response', response);
  //     await AsyncStorage.setItem('userToken', response.data.access_token);
  //     navigation.replace('Home');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const loginAction = (username, password) => {
    console.log('try to login');
    fetch(`http://10.0.2.2:9000/authenticate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        userName: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('response', json);
        navigation.replace('Home');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Input
          text={'Email'}
          ph={'Masukkan Email'}
          change={(item) => setUsername(item)}
          length={40}
          value={username}
        />
        <View>
          <Input
            text={'Password'}
            ph={'Masukkan Password'}
            secure={visible}
            change={(item) => setPassword(item)}
            length={35}
            r
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
        <Buttons
          text={'Login'}
          color={'white'}
          bgColor={'#3C8B43'}
          borColor={'#3C8B43'}
          height={40}
          width={'90%'}
          radius={7}
          press={() => {
            // loginAction(username, password);
            navigation.replace('Home');
          }}
        />
        <TouchableOpacity
          style={styles.signUpText}
          onPress={() => navigation.replace('Register')}>
          <Text style={styles.text}>Dont have account ? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
