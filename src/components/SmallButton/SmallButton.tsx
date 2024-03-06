import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface SmallButtonProps {
  color: string;
  title: string;
  textColor?: string;
  onPress?: () => void;
}

const SmallButton = ({color, title, onPress, textColor}: SmallButtonProps) => {
  const dynamicStyles =  StyleSheet.create({
    button: {
      backgroundColor: color,
      width: '45%',
      padding:20,
      borderRadius:40
    },
    text: {
      color: textColor? textColor : '#fff',
      textAlign:'center',
      fontSize: 16
    }
  })
  return (
    <TouchableOpacity  
      style={dynamicStyles.button}
      onPress={onPress}
    >
      <Text style={dynamicStyles.text}>{title}</Text>
    </TouchableOpacity>
  )
}
export default SmallButton;
