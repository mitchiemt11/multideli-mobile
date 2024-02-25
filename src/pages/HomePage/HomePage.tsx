import { View, Button, Text, StatusBar } from 'react-native'
import React from 'react'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/types';
import styles from './styles';
import Banner from '../../components/Banner/Banner';

interface IPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

const HomePage = ({navigation}: IPageProps) => {
  return (
    <View style={styles.Container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.HeaderContainer}>
        <Text style={styles.Header}>Hi Mitchell</Text>
        <Text style={styles.Reminder}>It's time for lunch :) </Text>
      </View>
     <Banner/>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  )
}

export default HomePage;