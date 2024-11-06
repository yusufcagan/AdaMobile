import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TransactionScreen from '../screens/Transactions';
import QrGenerationScreen from '../screens/QrGenerationScreen';
import NotificationScreen from '../screens/Notifications';
import AccountScreen from '../screens/Account';
import CustomTabBar from './CustomTabBar'; // CustomTabBar bileşenini ekledik
import {HomeStackParamList} from '../../RootStackParamList';
import TransactionDetail from '../screens/TransactionDetail';

const Tab = createBottomTabNavigator<HomeStackParamList>();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="TransactionScreen" component={TransactionScreen} />
      <Tab.Screen name="QrGenerationScreen" component={QrGenerationScreen} />
      <Tab.Screen name="NotificationScreen" component={NotificationScreen} />
      <Tab.Screen name="AccountScreen" component={AccountScreen} />
      <Tab.Screen name="TransactionDetail" component={TransactionDetail} />
    </Tab.Navigator>
  );
}

export default MyTabs;
