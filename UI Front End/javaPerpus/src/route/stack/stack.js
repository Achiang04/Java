import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screen/Login/Login';
import Register from '../../screen/Register/Register';
import Home from '../../screen/Home/Home';
import AddBook from '../../screen/AddBook/AddBook';
import Book from '../../screen/Book/Book';
import EditBook from '../../screen/Book/EditBook';

const Stack = createStackNavigator();

export default function StackScreen() {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddBook" component={AddBook} />
      <Stack.Screen name="Book" component={Book} />
      <Stack.Screen name="EditBook" component={EditBook} />
    </Stack.Navigator>
  );
}
