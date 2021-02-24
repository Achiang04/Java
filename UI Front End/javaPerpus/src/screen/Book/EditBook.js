import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import {wp, hp} from '../../reusable/Responsive/dimen';
import styles from './EditBookStyle';
import Input from '../../reusable/input/Input';
import Header2 from '../../reusable/header/Header2';
import Buttons from '../../reusable/buttons/Buttons';
import {token} from '../../general/constant';

export default function EditBook(props) {
  const idBook = props.route.params.idBook;
  const judulBook = props.route.params.judul;
  const authorBook = props.route.params.author;
  const publisherBook = props.route.params.publisher;
  const yearBook = props.route.params.year;
  const categoryBook = props.route.params.category;
  const quantityBook = props.route.params.quantity;

  const [bookLoading, setBookLoading] = useState(false);
  const [author, setAuthor] = useState([]);
  const [title, setTitle] = useState('');
  const [year, setYear] = useState(0);
  const [publisher, setPublisher] = useState([]);
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState(0);

  const updateBook = (
    id,
    author,
    title,
    year,
    publisher,
    category,
    quantity,
  ) => {
    setBookLoading(true);
    console.log('try update book');
    fetch(`https://murmuring-shelf-21670.herokuapp.com/book/update/${id}`, {
      method: 'PUT',
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
        setBookLoading(false);
        props.navigation.replace('Home');
        console.log('success update book');
      })
      .catch((err) => {
        setBookLoading(false);
        console.error(err);
        return false;
      });
  };

  let buffer;
  if (bookLoading) {
    buffer = <ActivityIndicator color={'#1A3150'} size={wp(20)} />;
  } else {
    buffer = <Text>Update Book</Text>;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Header2 judul={'Update Book'} back={() => props.navigation.goBack()} />
        <ScrollView>
          <Text style={styles.createBook}>Book data before update</Text>
          <Text style={styles.bookData}>{judulBook}</Text>
          <Text style={styles.bookData}>{authorBook}</Text>
          <Text style={styles.bookData}>{publisherBook}</Text>
          <Text style={styles.bookData}>{yearBook}</Text>
          <Text style={styles.bookData}>{categoryBook}</Text>
          <Text style={styles.bookData}>{quantityBook}</Text>
          <Text style={styles.createBook}>Input new Book data</Text>
          <Input
            text={'Title'}
            ph={'Input Title'}
            change={(item) => setTitle(item)}
            value={title}
          />
          <Input
            text={'Author'}
            ph={'Input Author'}
            change={(item) => setAuthor(item)}
            value={author}
          />
          <Input
            text={'Publisher'}
            ph={'Input Publisher'}
            change={(item) => setPublisher(item)}
            value={publisher}
          />
          <Input
            text={'Year'}
            ph={'Input Year'}
            change={(item) => setYear(item)}
            value={year}
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
                updateBook(
                  idBook,
                  authorBook,
                  title,
                  year,
                  publisher,
                  category,
                  quantity,
                );
                setAuthor('');
                setTitle('');
                setYear(0);
                setPublisher('');
                setCategory('');
                setQuantity(0);
              }}
            />
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}
