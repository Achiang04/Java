import React, {useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import styles from './BorrowStyle';
import Header2 from '../../reusable/header/Header2';
import Input from '../../reusable/input/Input';
import {token} from '../../general/constant';
import Buttons from '../../reusable/buttons/Buttons';
import {wp, hp} from '../../reusable/Responsive/dimen';

export default function Borrow(props) {
  const judul = props.route.params.judul;
  const [member, setMember] = useState('');
  const [employee, setEmployee] = useState('');
  const [loading, setLoading] = useState(false);

  const GetToday = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    return today;
  };

  const GetWeekAfterToday = () => {
    let today = new Date();
    const dd7 = String(today.getDate() + 7).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    today = dd7 + '/' + mm + '/' + yyyy;
    return today;
  };

  console.log(GetToday());
  console.log(GetWeekAfterToday());

  const createBook = (member, employee, book, borrowDate, returnDate) => {
    setLoading(true);
    console.log('try create book');
    fetch(`https://murmuring-shelf-21670.herokuapp.com/borrowing/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
      body: JSON.stringify({
        member: member,
        employee: employee,
        book: book,
        borrowDate: borrowDate,
        returnDate: returnDate,
      }),
    })
      .then((json) => {
        console.log('fetch response', json);
        setLoading(false);
        console.log('success borrow book');
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        return false;
      });
  };

  let buffer;
  if (loading) {
    buffer = <ActivityIndicator color={'#1A3150'} size={wp(20)} />;
  } else {
    buffer = <Text>Borrow Book</Text>;
  }

  return (
    <View style={styles.container}>
      <Header2 judul={'Borrowing'} back={() => props.navigation.goBack()} />
      <Text style={styles.fill}>Please Fill Your Data</Text>
      <Input
        text={'Member'}
        ph={'Input Member'}
        change={(item) => setMember(item)}
        value={member}
      />
      <Input
        text={'Employee'}
        ph={'Input Employee'}
        change={(item) => setEmployee(item)}
        value={employee}
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
            createBook(
              member,
              employee,
              judul,
              GetToday(),
              GetWeekAfterToday(),
            );
            setMember('');
            setEmployee('');
            props.navigation.replace('Home');
          }}
        />
      </View>
    </View>
  );
}
