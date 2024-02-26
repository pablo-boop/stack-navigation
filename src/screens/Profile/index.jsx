import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../Home/styles';

export default function Profile() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Voltar para Home</Text>
            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>
        </View>
    )
}