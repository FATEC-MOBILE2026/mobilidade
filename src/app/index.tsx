import { use, useState } from 'react';
import { router } from 'expo-router';

import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Card } from '@/components/card';

export default function Index() {
    const [name, setName] = useState<string>('');
    const [senha, setSenha] = useState<string>('');

    function validateCredentials() {
        if(name === 'Ronaldo' && senha === '123') {
            router.push({
                pathname: '/dashboard',
                params: { username: name } 
            });
        } else {
            alert('Credenciais inválidas. Tente novamente.');
        }
    }

    return (
        <View style={styles.container}>
            <Card>
                <Text style={styles.title}>
                    Bem vindo ao APP Fatec
                </Text>
                <Input 
                    placeholder="Usuario" 
                    onChangeText={setName} />
                <Input 
                    placeholder="Senha" 
                    secureTextEntry 
                    onChangeText={setSenha} />
                <Button 
                    title="Enviar" 
                    onPress={validateCredentials} 
                    style={{ marginTop: 20 }}/>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        padding: 32,
        justifyContent: 'center',
        gap: 16,
    },
    title: {
        color: '#333',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 26,
    },
});