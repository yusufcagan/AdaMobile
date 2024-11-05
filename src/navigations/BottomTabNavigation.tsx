import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {HomeStackParamList} from '../../RootStackParamList';
import TransactionScreen from '../screens/Transactions';
import QrGenerationScreen from '../screens/QrGenerationScreen';
import NotificationScreen from '../screens/Notifications';
import AccountScreen from '../screens/Account';

const Tab = createBottomTabNavigator<HomeStackParamList>();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="TransactionScreen" component={TransactionScreen} />
      <Tab.Screen name="QrGenerationScreen" component={QrGenerationScreen} />
      <Tab.Screen name="NotificationScreen" component={NotificationScreen} />
      <Tab.Screen name="AccountScreen" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
