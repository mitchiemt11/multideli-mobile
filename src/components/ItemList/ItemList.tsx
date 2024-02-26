import { View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react';
import styles from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/types';
import { useSelector } from'react-redux';

interface IPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, keyof RootStackParamList>;
}

interface Item {
  id: string;
  image: string;
}

const ItemList = ({navigation}: IPageProps) => {

  const list = useSelector((state: {list: Item[]}) => state.list);

  console.log("✅", list)

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {list.map((item: Item)  => (
          <View key={item.id} style={styles.itemContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Product', {
                  id: item.id,
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
