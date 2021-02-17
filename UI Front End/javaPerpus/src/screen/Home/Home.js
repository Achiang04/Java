import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './HomeStyle';
import Header1 from '../../reusable/header/Header1';

import Axios from 'axios';

export default function Home() {
  const [book, setBook] = useState([]);

  // axios
  // const getAllBook = () => {
  //   console.log('try to getAllbook');
  //   Axios.get('http://10.0.2.2:9000/book/getAll', {
  //     headers: {
  //       Authorization:
  //         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhc2VwMSIsImV4cCI6MTYxMzU4MzMyNCwiaWF0IjoxNjEzNTQ3MzI0fQ.IjdWEWb0yI-sg5rXc4B2eZQu9mUSktc_AhO-PU-G4Y0',
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((res) => {
  //       console.log('res :', res);
  //       setBook(res);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // fetch
  // const getAllBook = () => {
  //   console.log('try to getAllbook');
  //   fetch('http://10.0.2.2:9000/book/getAll', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //       Authorization:
  //         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhc2VwMSIsImV4cCI6MTYxMzU4MzMyNCwiaWF0IjoxNjEzNTQ3MzI0fQ.IjdWEWb0yI-sg5rXc4B2eZQu9mUSktc_AhO-PU-G4Y0',
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log('res :', data);
  //       setBook(data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const getAllBook = () => {
    console.log('try to getAllbook');
    fetch('http://127.0.0.1:9000/book/getAll', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhc2VwMSIsImV4cCI6MTYxMzU4MzMyNCwiaWF0IjoxNjEzNTQ3MzI0fQ.IjdWEWb0yI-sg5rXc4B2eZQu9mUSktc_AhO-PU-G4Y0',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('res :', data);
        setBook(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllBook();
  }, []);

  console.log('book', book);

  const RenderBook = () => {
    return (
      <TouchableOpacity>
        <View style={styles.containerBook}>
          <View style={styles.bookImageContainer}>
            <Image
              style={styles.bookImage}
              source={require('../../assets/image/book.png')}
            />
            <View style={styles.judulContainer}>
              <Text>Dia</Text>
              <Text>Asep</Text>
              <Text>Gramedia</Text>
              <Text>2020</Text>
              <Text>War</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header1 judul={'Borrowing'} />
      {RenderBook()}
      {RenderBook()}
      {RenderBook()}
    </View>
  );
}
