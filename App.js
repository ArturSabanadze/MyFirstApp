import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importing screens from the AppPages folder
import WelcomeScreen from './AppPages/WelcomeScreen';
import InvoiceScreen from './AppPages/InvoiceScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Invoice" component={InvoiceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
