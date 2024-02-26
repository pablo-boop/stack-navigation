import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles';

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