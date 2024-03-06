import React from 'react'
import { Image } from'react-native'

export default function Cart() {
  return (
    <Image
      style={{ width: 23, height: 20 }}
      source={require('../../assets/images/cart.png')}
    />
  );
}