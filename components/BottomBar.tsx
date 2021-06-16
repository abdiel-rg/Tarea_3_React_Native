import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RouteParamList } from '../types'
import { NavigationContainer } from '@react-navigation/native';
import Presentacion from '../screens/Presentacion'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Colors } from '../types'
import Sumadora from '../screens/Sumadora';
import TablaMultiplicar from '../screens/TablaMultiplicar';
import Traductor from '../screens/Traductor';
import Video from '../screens/Video';

const { Navigator, Screen } = createBottomTabNavigator<RouteParamList>();

const BottomBar = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName={'Presentacion'}>
                <Screen name='Presentacion' component={Presentacion} options={{
                    tabBarLabel: 'Presentación',
                    tabBarIcon: ({ focused }) => (
                        <Icon name='face' size={25} style={{
                            color: focused ? Colors.Active : Colors.Inactive
                        }}></Icon>
                    )
                }} />
                <Screen name='Sumadora' component={Sumadora} options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name='calculate' size={25} style={{
                            color: focused ? Colors.Active : Colors.Inactive
                        }}></Icon>
                    )
                }} />
                <Screen name='TablaMultiplicar' component={TablaMultiplicar} options={{
                    tabBarLabel: 'Tabla de Multiplicar',
                    tabBarIcon: ({ focused }) => (
                        <Icon name='format-list-numbered' size={25} style={{
                            color: focused ? Colors.Active : Colors.Inactive
                        }}></Icon>
                    )
                }} />
                <Screen name='Traductor' component={Traductor} options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name='translate' size={25} style={{
                            color: focused ? Colors.Active : Colors.Inactive
                        }}></Icon>
                    )
                }} />
                <Screen name='Video' component={Video} options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name='movie' size={25} style={{
                            color: focused ? Colors.Active : Colors.Inactive
                        }}></Icon>
                    )
                }} />
            </Navigator>
        </NavigationContainer>
    )
}

export default BottomBar
