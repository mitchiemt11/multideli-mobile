import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import styles from './styles';

interface IProps {
  title: string,
  onPress?: () => void,
  bgcolor?: string,
  textColor?: string,
}

const HeroButton = ({ title, onPress, bgcolor, textColor }: IProps) => {
  const dynamicStyles = StyleSheet.create({
    Button: {
      width: '100%',
      backgroundColor: bgcolor ? bgcolor : '#007bff',
      height: 50,
      borderRadius: 25,
      marginTop: 25,
      alignItems: 'center',
      justifyContent: 'center',
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
