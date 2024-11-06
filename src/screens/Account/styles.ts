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
    marginBottom: 10,
  },
  helloText: {
    color: Color.White,
    fontSize: 12,
  },
  name: {
    color: Color.White,
    fontSize: 20,
  },
  button: {
    backgroundColor: Color.White,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 15,
    width: '90%',
    marginTop: 10,
    borderRadius: 10,
  },
});
