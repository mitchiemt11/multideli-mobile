import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
  icon: any; 
  title: string;
  onPress?: () => void;
}

const SettingsCard: React.FC<Props> = ({icon, title, onPress}) => {

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.right}>
        <TouchableOpacity onPress={onPress}>
          <Image source={require('../../assets/images/arrow.png')} style={styles.arrow} />
        </TouchableOpacity>
      </View>
    </View>
  );
}


export default SettingsCard;
