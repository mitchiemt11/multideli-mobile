import { StyleSheet } from 'react-native';
import { DELI_TEXT } from '../../assets/common';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#222529',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginBottom: 10
  },
  locationName: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    color: 'white'
  },
  locationID: {
    fontSize: 16,
    color: '#FFFFFFA3',
    lineHeight: 22,
    fontWeight: '400'
  },
  Button: {
    width: '100%',
    backgroundColor: '#FFFFFF1A',
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#FFFFFF1A',
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  ButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    lineHeight: 22,
  },
  directionsIcon: {
    width: 21,
    height: 21,
    marginRight: 10
  }
});

export default styles;
