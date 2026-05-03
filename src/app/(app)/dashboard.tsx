import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@/components/button';
import { List } from '@/components/list';

import { useAuth } from '@/context/AuthContext';

export default function Dashboard() {
    const { user, signOut } = useAuth();

    const posts = [
        { id: '1', title: 'Card 1', description: 'Texto de aviso 1' },
        { id: '2', title: 'Card 2', description: 'Texto de aviso 2' },
        { id: '3', title: 'Card 3', description: 'Texto de aviso 3' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo, {user}</Text>
            <Button title="Sair da APP" onPress={signOut} />

            <List
                data={posts}
                onLoadMore={() => {}}
                renderItemContent={(item) => (
                    <View>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text style={styles.cardText}>{item.description}</Text>
                    </View>
                )}
            />

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
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    cardText: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    }
});
