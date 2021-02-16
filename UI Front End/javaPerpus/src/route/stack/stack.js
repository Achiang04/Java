import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screen/Login/Login';
import Register from '../../screen/Register/Register';
import Home from '../../screen/Home/Home';

const Stack = createStackNavigator();

export default function StackScreen() {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
