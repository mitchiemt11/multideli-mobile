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
  Scroll: {
    marginBottom: 15

  },
  Location: {
    marginTop: 20,
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  distanceHeader: {
    fontSize: 20,
    lineHeight: 20,
    color: '#FFF',
    fontWeight: '500',
  },
  timePill: {
    backgroundColor: '#047857',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 14,
  },
  time: {
    fontSize: 16,
    lineHeight: 16,
    color: '#FFF',
    fontWeight: '400',
  },
});

export default styles;
