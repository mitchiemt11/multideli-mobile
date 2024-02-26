import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
 
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF0F',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  left: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  contact: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  title: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '400',
    lineHeight: 22
  },
  details: {
    color: '#FFFFFFA3',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20
  },
  right: {
    flex: 1,
    alignItems: 'flex-end'
  },
  pencil: {
    width: 20,
    height: 20
  }
});

export default styles;
