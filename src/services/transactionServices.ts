import axios from 'axios';
import useAuthStore from '../store/authStore';

const API_BASE_URL = 'https://api.adalikart.com';

export const getTrasaction = async () => {
  const token = useAuthStore.getState().token;
  try {
    const response = await axios.get(
      `${API_BASE_URL}/citizen/transactionHistory`,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('hataa:', error);
    throw error;
  }
};
