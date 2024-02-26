import { View } from 'react-native'
import React from 'react'
import SettingsCard from '../../components/SettingsCard/SettingsCard'
import styles from './styles'

const SettingsPage = () => {
  return (
    <View style={styles.container}>
      <SettingsCard
        title="Payment methods"
        icon={require('../../assets/images/money.png')}
        onPress={() => console.log('PaymentMethods')}
      />
    </View>
  )
}

export default SettingsPage