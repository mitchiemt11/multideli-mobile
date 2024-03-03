import { StyleSheet } from 'react-native';
import { DELI_DARK } from '../../assets/common';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DELI_DARK,
  },
  minor: {
    backgroundColor: DELI_DARK,
    height: '5%',
    width: '100%',
  },
  main: {
    backgroundColor: '#222529',
    borderTopLeftRadius: 44,
    borderTopRightRadius: 44,
    height: '95%',
    width: '100%',
  },
});

export default styles;
