import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF0F',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    flexDirection: 'row',
  },
  locationIcon: {
    width: 15,
    height: 18,
    marginBottom: 10
  },
  locationName: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    color: 'white',
    marginLeft: 10,
  },
  locationID: {
    fontSize: 16,
    marginLeft: 10,
    color: '#FFFFFFA3',
    lineHeight: 22,
    fontWeight: '400'
  },
  Button: {
    width: '100%',
    backgroundColor: '#FddFFFF1A',
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#FFFFFF1A',
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    lineHeight: 22,
  },
});

export default styles;
