import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Color from '../../assets/theme/Color';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../../RootStackParamList';
import {styles} from './styles';

export default function TransactionDetail({
  route,
  navigation,
}: NativeStackScreenProps<HomeStackParamList, 'TransactionDetail'>) {
  const {item} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.closeButton} />
        <Text style={styles.headerTitle}>
          <Text style={styles.boldText}>Harcama</Text> İşlem Geçmişi
        </Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.closeButton}>
          <Text style={styles.closeText}>X</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Detaylar</Text>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Kategoriler</Text>
          <Text style={styles.detailText}>
            {item.enumTitle ? item.enumTitle : 'Tutar İndirimi'}
          </Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>ADALI KART SAHIP VE NO</Text>
          <Text style={styles.detailText}>{item?.businessName}</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>TOPLAM HARCAMA</Text>
          <Text style={styles.detailText}>
            {item.value} {item.unitTitle}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
