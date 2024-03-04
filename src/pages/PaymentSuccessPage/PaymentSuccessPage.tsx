import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/types';
import styles from './styles';
import HeroButton from '../../components/HeroButton/HeroButton';
import AddressSmall from '../../components/AddressSmall/AddressSmall';

interface IPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

const PaymentSuccessPage = ({ navigation }: IPageProps) => {

  return (
    <View style={styles.container}>
      <View style={styles.minor} />
      <View style={styles.main}>
        <AddressSmall />
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
          title="Scan QR code"
        />
        <HeroButton
          title="Back to dashboard"
          bgcolor='#FFFFFF1A'
          borderColor='#ffffff20'
          borderWidth={2}
        />
      </View>
    </View>
  );
};

export default PaymentSuccessPage;
