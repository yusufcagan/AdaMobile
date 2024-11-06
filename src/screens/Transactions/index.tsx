import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import {styles} from './styles';
import Header from '../../components/Header';
import {ArrowLeft2} from 'iconsax-react-native';
import Color from '../../assets/theme/Color';
import {getTrasaction} from '../../services/transactionServices';

export default function TransactionScreen() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactionHistory = async () => {
    try {
      const response = await getTrasaction();
      setTransactions(response.data.items);
    } catch (error) {
      Alert.alert('Hata', 'İşlem geçmişi alınamadı.');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTransactionHistory();
  }, []);

  const renderTransactionItem = ({item}: any) => (
    <TouchableOpacity style={styles.card}>
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
      <Header />
      <View style={styles.head}>
        <TouchableOpacity style={styles.backButton}>
          <ArrowLeft2 size="20" color={Color.DarkGray} />
        </TouchableOpacity>
        <Text style={styles.headText}>Tüm İşlemler</Text>
      </View>

      <FlatList
        data={transactions}
        renderItem={renderTransactionItem}
        keyExtractor={(item, index) => index.toString()}
        // ListEmptyComponent={<Text style={styles.emptyText}>İşlem yok</Text>}
      />
    </SafeAreaView>
  );
}
