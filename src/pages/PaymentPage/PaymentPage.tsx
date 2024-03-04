import { View, Text, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/types';
import styles from './styles';
import PaymentCard from '../../components/PaymentCard/PaymentCard';
import HeroButton from '../../components/HeroButton/HeroButton';
import AddressCard from '../../components/AddressCard/AddressCard';
import { DELI_BLUE } from '../../assets/common';

interface IPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'PaymentSuccess'>;
}

const PaymentPage = ({ navigation }: IPageProps) => {

  const [isProcessing, setIsProcessing] = useState(false);


  const handlePayment = () => {
    setIsProcessing(true);

    // API call to process payment

    setTimeout(() => {
      setIsProcessing(false);
      navigation.navigate('PaymentSuccess');
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
          <Text style={styles.item}>Beef Cheeseburger</Text>
          <Text style={styles.price}>- R25</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.item}>Delivery fee</Text>
          <Text style={styles.price}>- R5</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.itemNumber}> X1 item</Text>
          <Text style={styles.price}>
            <Text style={styles.total}>Total </Text>
            R30
          </Text>
        </View>
        <HeroButton
          title="Pay now"
          onPress={handlePayment}
        />
        <HeroButton
          title="Choose More"
          bgcolor='#FFFFFF1A'
          borderColor='#ffffff20'
          borderWidth={2}
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
