import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/types';

import SmallButton from '../../components/SmallButton/SmallButton';
import HeroButton from '../../components/HeroButton/HeroButton';
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import { Item } from '../../components/ItemList/ItemList';

import { DELI_BLUE, DELI_TEXT } from '../../assets/common';
import styles from './styles';

interface IPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Product'>;
  route: RouteProp<RootStackParamList, 'Product'>
}

const ProductDetailsPage = ({ navigation, route }: IPageProps) => {

  const items = useSelector((state: {list: Item[]}) => state.list);

  const item = items.find(item => Number(item.id) === Number(route.params.id)); //why

  if(!item) {
    return <Text>Item not found</Text>
  }

  const sheetRef = useRef<BottomSheetMethods>(null)
  return (
    <View style={styles.container}>
      <Image source={item.displayImage} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.header}>{item.name}</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            {item.description}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.itemImage}>
            <Image source={require('../../assets/images/grams.png')} style={styles.gramsImage} />
            <Text style={styles.measurements}> {item.grams}g</Text>
          </View>
          <View style={styles.itemImage}>
            <Image source={require('../../assets/images/fire.png')} style={styles.caloriesImage} />
            <Text style={styles.measurements}> {item.calories} kcal</Text>

          </View>
          <View style={styles.itemImage}>
            <Image source={require('../../assets/images/info.png')} style={styles.infoImage} />
            <Text style={styles.measurementsLast}> {item.info}</Text>
          </View>
        </View>
        <View>
          <View style={styles.bannerContainer}>
            <Image source={require('../../assets/images/spicy.png')} style={styles.bannerImage} />
            <Text style={styles.bannerText}>A bit spicy, but not too much</Text>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>R{item.price}</Text>
          <Text style={styles.availability}>3 available</Text>
        </View>
        <View style={styles.buttonContainer}>
          <SmallButton
            color={DELI_BLUE}
            textColor={DELI_TEXT}
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
      <View style={styles.bottomContainer}>
        <BottomSheet
          height={'35%'}
          style={styles.bottomSheet}
          ref={sheetRef}>
          <Text style={styles.orderText}>
            You are about to order a
          </Text>
          <Text style={styles.itemName}>
            {item.name}
          </Text>
          <HeroButton
            title='Go to Payments'
            onPress={() => {
              sheetRef.current?.close();
              navigation.navigate('Payment', { item: item });
            }}
            textColor={DELI_TEXT}
          />
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => sheetRef.current?.close()}>
            <Text style={styles.backText}>Go back</Text>
          </TouchableOpacity>
        </BottomSheet>
      </View>
    </View>
  )
}

export default ProductDetailsPage;
