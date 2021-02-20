import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import styles from './HomeStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header1 from '../../reusable/header/Header1';
import {wp, hp} from '../../reusable/Responsive/dimen';
import Axios from 'axios';
import {token} from '../../general/constant';

export default function Home({navigation}) {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllBook = async () => {
    // const token = await AsyncStorage.getItem('userToken');
    // console.log(token);
    setLoading(true);
    Axios.get('https://murmuring-shelf-21670.herokuapp.com/book/getAll', {
      headers: {
        // Authorization: `Bearer ${token}`,
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => {
        console.log('res :', res);
        setBook(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllBook();
  }, []);

  let buffer;
  if (loading) {
    buffer = <ActivityIndicator color={'#1A3150'} size={wp(20)} />;
  }

  const RenderBook = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Borrow', {
            judul: item.title,
          })
        }>
        <View style={styles.containerBook}>
          <View style={styles.bookImageContainer}>
            <Image
              style={styles.bookImage}
              source={require('../../assets/image/book.png')}
            />
            <View style={styles.judulContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.author}</Text>
              <Text>{item.publisher}</Text>
              <Text>{item.year}</Text>
              <Text>{item.category}</Text>
            </View>
            <View style={styles.bulatQuantity}>
              <Text style={styles.quantity}>{item.quantity}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header1 judul={'Home'} />
      {buffer}
      <FlatList
        data={book.data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return <RenderBook item={item} />;
        }}
      />
      <TouchableOpacity
        style={styles.addBook}
        onPress={() => navigation.navigate('AddBook')}>
        <Text style={styles.addBookText}>Add Book</Text>
      </TouchableOpacity>
      <Text style={styles.borrowBook}>** Borrow? click the Book</Text>
    </View>
  );
}
