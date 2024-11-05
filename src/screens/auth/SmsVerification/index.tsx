import {Text, SafeAreaView, TouchableOpacity, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import {ArrowLeft2} from 'iconsax-react-native';
import Color from '../../../assets/theme/Color';
import {OtpInput} from 'react-native-otp-entry';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../../../RootStackParamList';
import {verifySmsCode, sendSmsCode} from '../../../services/authServies';
import useAuthStore from '../../../store/authStore';

function SmsVerification({
  route,
  navigation,
}: NativeStackScreenProps<AuthStackParamList, 'SmsVerification'>) {
  const {secret, identity} = route.params;
  const [otp, setOtp] = useState<string>('');
  const [secretCode, setSecretCode] = useState<string>(secret);
  const [isError, setIsError] = useState(false);
  const [timer, setTimer] = useState(40);
  const [isResendVisible, setIsResendVisible] = useState(false);

  const handleOtpChange = async (text: string) => {
    setOtp(text);

    if (text.length === 4) {
      setIsError(false);
      try {
        const response = await verifySmsCode(text, secret);
        console.log(response);
        useAuthStore.getState().setToken(response.access_token);
      } catch (error) {
        console.log('Doğrulama başarısız', error);
        setIsError(true);
      }
    }
  };

  const handleResendCode = async () => {
    try {
      setTimer(40);
      setIsResendVisible(false);
      const response = await sendSmsCode(identity);
      setSecretCode(response.secret);
    } catch (error) {
      Alert.alert('Hata', 'Kod tekrar gönderilemedi.');
    }
  };

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else {
      setIsResendVisible(true);
    }
  }, [timer]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <ArrowLeft2 size="20" color={Color.DarkGray} />
      </TouchableOpacity>
      <Text style={styles.title}>SMS ile Doğrulama</Text>
      <Text style={styles.text}>
        Telefon numaranıza gelen SMS kodunu aşağıya giriniz.
      </Text>
      <OtpInput numberOfDigits={4} onTextChange={handleOtpChange} />
      {isError && <Text style={styles.errorText}>Yanlış Kod</Text>}

      {timer > 0 ? (
        <Text style={styles.timerText}>{formatTime(timer)}</Text>
      ) : (
        isResendVisible && (
          <TouchableOpacity onPress={handleResendCode}>
            <Text style={[styles.resendCodeText, styles.timerText]}>
              Kodu Tekrar Gönder
            </Text>
          </TouchableOpacity>
        )
      )}
    </SafeAreaView>
  );
}

export default SmsVerification;
