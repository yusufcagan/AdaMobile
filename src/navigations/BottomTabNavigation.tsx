import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {HomeStackParamList} from '../../RootStackParamList';
import TransactionScreen from '../screens/Transactions';
import QrGenerationScreen from '../screens/QrGenerationScreen';
import NotificationScreen from '../screens/Notifications';
import AccountScreen from '../screens/Account';
import {Home, Money3, Notification, Profile} from 'iconsax-react-native';
import Color from '../assets/theme/Color';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator<HomeStackParamList>();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? Color.FocusedGray : Color.DarkGray,
                fontSize: 10,
              }}>
              Anasayfa
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Home
              size="24"
              variant="Bold"
              color={focused ? Color.FocusedGray : Color.DarkGray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TransactionScreen"
        component={TransactionScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? Color.FocusedGray : Color.DarkGray,
                fontSize: 10,
              }}>
              İşlemler
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Money3
              size="24"
              variant="Bold"
              color={focused ? Color.FocusedGray : Color.DarkGray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="QrGenerationScreen"
        component={QrGenerationScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? Color.FocusedGray : Color.DarkGray,
                fontSize: 10,
              }}></Text>
          ),
          tabBarIcon: ({focused}) => (
            <Home
              size="24"
              variant="Bold"
              color={focused ? Color.FocusedGray : Color.DarkGray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? Color.FocusedGray : Color.DarkGray,
                fontSize: 10,
              }}>
              Bildirimler
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Notification
              size="24"
              variant="Bold"
              color={focused ? Color.FocusedGray : Color.DarkGray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? Color.FocusedGray : Color.DarkGray,
                fontSize: 10,
              }}>
              Hesap
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Profile
              size="24"
              variant="Bold"
              color={focused ? Color.FocusedGray : Color.DarkGray}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
