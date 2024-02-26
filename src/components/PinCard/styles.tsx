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
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  title: {
    fontSize: 16,
    color: '#FFFFFF'
  },
  right: {
    flex: 1,
    alignItems: 'flex-end'
  },
  pin: {
    width: 24,
    height: 15
  }
});

export default styles;
