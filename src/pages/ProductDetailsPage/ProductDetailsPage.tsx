import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/types';
import { DELI_BLUE, DELI_DARK, DELI_TEXT } from '../../assets/common';
import SmallButton from '../../components/SmallButton/SmallButton';
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import HeroButton from '../../components/HeroButton/HeroButton';

interface IPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Product'>;
}

const ProductDetailsPage = ({ navigation }: IPageProps) => {
  const sheetRef = useRef<BottomSheetMethods>(null)
  return (
    <View style={{ flex: 1, backgroundColor: DELI_DARK }}>
      <Image source={require('../../assets/images/product.png')} style={{ width: '100%', height: 320, objectFit: 'cover' }} />
      <View style={{ padding: 20 }}>
        <Text style={{ color: 'white', fontSize: 28, lineHeight: 26, fontWeight: '700' }}>Beef Cheeseburger</Text>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text style={{ color: 'white', fontSize: 15, fontWeight: '400', lineHeight: 20 }}>
            A perfectly seasoned beef patty, covered with melted cheese
            and topped with pickles, onion, ketchup and mustard- all encased
            in a soft brioche bun. Who wants a cheeseburger that tastes
            better than your favourite takeaway version?!
            Perfect for family burger night- or any time.
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../../assets/images/grams.png')} style={{ width: 16, height: 15, alignSelf: 'center' }} />
            <Text style={{ color: '#FFFFFFA3', fontSize: 14, fontWeight: '500', lineHeight: 22 }}> 325g</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../../assets/images/fire.png')} style={{ width: 12, height: 17, alignSelf: 'center' }} />
            <Text style={{ color: '#FFFFFFA3', fontSize: 14, fontWeight: '500', lineHeight: 22 }}> 527 kcal</Text>

          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../../assets/images/info.png')} style={{ width: 16, height: 16, alignSelf: 'center' }} />
            <Text style={{ color: '#FFFFFFA3', fontSize: 14, fontWeight: '500', lineHeight: 22, marginRight: 8 }}> Non-vegan</Text>
          </View>
        </View>
        <View>
          <View
            style={{
              backgroundColor: 'red',
              padding: 10,
              borderRadius: 5,
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}
          >
            <Image source={require('../../assets/images/spicy.png')} style={{ width: 12, height: 17 }} />
            <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', marginLeft: 5 }}>A bit spicy, but not too much</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text style={{ color: 'white', fontSize: 26 }}>R25</Text>
          <Text style={{ color: '#FFFFFFA3', fontSize: 14, marginLeft: 8, alignSelf: 'center' }}>3 available</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 60 }}>
          <SmallButton
            color={DELI_BLUE}
            title='Grab it'
            onPress={() => sheetRef.current?.open()}
          />

          <SmallButton
            title='See more'
            color='#6E757C'
            onPress={() => navigation.goBack()}
          />

        </View>
      </View>
      <View >
        <BottomSheet
          containerHeight={500}
          style={{ backgroundColor: '#131516' }}
          ref={sheetRef}>
          <Text style={{ color: 'white', fontSize: 24, textAlign: 'center', fontWeight: '400', marginTop: 10, lineHeight: 28 }}>
            You are about to order a
          </Text>
          <Text style={{ color: 'white', fontSize: 24, textAlign: 'center', fontWeight: '400', lineHeight: 28 }}>
            Beef Cheeseburger
          </Text>
          <HeroButton title='Go to Payments' onPress={() => navigation.navigate('Payment')} textColor={DELI_TEXT} />
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
              backgroundColor: '#131516',
              width: '100%',
              height: 50,
              borderRadius: 25,
            }}
            onPress={() => sheetRef.current?.close()}>
            <Text style={{ color: 'white', fontSize: 22, textAlign: 'center', lineHeight: 22 }}>Go back</Text>
          </TouchableOpacity>
        </BottomSheet>
      </View>
    </View>
  )
}

export default ProductDetailsPage;
