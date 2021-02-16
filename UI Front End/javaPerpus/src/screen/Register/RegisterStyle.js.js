import {StyleSheet} from 'react-native';
import {wp, hp} from '../../reusable/Responsive/dimen';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    bottom: hp(10),
    right: wp(30),
    opacity: 0.7,
  },
  signUpText: {
    alignItems: 'center',
    marginTop: hp(20),
  },
  text: {
    color: '#AAACBA',
  },
});

export default styles;
