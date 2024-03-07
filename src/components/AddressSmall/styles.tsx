import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF0F',
    padding: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    overflow: 'hidden',
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
});

export default styles;
