import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/types';
import styles from './styles';
import PaymentCard from '../../components/PaymentCard/PaymentCard';
import HeroButton from '../../components/HeroButton/HeroButton';
import AddressCard from '../../components/AddressCard/AddressCard';

interface IPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Payment'>;
}

const PaymentPage = ({ navigation }: IPageProps) => {


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
          <Text style={styles.item}> X1 item</Text>
          <Text style={styles.price}>Total R30</Text>
        </View>
        <HeroButton
          title="Pay now"
        />
        <HeroButton
          title="Choose More"
          bgcolor='#FFFFFF1A'
          borderColor='#ffffff20'
          borderWidth={2}
        />
      </View>
    </View>
  );
};

export default PaymentPage;
