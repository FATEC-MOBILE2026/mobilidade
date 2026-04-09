import { View, Text, StyleSheet } from "react-native";

import { router, useLocalSearchParams } from 'expo-router';

import Button from '@/components/button';

export default function Dashboard() {
    const { name } = useLocalSearchParams< { name: string } >();

    function voltar() {
        router.back();
    }

    return (
        <View>
            <Text>Bem Vindo, {name}!</Text>
            <Button title="Voltar" onPress={voltar}/>
        </View>
    )
}