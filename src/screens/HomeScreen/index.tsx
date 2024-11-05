import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../../RootStackParamList';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header';
import {styles} from './styles';
import {Card, Wallet2} from 'iconsax-react-native';
import {getMe} from '../../services/authServies';

function HomeScreen({
  navigation,
}: NativeStackScreenProps<HomeStackParamList, 'HomeScreen'>) {
  const [user, setUser] = useState<{nameSurname: string} | null>(null);

  useEffect(() => {
    const fetchUserMe = async () => {
      try {
        const response = await getMe();
        setUser(response);
      } catch (error) {
        console.error('Kullanıcı bilgisi alınamadı:', error);
      }
    };

    fetchUserMe();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.sum}>
        <Text style={styles.helloText}>Hoş Geldiniz</Text>
        <Text style={styles.name}>{user?.nameSurname}</Text>
        <Text style={styles.title}>Hesap özetiniz</Text>
        <View style={styles.slider}></View>
        <Text style={styles.title}>Hızlı İşlemler</Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity style={styles.button}>
            <Card size="20" color="#ffffff" />
            <Text style={[styles.helloText, styles.textCenter]}>
              Üye İş Yeri Listesi
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Wallet2 size="20" color="#ffffff" />
            <Text style={[styles.helloText, styles.textCenter]}>
              Etkinlik ve Biletlerim
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
