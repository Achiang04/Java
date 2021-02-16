import {StyleSheet} from 'react-native';
import {wp, hp} from '../Responsive/dimen';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: hp(40),
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  judul: {
    fontSize: RFPercentage(2),
    color: '#52617D',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default styles;
