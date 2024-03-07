import { View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react';
import styles from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/types';
import { useSelector } from'react-redux';

interface IPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, keyof RootStackParamList>;
}

export interface Item {
  id: number;
  date: Date;
  image: string;
  name: string;
  description: string;
  grams: string;
  calories: string;
  info: string;
  price: number;
  displayImage: string;
}

const ItemList = ({navigation}: IPageProps) => {

  const list = useSelector((state: {list: Item[]}) => state.list);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {list.map((item: Item)  => (
          <View key={item.id} style={styles.itemContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Product', {
                  id: Number(item.id),
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
