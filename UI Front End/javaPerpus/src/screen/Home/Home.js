import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import {RFPercentage} from 'react-native-responsive-fontsize';

import styles from './HomeStyle';
import Header1 from '../../reusable/header/Header1';
import {wp, hp} from '../../reusable/Responsive/dimen';
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

    const unsubscribe = navigation.addListener(() => {
      getAllBook();
    });

    return () => {
      unsubscribe;
    };
  }, [navigation]);

  let buffer;
  if (loading) {
    buffer = <ActivityIndicator color={'#1A3150'} size={wp(20)} />;
  }

  const RenderBook = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Book', {
            id: item.id,
            judul: item.title,
            author: item.author,
            publisher: item.publisher,
            year: item.year,
            category: item.category,
            quantity: item.quantity,
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
              <Text style={styles.quantity} numberOfLines={1}>
                {item.quantity}
              </Text>
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
    </View>
  );
}
