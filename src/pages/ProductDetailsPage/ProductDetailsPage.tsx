import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/types';
import { DELI_DARK } from '../../assets/common';

interface IPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Product'>;
}

const ProductDetailsPage = ({navigation}: IPageProps) => {
  return (
    <View style={{ flex: 1, backgroundColor: DELI_DARK }}>
      <Image source={require('../../assets/images/product.png')} style={{width: '100%', height: 380, objectFit: 'cover'}} />
      <View style={{padding: 20}}>
        <Text style={{color: 'white', fontSize: 24}}>Beef Cheeseburger</Text>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text style={{color: 'white', fontSize: 18}}>
            A perfectly seasoned beef patty, covered with melted cheese 
            and topped with pickles, onion, ketchup and mustard- all encased 
            in a soft brioche bun. Who wants a cheeseburger that tastes 
            better than your favourite takeaway version?! 
            Perfect for family burger night- or any time.
          </Text>
         
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
            <Text style={{color: 'white', fontSize: 18}}>325g</Text>
            <Text style={{color: 'white', fontSize: 18}}>527kcal</Text>
            <Text style={{color: 'white', fontSize: 18}}>Non-vegan</Text>
          </View>
          <View>
            <TouchableOpacity style={{backgroundColor: 'red', padding: 10, borderRadius: 5, marginTop: 20}}>
              <Text style={{color: 'white', fontSize: 16, textAlign: 'center'}}>A bit spicy but not too much</Text>
              </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{color: 'white', fontSize: 24}}>R25</Text>
            <Text style={{color: 'white', fontSize: 14, marginLeft: 8,  alignSelf: 'center'}}>3 available</Text>
          </View>
          </View>
    </View>
  )
}

export default ProductDetailsPage