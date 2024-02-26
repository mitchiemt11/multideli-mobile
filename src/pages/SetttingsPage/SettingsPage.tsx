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
       <SettingsCard
        title="Personal details"
        icon={require('../../assets/images/personal.png')}
        onPress={() => console.log('Personal Details')}
      />
       <SettingsCard
        title="Additional"
        icon={require('../../assets/images/additional.png')}
        onPress={() => console.log('Additional')}
      />
    </View>
  )
}

export default SettingsPage