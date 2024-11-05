import {StyleSheet} from 'react-native';
import Color from '../../assets/theme/Color';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor: Color.DarkBlue,
    alignItems: 'center',
  },
  flexDirection: {
    flexDirection: 'row',
  },
  logo: {
    width: 110,
    height: 38,
  },
  logo2: {
    width: 100,
    height: 25,
  },
  alignCenter: {
    alignItems: 'center',
  },
  hamburgerMenu: {
    backgroundColor: Color.White,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: 30,
    width: 30,
    marginLeft: 10,
  },
});
