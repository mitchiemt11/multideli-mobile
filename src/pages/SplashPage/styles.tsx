import { StyleSheet } from "react-native";
import { DELI_BLUE, DELI_TEXT } from "../../assets/common";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: DELI_BLUE
  },
  chefLogo: {
    width: 220,
    height: 250
  },
  title: {
    fontSize: 22,
    color: DELI_TEXT,
    marginTop: 20,
    fontWeight: '800'
  },
  description: {
    fontSize: 16,
    color: DELI_TEXT,
    marginTop: 20,
    fontWeight: '400'
  }
});

export default styles;