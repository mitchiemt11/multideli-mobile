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
  scanText: {
    color: '#FFFFFFE0',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '400',
    paddingVertical: 20,
    paddingHorizontal: 30,
  }, 
  orderItemImage: {
    width: 60,
    height: 60,
    marginLeft: 20,
    borderRadius: 10,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityContainer: { 
    flexDirection: 'row',
    alignItems: 'center'
  },
  quantity: {
    color: '#FFFFFF',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '400',
    paddingLeft: 20,
  },
  orderContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingRight: 20,
    paddingBottom: 10,
  },
  item: {
    color: '#FFFFFF',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '400',
    paddingLeft: 20,
  },
});

export default styles;
