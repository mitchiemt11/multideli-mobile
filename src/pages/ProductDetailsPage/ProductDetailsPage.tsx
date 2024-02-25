import { View, Text } from 'react-native'
import React from 'react'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/types';

interface IPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Product'>;
}

const ProductDetailsPage = ({navigation}: IPageProps) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Product Details Page</Text>
      
    </View>
  )
}

export default ProductDetailsPage