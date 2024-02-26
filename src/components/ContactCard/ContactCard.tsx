import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
  details: string | number; 
  title: string;
  onPress?: () => void;
}

const ContactCard: React.FC<Props> = ({title, details, onPress}) => {

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.details}>{details}</Text>
      </View>
      <View style={styles.right}>
        <TouchableOpacity onPress={onPress}>
          <Image source={require('../../assets/images/pencil.png')} style={styles.pencil} />
        </TouchableOpacity>
      </View>
    </View>
  );
}


export default ContactCard;
