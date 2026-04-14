import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@/components/button';

export default function Dashboard() {
     const { username } = useLocalSearchParams<{ username: string }>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo, {username}</Text>
            <Button title="Voltar" onPress={() => router.back()} />
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
