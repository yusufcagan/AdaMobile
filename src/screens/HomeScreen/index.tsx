import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../../RootStackParamList';
import {SafeAreaView} from 'react-native-safe-area-context';

function HomeScreen({
  navigation,
}: NativeStackScreenProps<HomeStackParamList, 'HomeScreen'>) {
  return (
    <SafeAreaView>
      <Text>index</Text>
    </SafeAreaView>
  );
}

export default HomeScreen;
