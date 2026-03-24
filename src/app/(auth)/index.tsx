import { use, useState } from 'react';
import { router } from 'expo-router';
import { useAuth } from '../../context/AuthContext';

import Logo from '@assets/images/cat-icon.svg';

import { View, Text, StyleSheet } from 'react-native';

import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Card } from '@/components/card';
import { Alert } from '@/components/alert';
import { Icon } from '@/components/icon';

export default function Index() {
    const [name, setName] = useState<string>('');
    const [senha, setSenha] = useState<string>('');

    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [alertData, setAlertData] = useState({
        title: '',
        message: '',
        type: 'info' as 'success' | 'error' | 'info'
    });

    const { signIn } = useAuth();

    function validateCredentials() {
        if(name === 'Ronaldo' && senha === '123') {
            signIn(name);
            router.replace({
                pathname: '/dashboard',
                params: { username: name } 
            });
        } else {
            setAlertData({
                title: 'Erro de Acesso',
                message: 'Credenciais inválidas. Verifique os dados.',
                type: 'error'
            });
            setIsAlertVisible(true);
        }
    }

    return (
        <View style={styles.container}>
            <Card>
                <Icon name={Logo} size={200} />
                {/* <Text style={styles.title}>
                    Bem vindo ao APP Fatec
                </Text> */}
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

            <Alert 
                visible={isAlertVisible}
                title={alertData.title}
                message={alertData.message}
                type={alertData.type}
                onClose={() => setIsAlertVisible(false)} 
            />
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