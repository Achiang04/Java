import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Axios from 'axios';

import styles from './BookStyle';
import Header2 from '../../reusable/header/Header2';
import {token} from '../../general/constant';
import Buttons from '../../reusable/buttons/Buttons';
import {wp, hp} from '../../reusable/Responsive/dimen';

export default function Book(props) {
  const id = props.route.params.id;
  const judul = props.route.params.judul;
  const author = props.route.params.author;
  const publisher = props.route.params.publisher;
  const year = props.route.params.year;
  const category = props.route.params.category;
  const quantity = props.route.params.quantity;
  const [memberName, setMemberName] = useState('');
  const [member, setMember] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [employee, setEmployee] = useState('');
  const [bookLoading, setBookLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [memberLoading, setMemberLoading] = useState(false);
  const [employeeLoading, setEmployeeLoading] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  console.log('memberName', memberName);
  console.log('employeeName', employeeName);

  const borrowBook = (member, employee, book, borrowDate, returnDate) => {
    setBookLoading(true);
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
        setBookLoading(false);
        props.navigation.replace('Home');
        console.log('success borrow book');
      })
      .catch((err) => {
        setBookLoading(false);
        console.error(err);
        return false;
      });
  };

  const deleteBook = (id) => {
    setDeleteLoading(true);
    console.log('try delete book');
    fetch(`https://murmuring-shelf-21670.herokuapp.com/book/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    })
      .then((json) => {
        console.log('fetch response', json);
        setDeleteLoading(false);
        props.navigation.replace('Home');
        console.log('success delete book');
      })
      .catch((err) => {
        setDeleteLoading(false);
        console.error(err);
        return false;
      });
  };

  const getAllMember = async () => {
    // const token = await AsyncStorage.getItem('userToken');
    // console.log(token);
    setMemberLoading(true);
    Axios.get('https://murmuring-shelf-21670.herokuapp.com/member/getAll', {
      headers: {
        // Authorization: `Bearer ${token}`,
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => {
        console.log('author :', res);
        setMember(res);
        setMemberLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setMemberLoading(false);
      });
  };

  const getAllEmployee = async () => {
    // const token = await AsyncStorage.getItem('userToken');
    // console.log(token);
    setEmployeeLoading(true);
    Axios.get('https://murmuring-shelf-21670.herokuapp.com/employee/getall', {
      headers: {
        // Authorization: `Bearer ${token}`,
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => {
        console.log('publisher :', res);
        setEmployee(res);
        setEmployeeLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setEmployeeLoading(false);
      });
  };

  useEffect(() => {
    getAllMember();
    getAllEmployee();
  }, []);

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

  const RenderMember = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedMember(item.id), setMemberName(item.name);
        }}>
        <Text
          style={
            item.id === selectedMember
              ? styles.authorNameSeleced
              : styles.authorName
          }>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const RenderEmployee = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedEmployee(item.id), setEmployeeName(item.name);
        }}>
        <Text
          style={
            item.id === selectedEmployee
              ? styles.authorNameSeleced
              : styles.authorName
          }>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  let buffer;
  if (bookLoading) {
    buffer = <ActivityIndicator color={'#1A3150'} size={wp(20)} />;
  } else {
    buffer = <Text>Borrow Book</Text>;
  }

  let deleteBuffer;
  if (deleteLoading) {
    deleteBuffer = <ActivityIndicator color={'white'} size={wp(20)} />;
  } else {
    deleteBuffer = <Text>Delete Book</Text>;
  }

  let updateBuffer;
  if (updateLoading) {
    updateBuffer = <ActivityIndicator color={'white'} size={wp(20)} />;
  } else {
    updateBuffer = <Text>Update Book</Text>;
  }

  let memberBuffer;
  if (memberLoading) {
    memberBuffer = <ActivityIndicator color={'#1A3150'} size={wp(20)} />;
  }

  let employeeBuffer;
  if (employeeLoading) {
    employeeBuffer = <ActivityIndicator color={'#1A3150'} size={wp(20)} />;
  }

  return (
    <View style={styles.container}>
      <Header2 judul={'Book'} back={() => props.navigation.goBack()} />
      <View style={styles.row}>
        <View style={styles.kotak}>
          <View style={styles.kotakJudul}>
            <Text style={styles.textKotak}>Member List</Text>
          </View>
          {memberBuffer}
          <FlatList
            data={member.data}
            keyExtractor={(item) => item.id}
            extraData={selectedMember}
            renderItem={({item}) => {
              return <RenderMember item={item} />;
            }}
          />
        </View>
        <View style={styles.kotak}>
          <View style={styles.kotakJudul}>
            <Text style={styles.textKotak}>Employee List</Text>
          </View>
          {employeeBuffer}
          <FlatList
            data={employee.data}
            keyExtractor={(item) => item.id}
            extraData={selectedEmployee}
            renderItem={({item}) => {
              return <RenderEmployee item={item} />;
            }}
          />
        </View>
      </View>
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
            borrowBook(
              memberName,
              employeeName,
              judul,
              GetToday(),
              GetWeekAfterToday(),
            );
            setMember('');
            setEmployee('');
          }}
        />
      </View>
      <TouchableOpacity style={styles.delete} onPress={() => deleteBook(id)}>
        <Text style={styles.deleteText}>{deleteBuffer}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.update}
        onPress={() =>
          props.navigation.navigate('EditBook', {
            idBook: id,
            judul: judul,
            author: author,
            publisher: publisher,
            year: year,
            category: category,
            quantity: quantity,
          })
        }>
        <Text style={styles.deleteText}>{updateBuffer}</Text>
      </TouchableOpacity>
    </View>
  );
}
