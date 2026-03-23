import { Platform, StyleSheet } from 'react-native';
import { Colors } from '@/constants/colors';

export const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: Platform.select({
            ios: 40,
            android: 40,
            default: 40, 
        }),
        backgroundColor: Colors.btnPrimary,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',   
    },
    title: {
        color: Colors.labelPrimary,
        fontSize: 16,
        fontWeight: 'bold',
    }
})