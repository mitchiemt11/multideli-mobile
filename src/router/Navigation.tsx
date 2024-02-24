// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

//Pages
import HomePage from '../pages/HomePage/HomePage';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import SettingsPage from '../pages/SetttingsPage/SettingsPage';
import PaymentPage from '../pages/PaymentPage/PaymentPage';
import ProductDetailsPage from '../pages/ProductDetailsPage/ProductDetailsPage';
import { RootStack } from '../../types/types';
import SplashPage from '../pages/SplashPage/SplashPage';

function App() : React.ReactElement {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Splash">
        <RootStack.Screen name="Splash" component={SplashPage} options={{ headerShown: false }} />
        <RootStack.Screen name="Welcome" component={WelcomePage} />
        <RootStack.Screen name="Home" component={HomePage} />
        <RootStack.Screen name="Settings" component={SettingsPage} />
        <RootStack.Screen name="Payment" component={PaymentPage} />
        <RootStack.Screen name="Product" component={ProductDetailsPage} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;