import {
  View,
  Text,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../../components/Header';
import {getMe} from '../../services/authServies';
import {styles} from './styles';
import useAuthStore from '../../store/authStore';

export default function AccountScreen() {
  const [user, setUser] = React.useState<{nameSurname: string} | null>(null);
  const clearTokens = useAuthStore(state => state.clearToken);
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
    <SafeAreaView>
      <Header />
      <View style={styles.sum}>
        <Text style={styles.helloText}>Hoş Geldiniz</Text>
        <Text style={styles.name}>{user?.nameSurname}</Text>
      </View>
      <TouchableOpacity onPress={() => clearTokens()}>
        <Text>Çıkış Yap</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
