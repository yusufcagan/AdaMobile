import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

// AuthStore tipi oluşturma
interface AuthStore {
  token: string | null;
  setToken: (newToken: string) => Promise<void>;
  clearToken: () => Promise<void>;
  loadToken: () => Promise<void>;
}

// Zustand store oluşturma
const useAuthStore = create<AuthStore>(set => ({
  token: null,
  setToken: async newToken => {
    set({token: newToken});
    await AsyncStorage.setItem('access_token', newToken); // AsyncStorage'e kaydetme
  },
  clearToken: async () => {
    set({token: null});
    await AsyncStorage.removeItem('access_token'); // AsyncStorage'den temizleme
  },
  loadToken: async () => {
    const storedToken = await AsyncStorage.getItem('access_token');
    set({token: storedToken});
  },
}));

export default useAuthStore;
