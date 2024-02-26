import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const CheckboxSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={[styles.checkbox, isChecked && styles.checked]}>
        <View style={[styles.innerCheckbox, isChecked && styles.innerChecked]} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCheckbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  checked: {
    borderColor: '#2ab70e',
  },
  innerChecked: {
    backgroundColor: '#2ab70e',
  },
});

export default CheckboxSwitch;
