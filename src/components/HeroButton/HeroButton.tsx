import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles';

interface IProps {
  title: string,
  onPress?: () => void,
}

const HeroButton = ({ title, onPress }: IProps) => {
  return (
    <View style={styles.Container}>
      <TouchableOpacity style={styles.Button} onPress={onPress}>
        <Text style={styles.ButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HeroButton;
