import { View, Button, Text, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/types';
import styles from './styles';
import Banner from '../../components/Banner/Banner';
import LocationCard from '../../components/LocationCard/LocationCard';
import ItemList from '../../components/ItemList/ItemList';

interface IPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

const HomePage = ({ navigation }: IPageProps) => {
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
        <ItemList />
        <View>
          <Text style={styles.OrderHeader}>Recent Orders</Text>
          <View style={styles.orderItemContainer}>
            <View>
            <Text style={styles.orderItem}>Beef Cheese Burger</Text>
            <Text style={styles.orderTime}>Today 14:30</Text>
            </View>
            <View style= {styles.orderPriceContainer}>
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
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  )
}

export default HomePage;
