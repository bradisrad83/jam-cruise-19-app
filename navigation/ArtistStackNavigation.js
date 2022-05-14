import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import LineupScreen from '../assets/screens/LineupScreen';
import ArtistScreen from '../assets/screens/ArtistScreen'

const ArtistStack = createStackNavigator();

export default function ChatNavigator() {
    return (
      <ArtistStack.Navigator
      screenOptions={() => ({
        headerShown: false,          
        })} 
      >
        <ArtistStack.Screen name="LineupScreen" component={LineupScreen} />
        <ArtistStack.Screen name="Artist" component={ArtistScreen} />
      </ArtistStack.Navigator>
    )
  }