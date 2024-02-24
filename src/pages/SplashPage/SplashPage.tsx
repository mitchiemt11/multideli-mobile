import { View, Text, Image } from 'react-native'
import React from 'react'
import { DELI_BLUE, DELI_TEXT } from '../../assets/common'


const SplashPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: DELI_BLUE }}>
      <Image source={require('../../assets/logo.png')} style={{ width: 220, height: 250 }} />
      <Text style={{fontSize: 20, color: DELI_TEXT, marginTop: 20, fontWeight: '800'}}>MultiDeli</Text>
      <Text
        style={{fontSize: 16, color: DELI_TEXT, marginTop: 20, fontWeight: '400'}}>
        Multichoice's all in one app
      </Text>
    </View>
  )
}

export default SplashPage