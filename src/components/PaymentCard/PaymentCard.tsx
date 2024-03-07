import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
  icon: any; 
  title: string;
  onPress?: () => void;
}

const PaymentCard: React.FC<Props> = ({icon, title, onPress}) => {

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image source={icon} style={styles.icon} />
      </View>
        <Text style={styles.title}>{title}</Text>
      
    </View>
  );
}


export default PaymentCard;
