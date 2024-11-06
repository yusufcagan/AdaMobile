import {StyleSheet} from 'react-native';
import Color from '../../assets/theme/Color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White,
  },
  header: {
    backgroundColor: Color.DarkBlue,
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  closeButton: {
    padding: 5,
  },
  closeText: {
    color: '#ffffff',
    fontSize: 18,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 18,
    width: '40%',
    fontWeight: '400',
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: Color.Black,
    marginBottom: 10,
  },
  detailRow: {
    paddingVertical: 10,
  },
  detailLabel: {
    color: Color.DarkGray,
    fontSize: 14,
  },
  detailText: {
    color: Color.Black,
    fontSize: 14,
  },
  separator: {
    height: 1,
    backgroundColor: Color.DarkGray,
    marginVertical: 5,
  },
});
