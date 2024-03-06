// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

//Pages
import HomePage from '../pages/HomePage/HomePage';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import SettingsPage from '../pages/SetttingsPage/SettingsPage';
import PaymentPage from '../pages/PaymentPage/PaymentPage';
import PaymentSuccessPage from '../pages/PaymentSuccessPage/PaymentSuccessPage';
import ProductDetailsPage from '../pages/ProductDetailsPage/ProductDetailsPage';
import { RootStack } from '../../types/types';
import SplashPage from '../pages/SplashPage/SplashPage';
import { DELI_DARK } from '../assets/common';
import BackButton from '../components/BackButton/BackButton';
import Cart from '../components/Cart/Cart';

function App() : React.ReactElement {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Splash">
        <RootStack.Screen name="Splash" component={SplashPage} options={{ headerShown: false }} />
        <RootStack.Screen name="Welcome" component={WelcomePage}  options={{ headerShown: false }} />
        <RootStack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
        <RootStack.Screen name="Settings" options={{
          headerStyle: {
            backgroundColor: DELI_DARK,
          },
          headerBackTitleVisible: false,
          headerTitleStyle: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 26,
          },
          animationTypeForReplace: 'pop',
        }} component={SettingsPage}  />
        <RootStack.Screen
          name="Payment"
          component={PaymentPage}
          options={{
            headerStyle: {
              backgroundColor: DELI_DARK,
            },
            headerBackTitleVisible: false,
            headerTitleStyle: {
              color: 'white',
              fontWeight: 'bold',
              fontSize: 26,
            },
          }}
        />
        <RootStack.Screen
          name="PaymentSuccess"
          component={PaymentSuccessPage}
          options={{
            headerStyle: {
              backgroundColor: DELI_DARK,
            },
            headerTitle:'Payment Success',
            headerRight: () => (
              <Cart />
            ),
            headerLeft: () => (
              <BackButton />
            ),
            headerBackTitleVisible: false,
            headerTitleStyle: {
              color: 'white',
              fontWeight: 'bold',
              fontSize: 26,
            },
            animationTypeForReplace: 'pop',
          }}
        />
        <RootStack.Screen name="Product" component={ProductDetailsPage} options={{ headerShown: false }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;