import { StyleSheet } from "react-native";
import { DELI_TEXT, DELI_BLUE } from "../../assets/common";

const styles = StyleSheet.create({
  Container: {
    marginHorizontal: 20,
    flexDirection: "row",
  },
  Button: {
    width: '100%',
    backgroundColor: DELI_BLUE,
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
  Image: {
    width: 24,
    height: 24,
    marginLeft: 10,
  }
});

export default styles;
