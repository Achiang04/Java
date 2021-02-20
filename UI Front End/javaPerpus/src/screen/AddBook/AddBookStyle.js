import {StyleSheet} from 'react-native';
import {wp, hp} from '../../reusable/Responsive/dimen';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  kotak: {
    width: '40%',
    borderWidth: 1,
    height: hp(200),
    marginLeft: wp(10),
    marginRight: wp(10),
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  kotakJudul: {
    height: hp(20),
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textKotak: {
    fontWeight: 'bold',
  },
  authorName: {
    marginLeft: wp(10),
    marginTop: hp(5),
  },
  createBook: {
    marginLeft: wp(20),
    marginTop: hp(20),
  },
  line: {
    borderBottomWidth: 1,
    width: '100%',
    marginTop: hp(20),
  },
  button: {
    marginBottom: hp(20),
  },
});

export default styles;
