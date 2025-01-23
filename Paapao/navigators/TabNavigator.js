import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../screens/Colors';
import Fabrictype from '../screens/Fabrictype';
import Price from '../screens/Price';
import Symbol from '../screens/Symbol';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    // กำหนดไอคอนสำหรับแต่ละแท็บ
                    if (route.name === 'Fabrictype') {
                        iconName = focused ? 'shirt' : 'shirt-outline';
                    } else if (route.name === 'Colors') {
                        iconName = focused ? 'color-palette' : 'color-palette-outline';
                    } else if (route.name === 'Price') {
                        iconName = focused ? 'cash' : 'cash-outline';
                    } else if (route.name === 'Symbol') {
                        iconName = focused ? 'bookmark' : 'bookmark-outline';
                    }

                    // ส่งคืนไอคอนที่กำหนด
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#41C9E2', // สีเมื่อแท็บถูกเลือก
                tabBarInactiveTintColor: 'gray', // สีเมื่อแท็บไม่ได้ถูกเลือก
            })}
        >
            {/* กำหนดแท็บแต่ละแท็บ */}
            <Tab.Screen
                name="Fabrictype"
                component={Fabrictype} // คอมโพเนนต์ที่จะแสดงเมื่อเลือกแท็บนี้
            />
            <Tab.Screen
                name="Colors"
                component={Colors} // คอมโพเนนต์ที่จะแสดงเมื่อเลือกแท็บนี้
            />
            <Tab.Screen
                name="Price"
                component={Price} // คอมโพเนนต์ที่จะแสดงเมื่อเลือกแท็บนี้
            />
            <Tab.Screen
                name="Symbol"
                component={Symbol} // คอมโพเนนต์ที่จะแสดงเมื่อเลือกแท็บนี้
            />
        </Tab.Navigator>
    );
}
