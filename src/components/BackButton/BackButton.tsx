
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BackButton() {
 const navigation = useNavigation();

 return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        style={{ width: 24, height: 24 }}
        source={require('../../assets/images/back_button.png')}
      />
    </TouchableOpacity>
 );
}