import {StyleSheet} from 'react-native';
import Color from '../../../assets/theme/Color';

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
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
    marginBottom: 10,
    marginTop: 20,
    color: Color.DarkBlue,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: Color.LightGray,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 20,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: Color.DarkBlue,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  errorText: {
    color: Color.Red,
    fontSize: 14,
    fontWeight: '500',
    marginTop: 10,
  },
  loginText: {
    color: Color.White,
    fontSize: 14,
    fontWeight: '500',
  },
  footerText: {
    fontSize: 16,
    color: Color.DarkBlue,
    textAlign: 'center',
  },
  footerLink: {
    color: Color.Black,
  },
});
