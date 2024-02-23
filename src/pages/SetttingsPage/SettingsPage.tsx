import { View, Text, Button } from 'react-native'
import React from 'react'

const SettingsPage = ({navigation}: any) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Page</Text>
      <Button
        title="Go to Payments"
        onPress={() => navigation.navigate('Payment')} />
    </View>
  )
}

export default SettingsPage