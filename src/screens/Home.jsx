import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
    const navigation  = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.navText}>Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Contact')}>
                <Text style={styles.navText}>Contato</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10
    },
    navButton: {
        width: 110,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c3c3c3c3',
        padding: 12,
        borderRadius: 10,
        margin: 5
    },
    navText: {
        fontSize: 20,
        fontWeight: '400'
    }
})