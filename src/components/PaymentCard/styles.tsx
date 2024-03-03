import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
 
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#FFFFFF0F',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 56,
    height: 32,
    backgroundColor: '#00579F',
    borderRadius: 8,
    justifyContent: 'center',
  },
  icon: {
    width: 42,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',

  },
  title: {
    fontSize: 22,
    color: '#FFFFFF',
    marginLeft: 10,
  },
});

export default styles;
