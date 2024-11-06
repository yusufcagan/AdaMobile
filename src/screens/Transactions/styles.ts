import {StyleSheet} from 'react-native';
import Color from '../../assets/theme/Color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headText: {
    color: Color.Black,
    fontSize: 20,
    fontWeight: '400',
    marginLeft: 10,
  },
  backButton: {
    borderWidth: 1,
    padding: 8,
    alignSelf: 'flex-start',
    borderColor: Color.Gray,
    borderRadius: 10,
  },
  card: {
    width: '90%',
    backgroundColor: Color.White,
    alignSelf: 'center',
    marginVertical: 10,
    padding: 12,
    shadowColor: Color.Gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  unitText: {
    color: Color.Black,
    fontSize: 13,
    fontWeight: '400',
  },
  historyText: {
    color: Color.Gray,
    fontSize: 12,
    fontWeight: '400',
  },
});
