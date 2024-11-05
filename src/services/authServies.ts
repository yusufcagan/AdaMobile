import axios from 'axios';

const API_BASE_URL = 'https://api.adalikart.com';

export const sendSmsCode = async (identity: string) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/citizen/authSms/request`,
      {identity: identity},
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('SMS Gönderme Hatası:', error);
    throw error;
  }
};

export const verifySmsCode = async (code: string, secret: string) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/citizen/authSms/login`,
      {code: code, secret: secret},
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('SMS Doğrulama Hatası:', error);
    throw error;
  }
};
