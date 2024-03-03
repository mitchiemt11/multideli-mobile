import { StyleSheet } from 'react-native';
import { DELI_DARK } from '../../assets/common';
import { Item } from '../../components/ItemList/ItemList';

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
  header: {
    color: '#FFFFFFE0',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '400',
    margin: 20,
    paddingTop: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingRight: 20,
    
  },
  item: {
    color: '#FFFFFFE0',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '400',
    paddingLeft: 20,
  },
  price: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '400',
    paddingLeft: 20,
    color: 'white'
    
  }
});

export default styles;
