
import { View, Text, StyleSheet } from 'react-native';

import Button from '../components/button';

export default function Index() {
    return (
        <View>
            <Text style={styles.title}>Hello World.</Text>
            <Button 
                title="Alterar"
                onPress={() => alert('Clicou no botão')}
                style={{ marginTop: 40 }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20
    }
})