
import {View, Text, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../types/types';
import styles from './styles';
import Banner from '../../components/Banner/Banner';
import LocationCard from '../../components/LocationCard/LocationCard';
import ItemList from '../../components/ItemList/ItemList';
import BottomNav from '../../components/BottomNav/BottomNav';
import { useSelector } from 'react-redux';

interface IPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

interface Item {
  id: number;
  date: Date;
  name: string;
  image: string;
  displayImage: string;
  description: string;
  price: number;
  grams: number;
  calories: number;
  info: string;
}

const HomePage = ({navigation}: IPageProps) => {

  const recentOrders = useSelector((state: {list: Item[]}) => state.list);


  // Logic needs refinement, itt doesn't refresh the list when the user adds a new order
  const mostRecentOrders = [...recentOrders].sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, 2);

  console.log("", JSON.stringify(mostRecentOrders, null, 2));

  return (
    <View style={styles.Container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.HeaderContainer}>
        <Text style={styles.Header}>Hi Mitchell</Text>
        <Text style={styles.Reminder}>It's time for lunch :) </Text>
      </View>
      <ScrollView style={styles.Scroll}>
        <Banner />
        <View style={styles.Location}>
          <Text style={styles.distanceHeader}>Nearest fridge</Text>
          <View style={styles.timePill}>
            <Text style={styles.time}>2 mins of walk </Text>
          </View>
        </View>
        <LocationCard />
        <ItemList navigation={navigation}/>
        <View>
          <Text style={styles.OrderHeader}>Recent Orders</Text>
          {mostRecentOrders.map((order, index) => (
            <View key={index} style={styles.orderItemContainer}>
              <View>
                <Text style={styles.orderItem}>{order.name}</Text>
                <Text style={styles.orderTime}>{order.date.toLocaleString()}</Text>
              </View>
              <View style={styles.orderPriceContainer}>
                <Text style={styles.orderPrice}>-R{order.price}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <BottomNav navigation={navigation} />
    </View>
  );
};

export default HomePage;
