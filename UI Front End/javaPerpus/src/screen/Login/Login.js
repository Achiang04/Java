import React, {useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import Axios from 'axios';
import {RFPercentage} from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {wp, hp} from '../../reusable/Responsive/dimen';
import styles from './LoginStyle';
import Input from '../../reusable/input/Input';
import Icon from '../../reusable/buttons/Icon';
import Buttons from '../../reusable/buttons/Buttons';

export default function Login({navigation}) {
  const [show, setShow] = useState(true);
  const [visible, setVisible] = useState(true);
  const [username, setUsername] = useState('asep1');
  const [password, setPassword] = useState('asep1');
  const [loading, setLoading] = useState(false);

  // const loginAction = (username, password) => {
  //   setLoading(true);
  //   console.log('try login');
  //   fetch(`https://murmuring-shelf-21670.herokuapp.com/authenticate`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     },
  //     body: JSON.stringify({
  //       userName: username,
  //       password: password,
  //     }),
  //   })
  //     .then((response) => {
  //       console.log('fetch response', response);
  //       // AsyncStorage.setItem('userToken', response);
  //       setLoading(false);
  //       console.log('login done');
  //       return true;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       return false;
  //     });
  // };

  const loginAction = (username, password) => {
    setLoading(true);
    console.log('try login 2');
    fetch(`https://murmuring-shelf-21670.herokuapp.com/authenticate`, {
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
      .then((json) => {
        console.log('fetch response', json);
        // AsyncStorage.setItem('userToken', response);
        setLoading(false);
        console.log('login done');
        navigation.navigate('Home');
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        return false;
      });
  };

  let buffer;
  if (loading) {
    buffer = <ActivityIndicator color={'#1A3150'} size={wp(20)} />;
  } else {
    buffer = <Text>Login</Text>;
  }

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
          text={buffer}
          color={'white'}
          bgColor={'#3C8B43'}
          borColor={'#3C8B43'}
          height={40}
          width={'90%'}
          radius={7}
          press={() => loginAction(username, password)}
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
