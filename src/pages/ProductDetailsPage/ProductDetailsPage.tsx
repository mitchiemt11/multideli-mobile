import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/types';
import { DELI_BLUE, DELI_DARK } from '../../assets/common';
import SmallButton from '../../components/SmallButton/SmallButton';

interface IPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Product'>;
}

const ProductDetailsPage = ({ navigation }: IPageProps) => {
  return (
    <View style={{ flex: 1, backgroundColor: DELI_DARK }}>
      <Image source={require('../../assets/images/product.png')} style={{ width: '100%', height: 380, objectFit: 'cover' }} />
      <View style={{ padding: 20 }}>
        <Text style={{ color: 'white', fontSize: 28, lineHeight: 28, fontWeight: '700' }}>Beef Cheeseburger</Text>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight:'400', lineHeight: 20 }}>
            A perfectly seasoned beef patty, covered with melted cheese
            and topped with pickles, onion, ketchup and mustard- all encased
            in a soft brioche bun. Who wants a cheeseburger that tastes
            better than your favourite takeaway version?!
            Perfect for family burger night- or any time.
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../../assets/images/grams.png')} style={{ width: 16, height: 16 }} />
            <Text style={{ color: '#FFFFFFA3', fontSize: 16, fontWeight: '500', lineHeight: 22 }}> 325g</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image source={require('../../assets/images/fire.png')} style={{ width: 16, height: 16 }} />
          <Text style={{ color: '#FFFFFFA3', fontSize: 16, fontWeight: '500', lineHeight: 22 }}>527kcal</Text>
            
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image source={require('../../assets/images/info.png')} style={{ width: 16, height: 16 }} />
            <Text style={{ color: '#FFFFFFA3', fontSize: 16,fontWeight: '500', lineHeight: 22 }}>Non-vegan</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity 
            style={{
              backgroundColor: 'red',
              padding: 10,
              borderRadius: 5,
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'center', 
              flexDirection: 'row'
            }}
          >
            <Image source={require('../../assets/images/spicy.png')} style={{ width: 12, height: 17 }} />
            <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', marginLeft: 5 }}>A bit spicy but not too much</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Text style={{ color: 'white', fontSize: 24 }}>R25</Text>
          <Text style={{ color: 'white', fontSize: 14, marginLeft: 8, alignSelf: 'center' }}>3 available</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <SmallButton
            color={DELI_BLUE}
            title='Grab it'
            onPress={() => console.log('Grabbed!')}
          />
          <SmallButton
            title='See more'
            color='#6E757C'
            onPress={() => console.log('Grabbed!')}
          />
        </View>
      </View>
    </View>
  )
}

export default ProductDetailsPage