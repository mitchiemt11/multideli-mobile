import React from 'react'
import { Image, TouchableOpacity } from'react-native'

export default function Cart() {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Image
        style={{ width: 23, height: 20 }}
        source={require('../../assets/images/cart.png')}
      />
    </TouchableOpacity>
  );
}