import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Splash: undefined;
  Welcome: undefined;
  Home: undefined;
  Settings: undefined;
  Payment: undefined;
  PaymentSuccess: undefined;
  Product: { id: number };
};

export const RootStack = createNativeStackNavigator<RootStackParamList>();