import axios from 'axios';
import useAuthStore from '../store/authStore';

const API_BASE_URL = 'https://api.adalikart.com';

export const getTrasaction = async (page?: number, perPage?: number) => {
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
        params: {
          ...(page !== undefined && {page}),
          ...(perPage !== undefined && {perPage}),
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('hataa:', error);
    throw error;
  }
};
