import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {generateQr} from '../../services/generateServices';
import {styles} from './styles';

function QRGeneratorScreen() {
  const [qrCode, setQrCode] = useState('');
  const [timeLeft, setTimeLeft] = useState(30);
  const [isModalVisible, setModalVisible] = useState(false);

  const fetchNewQrCode = async () => {
    try {
      const response = await generateQr();
      setQrCode(response.code);
      setTimeLeft(30);
    } catch (error) {
      Alert.alert('Hata', 'QR kodu oluşturulamadı. Lütfen tekrar deneyin.');
    }
  };

  useEffect(() => {
    fetchNewQrCode();
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setModalVisible(true);
    }
  }, [timeLeft]);

  const regenerateQRCode = () => {
    fetchNewQrCode();
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.qrContainer}>
        {qrCode ? (
          <QRCode
            value={qrCode}
            size={200}
            backgroundColor="white"
            color="black"
          />
        ) : (
          <Text>QR Kod Yükleniyor...</Text>
        )}
      </View>
      <Text style={styles.timerText}>
        QR için kullanım süresi: {timeLeft} saniye
      </Text>
      <Text style={styles.instructionText}>
        İndiriminizi kullanmak için QR kodunuzu yetkiliye okutun.
      </Text>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              QR kodun süresi doldu. Lütfen yenisini oluşturun.
            </Text>
            <TouchableOpacity
              onPress={regenerateQRCode}
              style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Yeni QR Üret</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default QRGeneratorScreen;
