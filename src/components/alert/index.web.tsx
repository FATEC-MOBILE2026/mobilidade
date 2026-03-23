import React, { useEffect } from 'react';

import { AlertProps } from './types';
import { View, Text, TouchableOpacity, Modal, Animated, Platform, StyleSheet } from 'react-native';

import { Colors } from '@/constants/colors';

const AlertWeb: React.FC<AlertProps> = ({ 
    title, 
    message, 
    visible, 
    onClose, 
    type = 'info' 
}) => {
    const fadeAnim = React.useRef(new Animated.Value(0)).current;

    useEffect(() => {
    if (visible) {
        Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300, 
        useNativeDriver: true, 
        }).start();
        
        const timer = setTimeout(onClose, 6000);
        return () => clearTimeout(timer); 
    } else {
        fadeAnim.setValue(0);
    }
    }, [visible, fadeAnim, onClose]);

    const semanticColors = {
    error: {
        bg: '#FFEBEE', 
        border: Colors.semantic.error,
        text: '#B71C1C',
    },
    success: {
        bg: '#E8F5E9', 
        border: Colors.semantic.success,
        text: '#1B5E20',
    },
    info: {
        bg: '#E3F2FD', 
        border: '#2196F3', 
        text: '#0D47A1', 
    }
    };

    const currentColors = semanticColors[type];

    return (
    <Modal
        transparent={true}
        visible={visible}
        onRequestClose={onClose} 
        animationType="none" 
    >
        <View style={styles.overlay}>
        
        <Animated.View 
            style={[
            styles.alertContainer, 
            { 
                opacity: fadeAnim, 
                backgroundColor: currentColors.bg,
                borderLeftColor: currentColors.border
            }
            ]}
        >
            <View style={styles.content}>
            <Text style={[styles.title, { color: currentColors.text }]}>
                {title}
            </Text>
            <Text style={[styles.message, { color: currentColors.text }]}>
                {message}
            </Text>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={[styles.closeText, { color: currentColors.text }]}>
                ✕
            </Text>
            </TouchableOpacity>
        </Animated.View>
        </View>
    </Modal>
    );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  alertContainer: {
    width: '100%',
    maxWidth: 400, 
    padding: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderLeftWidth: 6, 
    
    ...Platform.select({
      web: {
        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)',
      },
      default: {
        elevation: 8,
      }
    })
  },
  content: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 6,
  },
  message: {
    fontSize: 15,
    lineHeight: 20,
  },
  closeButton: {
    padding: 4,
  },
  closeText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default AlertWeb;