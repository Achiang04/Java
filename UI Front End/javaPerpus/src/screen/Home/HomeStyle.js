import {StyleSheet} from 'react-native';
import {wp, hp} from '../../reusable/Responsive/dimen';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerBook: {
    backgroundColor: '#F3F3F3',
    width: '90%',
    alignSelf: 'center',
    marginBottom: hp(10),
    marginTop: hp(10),
    zIndex: 0,
  },
  bookImage: {
    height: hp(90),
    width: wp(80),
  },
  bookImageContainer: {
    padding: wp(10),
    flexDirection: 'row',
  },
  judulContainer: {
    marginLeft: wp(15),
  },
  bulatQuantity: {
    borderWidth: 1,
    padding: wp(10),
    borderRadius: 100,
    width: wp(40),
    height: hp(45),
    alignSelf: 'center',
    position: 'absolute',
    left: wp(270),
  },
  quantity: {
    alignSelf: 'center',
    fontSize: RFPercentage(2.5),
  },
  addBook: {
    position: 'absolute',
    bottom: hp(20),
    left: wp(20),
    borderWidth: 1,
    borderRadius: 10,
    padding: wp(10),
    backgroundColor: 'black',
  },
  addBookText: {
    fontSize: RFPercentage(2),
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
  },
});

export default styles;
