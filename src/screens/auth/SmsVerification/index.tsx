import {Text, SafeAreaView, TouchableOpacity, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import {ArrowLeft2} from 'iconsax-react-native';
import Color from '../../../assets/theme/Color';
import {OtpInput} from 'react-native-otp-entry';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../../../RootStackParamList';
import {verifySmsCode, sendSmsCode} from '../../../services/authServies';

function SmsVerification({
  route,
  navigation,
}: NativeStackScreenProps<AuthStackParamList, 'SmsVerification'>) {
  const [otp, setOtp] = useState<string>('');
  const [isError, setIsError] = useState(false);
  const [timer, setTimer] = useState(40); // Başlangıçta 40 saniye
  const [isResendVisible, setIsResendVisible] = useState(false); // "Kodu Tekrar Gönder" için durum

  const {secret} = route.params;

  const handleOtpChange = async (text: string) => {
    setOtp(text);

    if (text.length === 4) {
      setIsError(false);
      try {
        await verifySmsCode(text, secret);
        console.log('Doğrulama başarılı');
      } catch (error) {
        console.log('Doğrulama başarısız', error);
        setIsError(true);
      }
    }
  };

  const handleResendCode = async () => {
    try {
      // Kodu tekrar gönderme isteği
      //   await sendSmsCode(route.params.tcKimlikNo);
      setTimer(40); // 40 saniyelik sayacı yeniden başlat
      setIsResendVisible(false); // "Kodu Tekrar Gönder" butonunu gizle
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
