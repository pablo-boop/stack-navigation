import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: 30,
        fontWeight: '500',
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

export default styles;