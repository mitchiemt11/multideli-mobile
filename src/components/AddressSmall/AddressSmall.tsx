import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const AddressCard = () => {
  return (
    <View style={styles.card}>
      <View style={{ flexDirection: 'row' }}>
        <Image source={require('../../assets/images/location.png')} style={styles.locationIcon} />
        <Text style={styles.locationName}>Q Building A, 4th floor</Text>
      </View>
    </View>
  )
}

export default AddressCard;