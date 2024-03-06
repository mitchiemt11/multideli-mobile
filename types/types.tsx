import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { Item } from '../src/components/ItemList/ItemList';

export type RootStackParamList = {
  Splash: undefined;
  Welcome: undefined;
  Home: undefined;
  Settings: undefined;
  Payment: {item: Item};
  PaymentSuccess: {item: Item};
  Product: { id: number, item: Item };
};

export const RootStack = createNativeStackNavigator<RootStackParamList>();