import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import Header2 from '../../reusable/header/Header2';
import styles from './AddBookStyle';
import Axios from 'axios';
import Input from '../../reusable/input/Input';
import Buttons from '../../reusable/buttons/Buttons';
import {wp, hp} from '../../reusable/Responsive/dimen';
import {token} from '../../general/constant';

export default function AddBook({navigation}) {
  const [author, setAuthor] = useState([]);
  const [publisher, setPublisher] = useState([]);
  const [authorName, setAuthorName] = useState('');
  const [title, setTitle] = useState('');
  const [year, setYear] = useState(0);
  const [publisherName, setPublisherName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(false);
  const [authorLoading, setAuthorLoading] = useState(false);
  const [publisherLoading, setPublisherLoading] = useState(false);

  console.log('----');
  console.log('author', authorName);
  console.log('title', title);
  console.log('year', year);
  console.log('publisherName', publisherName);
  console.log('category', category);
  console.log('quantity', quantity);

  const getAllAuthor = async () => {
    // const token = await AsyncStorage.getItem('userToken');
    // console.log(token);
    setAuthorLoading(true);
    Axios.get('https://murmuring-shelf-21670.herokuapp.com/author/getall', {
      headers: {
        // Authorization: `Bearer ${token}`,
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => {
        console.log('author :', res);
        setAuthor(res);
        setAuthorLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setAuthorLoading(false);
      });
  };

  const getAllPublisher = async () => {
    // const token = await AsyncStorage.getItem('userToken');
    // console.log(token);
    setPublisherLoading(true);
    Axios.get('https://murmuring-shelf-21670.herokuapp.com/publisher/getAll', {
      headers: {
        // Authorization: `Bearer ${token}`,
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => {
        console.log('publisher :', res);
        setPublisher(res);
        setPublisherLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setPublisherLoading(false);
      });
  };

  const createBook = (author, title, year, publisher, category, quantity) => {
    setLoading(true);
    console.log('try create book');
    fetch(`https://murmuring-shelf-21670.herokuapp.com/book/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
      body: JSON.stringify({
        author: author,
        title: title,
        year: year,
        publisher: publisher,
        category: category,
        quantity: quantity,
      }),
    })
      .then((json) => {
        console.log('fetch response', json);
        console.log('success add book');
        setLoading(false);
        console.log('create done');
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        return false;
      });
  };

  useEffect(() => {
    getAllAuthor();
    getAllPublisher();
  }, []);

  const RenderAuthor = ({item}) => {
    return <Text style={styles.authorName}>{item.firstname}</Text>;
  };

  const RenderPublisher = ({item}) => {
    return <Text style={styles.authorName}>{item.name}</Text>;
  };

  let buffer;
  if (loading) {
    buffer = <ActivityIndicator color={'#1A3150'} size={wp(20)} />;
  } else {
    buffer = <Text>Create Book</Text>;
  }

  let authorBuffer;
  if (authorLoading) {
    authorBuffer = <ActivityIndicator color={'#1A3150'} size={wp(20)} />;
  }

  let publsherBuffer;
  if (publisherLoading) {
    publsherBuffer = <ActivityIndicator color={'#1A3150'} size={wp(20)} />;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Header2 judul={'AddBook'} back={() => navigation.goBack()} />
        <View style={styles.row}>
          <View style={styles.kotak}>
            <View style={styles.kotakJudul}>
              <Text style={styles.textKotak}>Author List</Text>
            </View>
            {authorBuffer}
            <FlatList
              data={author.data}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => {
                return <RenderAuthor item={item} />;
              }}
            />
          </View>
          <View style={styles.kotak}>
            <View style={styles.kotakJudul}>
              <Text style={styles.textKotak}>Publisher List</Text>
            </View>
            {publsherBuffer}
            <FlatList
              data={publisher.data}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => {
                return <RenderPublisher item={item} />;
              }}
            />
          </View>
        </View>
        <View style={styles.line}></View>
        <ScrollView>
          <Text style={styles.createBook}>Input new Book data</Text>
          <Input
            text={'Author'}
            ph={'Input Author'}
            change={(item) => setAuthorName(item)}
            value={authorName}
          />
          <Input
            text={'Title'}
            ph={'Input Title'}
            change={(item) => setTitle(item)}
            value={title}
          />
          <Input
            text={'Year'}
            ph={'Input Year'}
            change={(item) => setYear(item)}
            value={year}
          />
          <Input
            text={'Publisher'}
            ph={'Input Publisher'}
            change={(item) => setPublisherName(item)}
            value={publisherName}
          />
          <Input
            text={'Category'}
            ph={'Input Category'}
            change={(item) => setCategory(item)}
            value={category}
          />
          <Input
            text={'Quantity'}
            ph={'Input Quantity'}
            change={(item) => setQuantity(item)}
            value={quantity}
          />
        </ScrollView>
        <View style={styles.button}>
          <Buttons
            text={buffer}
            color={'white'}
            bgColor={'#3C8B43'}
            borColor={'#3C8B43'}
            height={40}
            width={'90%'}
            radius={7}
            press={() => {
              createBook(
                authorName,
                title,
                year,
                publisherName,
                category,
                quantity,
              );
              setAuthorName('');
              setTitle('');
              setYear(0);
              setPublisherName('');
              setCategory('');
              setQuantity(0);
              navigation.replace('Home');
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
