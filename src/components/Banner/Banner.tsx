import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const Banner = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Meet the meat</Text>
        <Text style={styles.title}>without meat</Text>
        <Text style={styles.description}>5 dishes</Text>
      </View>
      <View>
        <View style={styles.pillContainer}>
          <Text style={styles.pillText}>-10%</Text>
        </View>
        <Image source={require('../../assets/images/burger.png')} style={styles.burger} />
      </View>
    </View>
  )
}

export default Banner;
