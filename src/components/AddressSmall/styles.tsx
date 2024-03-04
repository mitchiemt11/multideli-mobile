import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF0F',
    padding: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
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
