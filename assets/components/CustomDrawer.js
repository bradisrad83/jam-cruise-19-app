import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

MaterialIcons.loadFont();
Ionicons.loadFont();

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}
            contentContainerStyle={{backgroundColor: '#252525', height: '100%'}}
        >
        <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
} 
export default CustomDrawer;