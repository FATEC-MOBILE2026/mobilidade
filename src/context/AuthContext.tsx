import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextData = {
  isAuthenticated: boolean;
  user: string | null;
  isLoading: boolean; 
  signIn: (username: string) => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@Auth:user');
      
      if (storagedUser) {
        setUser(storagedUser);
        setIsAuthenticated(true);
      }
      setIsLoading(false); 
    }

    loadStorageData();
  }, []);

  async function signIn(username: string) {
    setIsAuthenticated(true);
    setUser(username);
    await AsyncStorage.setItem('@Auth:user', username);
  }

  async function signOut() {
    setIsAuthenticated(false);
    setUser(null);
    await AsyncStorage.removeItem('@Auth:user');
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);