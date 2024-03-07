import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const LocationCard = () => {
  return (
    <View style={styles.card}>
      <Image source={require('../../assets/images/pin.png')} style={styles.locationIcon} />
      <Text style={styles.locationName}>Building A, 4th floor</Text>
      <Text style={styles.locationID}>Fridge ID: 123447489</Text>
      <TouchableOpacity style={styles.Button}>
        <Image source={require('../../assets/images/directions.png')} style={styles.directionsIcon} />
        <Text style={styles.ButtonText}>Get directions</Text>

      </TouchableOpacity>
    </View>
  )
}

export default LocationCard;