import { StyleSheet } from 'react-native';
import { DELI_DARK } from '../../assets/common';

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

  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  icon: {
    width: 25,
    height: 25,
    tintColor: '#fff'
  }
});

export default styles;