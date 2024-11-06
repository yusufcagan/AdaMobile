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
  },
  helloText: {
    color: Color.White,
    fontSize: 12,
  },
  name: {
    color: Color.White,
    fontSize: 20,
  },
  title: {
    color: Color.White,
    fontSize: 16,
    marginTop: 20,
  },
  slider: {
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
  button: {
    backgroundColor: Color.lightBlue,
    height: 70,
    width: '45%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
    marginTop: 5,
  },
  fastMenu: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
});
