import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const AddressCard = () => {
  return (
    <View style={styles.card}>
      <View style={{ flexDirection: 'row' }}>
        <Image source={require('../../assets/images/location.png')} style={styles.locationIcon} />
      </View>
      <View>
        <Text style={styles.locationName}>Q Building A, 4th floor</Text>
        <Text style={styles.locationID}>Order ID: 123447489</Text>
      </View>
    </View>
  )
}

export default AddressCard;