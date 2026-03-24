import { AuthProvider } from '../context/AuthContext';
import { Slot } from 'expo-router';

export default function Root() {
  return (
    <AuthProvider>
      <Slot /> 
    </AuthProvider>
  );
}