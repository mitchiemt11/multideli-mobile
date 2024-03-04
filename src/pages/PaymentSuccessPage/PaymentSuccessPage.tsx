import { View, Text, Image } from 'react-native';
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
            <Image source={require('../../assets/images/product.png')} style={styles.orderItemImage} />
            <Text style={styles.item}>Beef Cheeseburger</Text>
          </View>
          <View style={styles.quantityContainer}>
            <Text style={styles.quantity}> x1</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <HeroButton
            title="Scan QR code"
            onPress={() => console.log('Open scan')}
          />
          <HeroButton
            title="Back to dashboard"
            bgcolor='#FFFFFF1A'
            borderColor='#ffffff20'
            borderWidth={2}
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
    </View>
  );
};

export default PaymentSuccessPage;
