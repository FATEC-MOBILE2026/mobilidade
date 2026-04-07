
import { View, Text, StyleSheet } from 'react-native';

export default function Index() {
    return (
        <View>
            <Text style={styles.title}>Hello World.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18
    }
})