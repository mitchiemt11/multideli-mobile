import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import styles from './styles';
import { DELI_BLUE } from '../../assets/common';

interface IProps {
  title: string,
  onPress?: () => void,
  bgcolor?: string,
  textColor?: string,
  borderColor?: string,
  borderWidth?: number,
}

const HeroButton = ({ title, onPress, bgcolor, textColor, borderColor, borderWidth }: IProps) => {
  const dynamicStyles = StyleSheet.create({
    Button: {
      width: '100%',
      backgroundColor: bgcolor ? bgcolor : DELI_BLUE,
      height: 50,
      borderRadius: 25,
      marginTop: 25,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: borderWidth? borderWidth : 0,
      borderColor: borderColor? borderColor : 'none',
    },
    ButtonText: {
      fontSize: 16,
      fontWeight: '500',
      color: textColor ? textColor : '#ffffff',
      lineHeight: 22,
    },
  });
  return (
    <View style={styles.Container}>
      <TouchableOpacity style={dynamicStyles.Button} onPress={onPress}>
        <Text style={dynamicStyles.ButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HeroButton;
