import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/types';
import styles from './styles';

interface IPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

function ActionButton() {
  return (
    <TouchableOpacity
      style={styles.scan}
      onPress={() => console.log("Pressed")}
    >
      <Image source={require('../../assets/images/scan.png')} style={styles.scanIcon} />
    </TouchableOpacity>
  )
}

export default function BottomNav({ navigation }: IPageProps) {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          activeOpacity={0.5}>
          <>
            <Image source={require('../../assets/images/home.png')} style={styles.homeIcon} />
          </>
        </TouchableOpacity>
        <View>
          <ActionButton />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          activeOpacity={0.5}>
          <>
            <Text style={{ color: 'white' }}>Settings</Text>
          </>
        </TouchableOpacity>

      </View>
    </>
  );
}
