import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {HomeStackParamList} from '../../RootStackParamList';

const Tab = createBottomTabNavigator<HomeStackParamList>();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
