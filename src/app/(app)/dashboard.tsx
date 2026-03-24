import { router, useLocalSearchParams } from 'expo-router';

import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@/components/button';

import { useAuth } from '../../context/AuthContext';

export default function Dashboard() {
    const { user, signOut } = useAuth(); 

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo, {user}</Text>
            <Button title="Sair do App" onPress={signOut} />
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        justifyContent: 'center',
        gap: 16,
    },
    title: {
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold',
    },      
});