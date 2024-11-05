import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../RootStackParamList';
import {Login} from 'iconsax-react-native';
import SmsVerification from '../screens/auth/SmsVerification';

const Stack = createNativeStackNavigator<AuthStackParamList>();
function AuthStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SmsVerification" component={SmsVerification} />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;