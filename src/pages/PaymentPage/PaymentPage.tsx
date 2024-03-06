import { View, Text, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/types';
import styles from './styles';
import PaymentCard from '../../components/PaymentCard/PaymentCard';
import HeroButton from '../../components/HeroButton/HeroButton';
import AddressCard from '../../components/AddressCard/AddressCard';
import { DELI_BLUE } from '../../assets/common';
import { useDispatch, useSelector } from'react-redux';
import type { Item } from '../../components/ItemList/ItemList';
import { RouteProp } from '@react-navigation/native';

interface IPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'PaymentSuccess'>;
  route: RouteProp<RootStackParamList, 'PaymentSuccess'>;
}


const PaymentPage = ({ navigation, route }: IPageProps) => {

  const [isProcessing, setIsProcessing] = useState(false);
  const items = useSelector((state: {list: Item[]}) => state.list);

  console.log('🔥', route.params.item.id);
  console.log("⭕️⭕️⭕️⭕️⭕️", items);
  console.log("⭕️⭕️⭕️ldfmvlmfsmvlmflsv⭕️⭕️", JSON.stringify(items.find(
    item => Number(item.id) === Number(route.params.item.id)
    ), null, 2));

  const item = items.find(item => Number(item.id) === Number(route.params.item.id));
  console.log("⭕️⭕️⭕️-------------⭕️⭕️", item?.id);

  console.log("⭕️", item);

  if(!item) {
    return <Text>Item not found</Text>
  }

  const deliveryFee = 5;

  const handlePayment = () => {
    setIsProcessing(true);

    // API call to process payment

    setTimeout(() => {
      setIsProcessing(false);
      navigation.navigate('PaymentSuccess', { item: item });
    }, 2000);
  }

  return (
    <View style={styles.container}>
      <View style={styles.minor} />
      <View style={styles.main}>
        <Text style={styles.header}>You gonna pay with this card</Text>
        <PaymentCard
          icon={require('../../assets/images/visa.png')}
          title="**** **** **** 4242"
        />
        <HeroButton
          title="Change payment method"
          bgcolor='#FFFFFF1A'
          borderColor='#ffffff20'
          borderWidth={2}
          onPress={() => navigation.navigate('Settings')}
        />
        <AddressCard />
        <View style={styles.priceContainer}>
          <Text style={styles.item}>{item.name}</Text>
          <Text style={styles.price}>- R {item.price}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.item}>Delivery fee</Text>
          <Text style={styles.price}>- R {deliveryFee}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.itemNumber}> X1 item</Text>
          <Text style={styles.price}>
            <Text style={styles.total}>Total </Text>
            R {item.price + deliveryFee}
          </Text>
        </View>
        <HeroButton
          title="Pay"
          textColor='#0D0E0F'
          onPress={handlePayment}
          source={require('../../assets/images/money.png')}
        />
        <HeroButton
          title="Choose More"
          bgcolor='#FFFFFF1A'
          borderColor='#ffffff20'
          borderWidth={2}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      {isProcessing &&
        <View style={styles.processing}>
          <ActivityIndicator
            size="large"
            color={DELI_BLUE}
            style={styles.loader}
          />
          <Text style={styles.processingText}>
            Processing payment
          </Text>
        </View>
      }
    </View>
  );
};

export default PaymentPage;
