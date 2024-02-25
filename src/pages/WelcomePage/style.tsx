import { StyleSheet } from "react-native";
import { DELI_TEXT } from "../../assets/common";

const styles = StyleSheet.create({
  Button: {
    width: '90%',
    backgroundColor: '#ffff',
    height: 50,
    borderRadius: 25,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: DELI_TEXT,
    lineHeight: 22,
  },
  DashboardText: {
    fontSize: 16,
    color: DELI_TEXT,
    marginTop: 6,
    fontWeight: '500',
    lineHeight: 22,
  },
  TextButton: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
