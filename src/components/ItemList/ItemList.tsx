import { View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react';
import styles from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/types';

interface IPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, keyof RootStackParamList>;
}

const items = [
  {
    id: 1,
    name: 'Burger',
    image: require('../../assets/images/burger_small.png')
  },
  {
    id: 2,
    name: 'Sandwich',
    image: require('../../assets/images/sandwich.png'),

  },
  {
    id: 3,
    name: 'Salad',
    image: require('../../assets/images/salad.png')
  },
  {
    id: 4,
    name: 'Pizza',
    image: require('../../assets/images/pizza.png')
  },
  {
    id: 5,
    name: 'More',
    image: require('../../assets/images/more.png')
  },
]

const ItemList = ({navigation}: IPageProps) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {items.map(item => (
          <View key={item.id} style={styles.itemContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Product', {
                  productId: item.id, // pass product id as param
                })
              }>
              <Image source={item.image} style={styles.itemImage} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ItemList;
