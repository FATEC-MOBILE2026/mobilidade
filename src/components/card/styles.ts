import { Platform, StyleSheet } from 'react-native';
import { Colors } from '@/constants/colors';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 24,
    gap: 16,

    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4, 

    ...Platform.select({
      web: {
        width: 450,       
        alignSelf: 'center', 
        maxWidth: '90%', 
      },
      default: {
        width: '100%',    
      }
    })
  },
});