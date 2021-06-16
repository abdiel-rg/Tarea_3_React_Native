import React, { useEffect, useState } from 'react'
import { Text, Image, Input } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../types'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Sumadora = () => {

    const [primerNumero, setPrimerNumero] = useState<number>(0);
    const [segundoNumero, setSegundoNumero] = useState<number>(0);

    return (
        <SafeAreaView style={styles.container}>
            <Input label={'Digite el primer número'} leftIcon={
                <Icon name='tag' size={25} style={{ color: Colors.Inactive }} />
            } keyboardType={'number-pad'} onChange={e => {
                let num = e.nativeEvent.text.replace(/[\,\s]/g, '')
                setPrimerNumero(+num)
            }} />
            <Input label={'Digite el segundo número'} leftIcon={
                <Icon name='tag' size={25} style={{ color: Colors.Inactive }} />
            } keyboardType={'number-pad'} onChange={e => {
                let num = e.nativeEvent.text.replace(/[\,\s]/g, '')
                setSegundoNumero(+num)
            }} />

            <Text h1>{primerNumero + segundoNumero}</Text>
        </SafeAreaView>
    )
}

export default Sumadora

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
