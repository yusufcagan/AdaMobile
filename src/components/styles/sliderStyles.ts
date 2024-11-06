import {StyleSheet} from 'react-native';
import Color from '../../assets/theme/Color';

export const styles = StyleSheet.create({
  wrapper: {
    height: 150,
  },
  slider: {
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: Color.White,
    height: 150,
    borderRadius: 10,
    marginHorizontal: 8,
  },
  slide1: {
    backgroundColor: Color.White,
    height: 150,
    width: 320,
    borderRadius: 10,
    margin: 15,
    justifyContent: 'space-between',
    padding: 20,
  },
  sliderName: {
    fontSize: 16,
    color: Color.Black,
  },
  sliderUnit: {
    fontSize: 20,
    color: Color.DarkBlue,
    fontWeight: '800',
  },
});
