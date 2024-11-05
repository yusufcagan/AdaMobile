import React, {useState} from 'react';
import {
  Text,
  TextInput,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {styles} from './styles';
import {ArrowLeft2} from 'iconsax-react-native';
import Color from '../../../assets/theme/Color';
import {sendSmsCode} from '../../../services/authServies';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../../../RootStackParamList';

function Login({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, 'Login'>) {
  const [identity, setIdentity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleTcKimlikInput = (text: string) => {
    if (/^\d*$/.test(text)) {
      setIdentity(text);
      setErrorMessage('');
    }
  };

  const handleSms = async () => {
    if (identity.length !== 11) {
      setErrorMessage('TC Kimlik Numarası mutlaka 11 karakterli olmalıdır.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await sendSmsCode(identity);
      const secret = response.secret;
      navigation.navigate('SmsVerification', {secret, identity});
    } catch (error) {
      setErrorMessage('Seçili TC Kimlik Numarası geçersiz.');
    } finally {
      setIsLoading(false);
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
        value={identity}
        onChangeText={handleTcKimlikInput}
        keyboardType="numeric"
        maxLength={11}
        placeholder="TC Kimlik No Giriniz"
      />
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
      <TouchableOpacity onPress={handleSms} style={styles.loginButton}>
        {isLoading ? (
          <ActivityIndicator size="small" color={Color.White} />
        ) : (
          <Text style={styles.loginText}>Giriş yap</Text>
        )}
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
