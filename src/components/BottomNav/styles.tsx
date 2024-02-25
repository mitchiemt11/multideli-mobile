import { StyleSheet } from 'react-native';
import { DELI_DARK, DELI_BLUE } from '../../assets/common';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: DELI_DARK,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    height: 110,
    borderTopWidth: 1,
    borderColor: '#6E757C'
  },
  scan: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: DELI_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    top: -21,
    alignSelf: 'center',
  },
  scanIcon: {
    height: 36,
    width: 36
  }
});

export default styles;
