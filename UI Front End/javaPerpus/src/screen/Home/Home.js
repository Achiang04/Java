import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './HomeStyle';
import Header1 from '../../reusable/header/Header1';

export default function Home() {
  const [book, setBook] = useState([]);

  const getAllBook = async () => {
    try {
      let response = await fetch(`http://localhost:9000/book/getAll`);
      let json = await response.json();
      setBook(json.data);
    } catch (error) {
      console.log(error);
    }
  };

  const RenderBook = () => {
    return (
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
    );
  };

  return (
    <View style={styles.container}>
      <Header1 judul={'Borrowing'} />
      {RenderBook()}
    </View>
  );
}
