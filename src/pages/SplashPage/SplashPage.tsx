import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const CHEF_LOGO = require('../../assets/images/chef_logo.png');

const SplashPage = () => {
  return (
    <View style={styles.container}>
      <Image source={CHEF_LOGO} style={styles.chefLogo} />
      <Text style={styles.title}>MultiDeli</Text>
      <Text
        style={styles.description}>
        Multichoice's all in one app
      </Text>
    </View>
  )
}

export default SplashPage