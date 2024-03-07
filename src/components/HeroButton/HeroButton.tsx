import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import styles from './styles';
import { DELI_BLUE, DELI_DARK } from '../../assets/common';

interface IProps {
 title: string,
 onPress?: () => void,
 bgcolor?: string,
 textColor?: string,
 borderColor?: string,
 borderWidth?: number,
 source?: any,
}

const HeroButton = ({ title, onPress, bgcolor, textColor, borderColor, borderWidth, source }: IProps) => {
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
      flexDirection: 'row', 
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
        {source && <Image source={source} tintColor={DELI_DARK} style={styles.Image} />}
      </TouchableOpacity>
    </View>
 )
}

export default HeroButton;
