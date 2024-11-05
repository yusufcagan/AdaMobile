/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Login from './src/screens/auth/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from './RootStackParamList';
import SmsVerification from './src/screens/auth/SmsVerification';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator<AuthStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SmsVerification" component={SmsVerification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
