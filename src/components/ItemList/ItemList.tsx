import { View, Image, ScrollView } from 'react-native'
import React from 'react';
import styles from './styles';

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

const ItemList = () => {
  return (
     <ScrollView horizontal showsHorizontalScrollIndicator={false}>
     <View style={styles.container}>
       {items.map(item => (
         <View key={item.id} style={styles.itemContainer}>
           <Image source={item.image} style={styles.itemImage} />
         </View>
       ))}
     </View>
   </ScrollView>
  )
}

export default ItemList;
