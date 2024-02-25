import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/types';

import styles from './styles';
import { DELI_BLUE } from '../../assets/common';

interface IPageProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

function ActionButton() {
  return (
    <TouchableOpacity
      style={{
        width: 100,
        height: 100,
        borderRadius: 90,
        backgroundColor: DELI_BLUE,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        top: -21,
        alignSelf: 'center',
      }}
      onPress={() => console.log("Pressed")}
    >
     <Text>Scan</Text>
    </TouchableOpacity>
  )
}

export default function BottomNav({ navigation }: IPageProps) {
  return (
    <>
      <View style= {styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          activeOpacity={0.5}>
          <>
            <Text style={{color: 'white'}}>Home</Text>
          </>
        </TouchableOpacity>
          <View>
            <ActionButton/>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Settings')}
            activeOpacity={0.5}>
            <>
              <Text style={{color: 'white'}}>Settings</Text>
            </>
          </TouchableOpacity>

      </View>
    </>
  );
}
