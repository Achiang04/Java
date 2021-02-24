import {StyleSheet} from 'react-native';
import {wp, hp} from '../../reusable/Responsive/dimen';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fill: {
    marginLeft: wp(20),
    marginTop: hp(20),
  },
  delete: {
    position: 'absolute',
    bottom: hp(20),
    left: wp(20),
    borderWidth: 1,
    borderRadius: 10,
    padding: wp(10),
    backgroundColor: 'black',
  },
  update: {
    position: 'absolute',
    bottom: hp(20),
    left: wp(130),
    borderWidth: 1,
    borderRadius: 10,
    padding: wp(10),
    backgroundColor: 'black',
  },
  deleteText: {
    color: '#fff',
    fontSize: RFPercentage(2),
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
  authorNameSeleced: {
    marginLeft: wp(10),
    marginTop: hp(5),
    color: 'red',
  },
});

export default styles;
