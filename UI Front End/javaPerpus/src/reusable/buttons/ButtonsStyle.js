import {StyleSheet} from 'react-native';
import {wp, hp} from '../../reusable/Responsive/dimen';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  button: {
    marginTop: hp(25),
    borderWidth: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  buttonColor: {
    marginTop: hp(25),
    padding: wp(10),
    borderWidth: 3,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});

export default styles;
