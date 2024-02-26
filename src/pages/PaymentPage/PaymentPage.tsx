import { View, Text } from 'react-native'
import React from 'react'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/types';

interface IPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Payment'>;
}

const PaymentPage = ({navigation}: IPageProps) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Payment Page</Text>

    </View>

  )
}

export default PaymentPage;