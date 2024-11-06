import {View, Text, Touchable, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../../RootStackParamList';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header';
import {styles} from './styles';
import {Card, Wallet2} from 'iconsax-react-native';
import {balances, getMe} from '../../services/authServies';
import Color from '../../assets/theme/Color';

function HomeScreen({
  navigation,
}: NativeStackScreenProps<HomeStackParamList, 'HomeScreen'>) {
  const [user, setUser] = useState<{nameSurname: string} | null>(null);
  const [balance, setBalance] = useState(null);

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

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await balances();
        setBalance(response.balances);
      } catch (error) {
        console.error('Bakiye bilgisi alınamadı:', error);
      }
    };

    fetchBalance();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.sum}>
        <Text style={styles.helloText}>Hoş Geldiniz</Text>
        <Text style={styles.name}>{user?.nameSurname}</Text>
        <Text style={styles.title}>Hesap özetiniz</Text>
        <FlatList
          data={balance}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 10}}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={styles.slider}>
              <Text style={styles.sliderName}>{item.title}</Text>
              <Text style={styles.sliderUnit}>
                {item.balance} {item.unit}
              </Text>
            </View>
          )}
        />
        <Text style={styles.title}>Hızlı İşlemler</Text>
        <View style={styles.fastMenu}>
          <TouchableOpacity style={styles.button}>
            <Card size="20" color={Color.White} />
            <Text style={[styles.helloText, styles.textCenter]}>
              Üye İş Yeri Listesi
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Wallet2 size="20" color={Color.White} />
            <Text style={[styles.helloText, styles.textCenter]}>
              Etkinlik ve Biletlerim
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{padding: 15}}>
        <Text>Etkinlikler</Text>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
