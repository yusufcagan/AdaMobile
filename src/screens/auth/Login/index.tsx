import React, {useState} from 'react';
import {
  Text,
  TextInput,
  Button,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {ArrowLeft2, Vibe} from 'iconsax-react-native';
import Color from '../../../assets/theme/Color';

function Login() {
  const [tcKimlikNo, setTcKimlikNo] = useState('');

  const handleTcKimlikInput = (text: string) => {
    // Sadece rakam girişini kabul eder
    if (/^\d*$/.test(text)) {
      setTcKimlikNo(text);
    }
  };

  const validateTcKimlikNo = () => {
    if (tcKimlikNo.length === 11) {
      Alert.alert('Başarılı', 'TC Kimlik Numarası geçerli!');
    } else {
      Alert.alert('Hata', 'TC Kimlik Numarası 11 haneli olmalıdır.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <ArrowLeft2 size="20" color={Color.DarkGray} />
      </TouchableOpacity>
      <Text style={styles.title}>Hoş geldiniz! Sizi tekrar görmek harika.</Text>
      <TextInput
        style={styles.input}
        value={tcKimlikNo}
        onChangeText={handleTcKimlikInput}
        keyboardType="numeric"
        maxLength={11}
        placeholder="TC Kimlik No Giriniz"
      />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Giriş yap</Text>
      </TouchableOpacity>
      <View style={styles.flex} />
      <Text style={styles.footerText}>
        Adalı Karttınız Yok Mu?{' '}
        <Text
          onPress={() => console.log('üye sayfası')}
          style={styles.footerLink}>
          Hemen kayıt ol!
        </Text>
      </Text>
    </SafeAreaView>
  );
}
export default Login;
