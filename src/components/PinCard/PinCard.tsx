import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import CheckboxSwitch from '../CheckBoxSwitch/CheckBoxSwitch';

interface Props {
  title: string;
  onPress?: () => void;
}

const PinCard: React.FC<Props> = ({ title, onPress}) => {

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.right}>
        <TouchableOpacity onPress={onPress}>
          <Image source={require('../../assets/images/check.png')} style={styles.pin} />
        </TouchableOpacity>
      </View>
    </View>
  );
}


export default PinCard;

