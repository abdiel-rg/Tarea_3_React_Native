import React, { useEffect, useState } from 'react'
import { Text, Image, Input } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../types'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Youtube from 'react-native-youtube-iframe'

const Video = () => {

    const [numero, setNumero] = useState<number>(0);

    return (
        <SafeAreaView style={styles.container}>
            <Text h2 style={styles.primaryText}>Que es React Native?</Text>
            <Youtube
                videoId={'i1uoJCsAxWc'}
                height={300}
            />
        </SafeAreaView>
    )
}

export default Video

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
        marginBottom: 25,
        color: Colors.Active
    },
    secondaryText: {
        color: Colors.Inactive
    }
});
