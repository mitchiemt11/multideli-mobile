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
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
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
    top: -25,
    alignSelf: 'center',
  },
  scanIcon: {
    height: 36,
    width: 36
  },
  homeIcon: {
    height: 30,
    width: 30,
    marginTop: 10,
    marginRight: 8,
    marginLeft: 8
  },
  settingsIcon: {
    height: 32,
    width: 32,
    marginTop: 10,
    marginRight: 8,
    marginLeft: 8
  }
});

export default styles;

