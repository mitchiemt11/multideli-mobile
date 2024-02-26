import { StyleSheet } from 'react-native';
import { DELI_DARK, DELI_TEXT, DELI_YELLOW } from '../../assets/common';

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 20,
    backgroundColor: DELI_YELLOW,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 12
  },
  title: {
    color: DELI_TEXT,
    fontSize: 24,
  },
  description: {
    color: DELI_TEXT,
    marginTop: 10
  },
  burger: {
    width: 100,
    height: 100,
    top: 14,
    right: 25,
  },
  pillText: {
    color: DELI_TEXT,
    fontSize: 22,
    padding: 10
  },
  pillContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 90,
  }
});

export default styles;
