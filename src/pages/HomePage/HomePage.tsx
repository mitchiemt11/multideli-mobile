
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

const HomePage = ({navigation}: IPageProps) => {

  // const list = useSelector(state => state.list);

  // console.log("❌", list)

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
        <ItemList navigation={navigation} />
        <View>
          <Text style={styles.OrderHeader}>Recent Orders</Text>
          <View style={styles.orderItemContainer}>
            <View>
              <Text style={styles.orderItem}>Beef Cheese Burger</Text>
              <Text style={styles.orderTime}>Today 14:30</Text>
            </View>
            <View style={styles.orderPriceContainer}>
              <Text style={styles.orderPrice}>-R25</Text>
            </View>
          </View>
          <View style={styles.orderItemContainer}>
            <View>
              <Text style={styles.orderItem}>Beef Cheese Burger</Text>
              <Text style={styles.orderTime}>Today 14:30</Text>
            </View>
            <View style={styles.orderPriceContainer}>
              <Text style={styles.orderPrice}>-R25</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomNav navigation={navigation} />
    </View>
  );
};

export default HomePage;
