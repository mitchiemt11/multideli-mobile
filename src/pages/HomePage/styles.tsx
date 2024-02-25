import { StyleSheet } from "react-native";
import { DELI_DARK } from "../../assets/common";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: DELI_DARK,
  },
  HeaderContainer: {
    margin: 24,
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Header: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 28,
    color: '#FFF'
  },
  Reminder: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 24,
    color: '#FFF',
    textAlign: 'center'
  },
});

export default styles;
