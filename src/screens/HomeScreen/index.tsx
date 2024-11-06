import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  FlatList,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../../RootStackParamList';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header';
import {styles} from './styles';
import {Card, Wallet2} from 'iconsax-react-native';
import {balances, getMe} from '../../services/authServies';
import Color from '../../assets/theme/Color';
import {getTrasaction} from '../../services/transactionServices';

export interface TransactionProps {
  value: number;
  unitTitle: string;
  date: string;
  fullDate: string;
  businessName: string;
  unit: string;
  enumTitle: string;
  direction: string;
  usagePrettyLabel: string;
}
function HomeScreen({
  navigation,
}: NativeStackScreenProps<HomeStackParamList, 'HomeScreen'>) {
  const [user, setUser] = useState<{nameSurname: string} | null>(null);
  const [balance, setBalance] = useState(null);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userResponse, balanceResponse, transactionResponse] =
          await Promise.all([getMe(), balances(), getTrasaction(1, 5)]);

        setUser(userResponse);
        setBalance(balanceResponse.balances);
        setTransactions(transactionResponse.data.items);
      } catch (error) {
        Alert.alert('Hata', 'Veriler alınamadı.');
        console.error('Veri alınamadı:', error);
      }
    };

    fetchData();
  }, []);

  const renderTransactionItem = ({item}: {item: TransactionProps}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('TransactionDetail', {item})}>
      <View style={styles.cardFlex}>
        <Text style={styles.unitText}>
          {item.enumTitle ? item.enumTitle : 'Tutar İndirimi'}
        </Text>
        <Text style={styles.unitText}>
          {item.value} {item.unitTitle} {item.direction === 'DOWN' && 'Harcama'}{' '}
          {item.direction === 'UP' && 'Yükleme'}
        </Text>
      </View>
      <View style={styles.cardFlex}>
        <Text style={styles.historyText}>{item.businessName}</Text>
        <Text style={styles.historyText}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
          <View></View>
          <Text>En son işlemler</Text>
          <FlatList
            data={transactions}
            renderItem={renderTransactionItem}
            scrollEnabled={false}
            keyExtractor={(item, index) => index.toString()}
            // ListEmptyComponent={<Text style={styles.emptyText}>İşlem yok</Text>}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
