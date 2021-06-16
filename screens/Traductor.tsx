import React, { useEffect, useState } from 'react'
import { Text, Image, Input } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../types'
import Icon from 'react-native-vector-icons/MaterialIcons'
const conversor = require('numero_letras')

const Traductor = () => {

    const [numero, setNumero] = useState<number>(0);

    return (
        <SafeAreaView style={styles.container}>
            <Input label={'Digite un número'} leftIcon={
                <Icon name='tag' size={25} style={{ color: Colors.Inactive }} />
            } keyboardType={'number-pad'} onChange={e => {
                let num = e.nativeEvent.text.replace(/[\,\s]/g, '')
                setNumero(+num)
            }} />
            
            <Text h4>{conversor.numero_letras(numero)}</Text>

        </SafeAreaView>
    )
}

export default Traductor

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
