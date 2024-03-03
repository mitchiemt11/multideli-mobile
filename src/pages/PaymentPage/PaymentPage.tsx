import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/types';
import styles from './styles';

interface IPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Payment'>;
}

const PaymentPage = ({ navigation }: IPageProps) => {
 

  return (
    <View style={styles.container}>
      <View style={styles.minor}/> 
      <View style={styles.main}>
        
      </View>
    </View>
  );
};

export default PaymentPage;
