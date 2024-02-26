import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/types';

interface IPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Splash'>;
}
const CHEF_LOGO = require('../../assets/images/chef_logo.png');

const SplashPage = ({ navigation }: IPageProps) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const navigate = () => {
    navigation.navigate('Welcome');
  };

  return (
    <View style={styles.container}>
      <Image source={CHEF_LOGO} style={styles.chefLogo} />
      <Text style={styles.title}>MultiDeli</Text>
      <Text style={styles.description}>Multichoice's all in one app</Text>
    </View>
  );
};

export default SplashPage