import { Stack, Redirect } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';

import { useAuth } from '../../context/AuthContext';

export default function AppLayout() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (!isAuthenticated) {
    return <Redirect href="/" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}