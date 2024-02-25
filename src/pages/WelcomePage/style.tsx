import { StyleSheet } from "react-native";
import { DELI_TEXT, DELI_BLUE } from "../../assets/common";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: DELI_BLUE
  },
  Header: {
    fontWeight: '500',
    fontSize: 28,
    lineHeight: 28,
    color: DELI_TEXT,
    marginTop: 45,
    marginLeft: 45
  },
  Subheading: {
    fontSize: 40,
    lineHeight: 40,
    fontWeight: '500',
    color: DELI_TEXT,
    marginLeft: 40
  },
  TextRotate: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: '400',
    color: DELI_TEXT,
    marginTop: 60,
    transform: [{ rotate: '345deg' }]
  },
  Options: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: '400',
    color: DELI_TEXT,
    transform: [{ rotate: '345deg' }]
  },
  ButtonContainer: {
    marginTop: 60,
    alignContent: 'center',
    alignItems: 'center'
  },
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
