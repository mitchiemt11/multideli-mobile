import { StyleSheet } from "react-native"; 
import { DELI_DARK } from "../../assets/common";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DELI_DARK
  },
  image : {
    width: '100%',
    height: 320,
    objectFit: 'cover'
  },
  textContainer: { padding: 20 },
  header: {
    color: "white",
    fontSize: 28,
    lineHeight: 26,
    fontWeight: "700",
  },
  descriptionContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  description: {
    color: "white",
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "400",
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  itemImage: {
    flexDirection: 'row',
  },
  bannerContainer: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  bannerImage: {
    width: 12,
    height: 17
  },
  bannerText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginLeft: 5
  },
  priceContainer: {
    flexDirection: 'row',
    marginTop: 20
  },
  price: {
    color: 'white',
    fontSize: 26
  },
  availability: {
    color: '#FFFFFFA3',
    fontSize: 14,
    marginLeft: 8,
    alignSelf: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 60
  },
  measurements: {
    color: '#FFFFFFA3',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "500",
  },
  gramsImage: {
    width: 16,
    height: 15,
    alignSelf: 'center'
  },
  caloriesImage: {
    width: 12,
    height: 17,
    alignSelf: 'center'
  },
  infoImage: {
    width: 16,
    height: 16,
    alignSelf: 'center'
  },
  measurementsLast: {
    color: '#FFFFFFA3',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "500",
    marginRight: 8

  },
  bottomSheet: { 
    backgroundColor: '#131516',
  },
  bottomContainer: {},
  orderText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '400',
    marginTop: 10,
    lineHeight: 28
  },
  itemName: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 28
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#131516',
    width: '100%',
    height: 50,
    borderRadius: 25,
  },
  backText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    lineHeight: 22
  }

})

export default styles;
