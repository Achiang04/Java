import {StyleSheet} from 'react-native';
import {wp, hp} from '../../reusable/Responsive/dimen';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  createBook: {
    marginLeft: wp(20),
    marginTop: hp(20),
    fontWeight: 'bold',
  },
  button: {
    marginBottom: hp(20),
  },
  bookData: {
    marginLeft: wp(20),
    marginTop: hp(5),
  },
});

export default styles;
