import { useState } from 'react';
import { router } from 'expo-router';

import { View, Text, StyleSheet } from 'react-native';

import Button from '@/components/button';

export default function Index() {

    function irAoDashboard() {
        router.push({
            pathname: '/dashboard',
            params: { name : 'João'}
        });
    }

    return (
        <View>
            <Text style={styles.title}>Hello World.</Text>
            <Button 
                title="Ir ao Dashboard"
                onPress={irAoDashboard}
                style={{ marginTop: 40 }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20
    }
})