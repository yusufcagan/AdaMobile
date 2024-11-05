/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from './RootStackParamList';
import useAuthStore from './src/store/authStore';
import MyTabs from './src/navigations/BottomTabNavigation';
import AuthStackNavigator from './src/navigations/AuthStackNavigator';

function App(): React.JSX.Element {
  const token = useAuthStore(state => state.token);
  console.log(token);
  return (
    <NavigationContainer>
      {token ? <MyTabs /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}

export default App;
