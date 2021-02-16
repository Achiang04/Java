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
});

export default styles;
