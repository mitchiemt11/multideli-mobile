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
  imageContainer: {
    width: '100%',
    height: 200,
    overflow: 'hidden',
    borderTopLeftRadius: 44,
    borderTopRightRadius: 44,
  },
  centerImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  centerText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '700',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingRight: 20,
    paddingBottom: 10,
  },
  item: {
    color: '#FFFFFFE0',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '400',
    paddingLeft: 20,
  },
  itemNumber: {
    color: '#CBFF98',
    fontSize: 16,
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
    
  },
  total: {
    color: '#FFFFFFA3'
  },
  processing: {
    position: 'absolute',
    top: 0, 
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0D0E0F7A',
    //I'd go for a thiird party lib to implement a blur e
    //effect but that would be overkill for this project
    // backDropFilter: 'blur(10px)',  
  },

  loader: {
    marginBottom: 20,
    width: 100,
    height: 100,
  },

  processingText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 22,
  }
});

export default styles;
