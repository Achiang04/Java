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
  },
  bookImage: {
    height: hp(70),
    width: wp(70),
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
    left: wp(200),
  },
  quantity: {
    alignSelf: 'center',
    fontSize: RFPercentage(2.5),
  },
  addBook: {
    position: 'absolute',
    bottom: hp(20),
    right: wp(20),
    borderWidth: 1,
    borderRadius: 10,
    padding: wp(10),
  },
  addBookText: {
    fontSize: RFPercentage(2),
  },
  title: {
    fontWeight: 'bold',
  },
});

export default styles;
