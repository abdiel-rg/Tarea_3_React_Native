import React from 'react'
import { Text, Image } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../types'

const Presentacion = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../assets/pp.jpg')} style={styles.image} />
            <Text h3 style={styles.primaryText}>Abdiel Rodríguez Gutiérrez</Text>
            <Text h4 style={styles.secondaryText}>20186552@itla.edu.do</Text>
        </SafeAreaView>
    )
}

export default Presentacion

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 250,
        width: 250,
        borderRadius: 1000
    },
    primaryText: {
        marginTop: 25,
        color: Colors.Active
    },
    secondaryText: {
        color: Colors.Inactive
    }
});
