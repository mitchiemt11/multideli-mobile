import { View, Text, Image } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/types';
import styles from './styles';
import HeroButton from '../../components/HeroButton/HeroButton';
import AddressSmall from '../../components/AddressSmall/AddressSmall';
import { useDispatch, useSelector } from 'react-redux';
import type { Item } from '../../components/ItemList/ItemList';
import { RouteProp } from '@react-navigation/native';
import { DELI_TEXT } from '../../assets/common';
import { addOrder } from '../../features/addOrder/addOrderSlice';

interface IPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'PaymentSuccess'>;
  route: RouteProp<RootStackParamList, 'PaymentSuccess'>;
}

const PaymentSuccessPage = ({ navigation, route }: IPageProps) => {


  const items = useSelector((state: {list: Item[]}) => state.list);
  //dispatch an action to add to store
  const dispatch = useDispatch();

  //create a function to dispatch that is called when button is clicked. it should use the addOrder reducer
  const addToRecentOrder = () => {
    dispatch(addOrder(route.params?.item));
  }

  const item = items.find(item => Number(item.id) === Number(route.params?.item.id)); //why. Tis not viable

  if(!item) {
    return <Text>Item not found</Text>
  }

  return (
    <View style={styles.container}>
      <View style={styles.minor} />
      <View style={styles.main}>
        <AddressSmall />
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/images/payment.png')} style={styles.centerImage} />
        </View>
        <Text style={styles.centerText}>Payment successful</Text>
        <Text style={styles.scanText}>
          Scan QR code when delivery has
          arrived at your location
        </Text>
        <View style={styles.orderContainer}>
          <View style={styles.orderItem}>
            <Image source={item.displayImage} style={styles.orderItemImage} />
            <Text style={styles.item}>{item.name}</Text>
          </View>
          <View style={styles.quantityContainer}>
            <Text style={styles.quantity}> x1</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <HeroButton
            title="Scan QR code"
            textColor={DELI_TEXT}
            onPress={() => {}}
            source={require('../../assets/images/scan.png')}
          />
          <HeroButton
            title="Back to dashboard"
            bgcolor='#FFFFFF1A'
            borderColor='#ffffff20'
            borderWidth={2}
            onPress={() => {
              addToRecentOrder();
              navigation.navigate('Home')
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default PaymentSuccessPage;
