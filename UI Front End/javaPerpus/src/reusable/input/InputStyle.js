import {StyleSheet} from 'react-native';
import {wp, hp} from '../../reusable/Responsive/dimen';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  input: {
    marginTop: hp(5),
    padding: wp(5),
    borderBottomWidth: 1,
    borderColor: '#DFE1EF',
    height: hp(30),
    width: '90%',
    alignSelf: 'center',
  },
  text: {
    color: '#AAACBA',
    marginTop: hp(20),
    marginLeft: wp(20),
  },
});

export default styles;
