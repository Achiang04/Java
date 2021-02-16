import React, {useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  TouchableOpacity,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

import styles from './LoginStyle';
import Input from '../../reusable/input/Input';
import Icon from '../../reusable/buttons/Icon';
import Buttons from '../../reusable/buttons/Buttons';

export default function Login({navigation}) {
  const [show, setShow] = useState(true);
  const [visible, setVisible] = useState(true);
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');

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
          press={() => navigation.replace('Home')}
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
