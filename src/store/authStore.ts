import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthStore {
  token: string | null;
  setToken: (newToken: string) => Promise<void>;
  clearToken: () => Promise<void>;
  loadToken: () => Promise<void>;
}

const useAuthStore = create<AuthStore>(set => ({
  token: null,
  setToken: async newToken => {
    set({token: newToken});
    await AsyncStorage.setItem('access_token', newToken);
  },
  clearToken: async () => {
    set({token: null});
    await AsyncStorage.removeItem('access_token');
  },
  loadToken: async () => {
    const storedToken = await AsyncStorage.getItem('access_token');
    set({token: storedToken || null});
  },
}));

useAuthStore.getState().loadToken();

export default useAuthStore;
