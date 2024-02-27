import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import styles from './style';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/types';
import { DELI_BLUE } from '../../assets/common';


interface IPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
}

const FOOD_BAG = require('../../assets/images/food_bag.png');

const WelcomePage = ({ navigation }: IPageProps) => {
  return (
    <ScrollView>
      <View style={styles.Container}>
        <SafeAreaView />
        <View>
          <Text style={styles.Header}>MultiDeli</Text>
          <Image source={FOOD_BAG} style={{ width: 200, height: 200 }} />
          <View>
            <Text style={styles.Subheading}>Welcome to the</Text>
            <Text style={styles.Subheading}>universe of</Text>
            <Text style={styles.Subheading}>fresh office food</Text>
          </View>
          
          <Text style={styles.TextRotate}>Sooo many</Text>
          <Text style={styles.Options}>options</Text>
          <View style={styles.ButtonContainer}>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.ButtonText}>See how it works</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={styles.TextButton}>
              <Text style={styles.DashboardText}>Skip and open dashhboard</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default WelcomePage;
