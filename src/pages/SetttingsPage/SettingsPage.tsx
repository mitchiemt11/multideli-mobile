import { View, Text, Button } from 'react-native'
import React from 'react'
import { DELI_DARK } from '../../assets/common'

const SettingsPage = ({navigation}: any) => {
  return (
    <View style={{ flex: 1, backgroundColor: DELI_DARK }}>
      <Text style={{color: 'white', margin: 50, fontSize: 40}}>Settings Page</Text>
    </View>
  )
}

export default SettingsPage