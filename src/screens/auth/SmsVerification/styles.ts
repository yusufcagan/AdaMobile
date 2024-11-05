import {StyleSheet} from 'react-native';
import Color from '../../../assets/theme/Color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Color.White,
  },
  backButton: {
    borderWidth: 1,
    padding: 8,
    alignSelf: 'flex-start',
    borderColor: Color.Gray,
    borderRadius: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    marginTop: 20,
    color: Color.DarkBlue,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 10,
    color: Color.DarkGray,
  },
  errorText: {
    fontSize: 14,
    color: 'red',
    marginTop: 10,
  },
  resendCodeText: {
    color: 'blue',
  },
  timerText: {
    fontSize: 16,
    marginTop: 20,
    alignSelf: 'flex-end',
  },
});
