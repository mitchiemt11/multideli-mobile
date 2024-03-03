import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/types';
import styles from './styles';
import PaymentCard from '../../components/PaymentCard/PaymentCard';
// import HeroButton from '../../components/HeroButton/HeroButton';

interface IPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Payment'>;
}

const PaymentPage = ({ navigation }: IPageProps) => {
 

  return (
    <View style={styles.container}>
      <View style={styles.minor}/> 
      <View style={styles.main}>
        <Text style={styles.header}>You gonna pay with this card</Text>
        <PaymentCard
        icon={require('../../assets/images/visa.png')}
        title="**** **** **** 4242"
        />
        {/* <HeroButton
          title="Change Payment Method"
          onPress={ () => navigation.navigate('Settings') }
        /> */}
      </View>
    </View>
  );
};

export default PaymentPage;
