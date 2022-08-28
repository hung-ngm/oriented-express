import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../types/navigation';
import { mainTheme } from '../../themes/mainTheme';
import HomeScreen from '../home/HomeScreen';
import FriendsScreen from '../friends/FriendsScreen';
import GlobalChartScreen from '../global-chart/GlobalChartScreen';
import { Entypo, FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator<RootTabParamList>();

const RootTab = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: mainTheme.PRIMARY_COLOR,
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Friends"
                component={FriendsScreen}
                options={{
                    tabBarLabel: 'Friends',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="user-friends" color={color} size={size} />
                    ),

                }}
            />
            <Tab.Screen
                name="GlobalChart"
                component={GlobalChartScreen}
                options={{
                    tabBarLabel: 'GlobalChart',
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="globe" color={color} size={size} />
                    ),
                }}
            />
            
        </Tab.Navigator>
    )
}

export default RootTab;