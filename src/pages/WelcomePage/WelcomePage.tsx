import { Text, Button, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
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
    <View style={{ flex: 1, backgroundColor: DELI_BLUE }}>
      <SafeAreaView />
      <View>
        <Text style={{ fontWeight: '500', fontSize: 28, lineHeight: 28, color: '#0D0E0F', marginTop: 45, marginLeft: 45 }}>MultiDeli</Text>
        <Image source={FOOD_BAG} style={{ width: 200, height: 200 }} />
        <View>
          <Text style={{ fontSize: 40, lineHeight: 40, fontWeight: '500', color: '#0D0E0F', marginLeft: 40 }}>Welcome to the</Text>
          <Text style={{ fontSize: 40, lineHeight: 40, fontWeight: '500', color: '#0D0E0F', marginLeft: 40, }}>universe of</Text>
          <Text style={{ fontSize: 40, lineHeight: 40, fontWeight: '500', color: '#0D0E0F', marginLeft: 40 }}>fresh office food</Text>
        </View>
        <Text style={{ textAlign: 'center', fontSize: 36, fontWeight: '400', color: '#0D0E0F', marginTop: 60, transform: [{ rotate: '345deg' }] }}>Sooo many</Text>
        <Text style={{ textAlign: 'center', fontSize: 36, fontWeight: '400', color: '#0D0E0F', transform: [{ rotate: '345deg' }] }}>options</Text>
        <View style={{ marginTop: 60, alignContent: 'center', alignItems: 'center' }}> 
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonText}>See how it works</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TextButton}  >
          <Text style={styles.DashboardText}>Skip and open dashhboard</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default WelcomePage

