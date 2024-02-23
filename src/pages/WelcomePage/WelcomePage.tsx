import { Text, Button, View } from 'react-native'
import React from 'react'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/types';

interface IPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
}

const WelcomePage = ({navigation}: IPageProps) => {
  return (
    <View style={{  flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>WelcomePage</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default WelcomePage

