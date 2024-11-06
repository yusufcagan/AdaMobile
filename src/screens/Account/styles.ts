import {StyleSheet} from 'react-native';
import Color from '../../assets/theme/Color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.OffWhite,
  },
  sum: {
    backgroundColor: Color.DarkBlue,
    padding: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingBottom: 30,
  },
  helloText: {
    color: Color.White,
    fontSize: 12,
  },
  name: {
    color: Color.White,
    fontSize: 20,
  },
});
