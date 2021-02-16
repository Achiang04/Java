import React, {useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  TouchableOpacity,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

import styles from './RegisterStyle.js';
import Input from '../../reusable/input/Input';
import Icon from '../../reusable/buttons/Icon';
import Buttons from '../../reusable/buttons/Buttons';

export default function Register({navigation}) {
  const [show, setShow] = useState(true);
  const [visible, setVisible] = useState(true);
  const [username, setUsername] = useState('admin');
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('admin');

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Input
          text={'Username'}
          ph={'Masukkan Email'}
          change={(item) => setUsername(item)}
          length={40}
          value={username}
        />
        <Input
          text={'Email'}
          ph={'Masukkan Email'}
          change={(item) => setEmail(item)}
          length={40}
          value={email}
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
        <Buttons
          text={'Login'}
          color={'white'}
          bgColor={'#3C8B43'}
          borColor={'#3C8B43'}
          height={40}
          width={'90%'}
          radius={7}
          press={() => navigation.replace('TabScreen')}
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
