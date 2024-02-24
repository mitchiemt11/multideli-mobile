import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Splash: undefined;
  Welcome: undefined;
  Home: undefined;
  Settings: undefined;
  Payment: undefined;
  Product: { productId: string };
  ProductListPage: { categoryId: string };
};

export const RootStack = createNativeStackNavigator<RootStackParamList>();