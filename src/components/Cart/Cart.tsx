import React from 'react'
import { Image, TouchableOpacity } from'react-native'

export default function Cart() {
  return (
    <TouchableOpacity onPress={() => console.log("Cart opened here....")}>
      <Image
        style={{ width: 23, height: 20 }}
        source={require('../../assets/images/cart.png')}
      />
    </TouchableOpacity>
  );
}