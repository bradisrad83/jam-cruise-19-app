import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../assets/screens/HomeScreen';
import LineupScreen from '../assets/screens/LineupScreen';
import ScheduleScreen from '../assets/screens/ScheduleScreen';
import FAQScreen from '../assets/screens/FAQScreen';
import BoatInfoScreen from '../assets/screens/BoatInfoScreen';
import FavoritesScreen from '../assets/screens/FavoritesScreen';
import ArtistStackNavigation from './ArtistStackNavigation';

MaterialIcons.loadFont();
Ionicons.loadFont();

const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home-outline';
              color = focused ? '#f24738' : '#169eba';
            }
            if (route.name === 'Lineup') {
              iconName = 'playlist-music-outline';
              color = focused ? '#f24738' : '#169eba';
            }
            if (route.name === 'Schedule') {
              iconName = 'calendar-clock-outline';
              color = focused ? '#f24738' : '#169eba';
            }
            if (route.name === 'FAQ') {
              iconName = 'head-question-outline';
              color = focused ? '#f24738' : '#169eba';
            }
            if (route.name === 'Ship') {
              iconName = 'boat-outline';
              color = focused ? '#f24738' : '#169eba';
              return <Ionicons name={iconName} size={18} color={color} />
            } 
            if(route.name === 'Favorites') {
                iconName = 'star-outline';
                color = focused ? '#f24738' : '#169eba';
            }                                               
            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={18} color={color} />;
          },
          tabBarActiveTintColor: '#f24738',
          tabBarInactiveTintColor: '#169eba',
          tabBarLabelStyle: {fontSize: 10, fontWeight: 'bold', backgroundColor: '#000'},
          tabBarStyle: {backgroundColor: '#000'},
          // headerStyle: {backgroundColor: '#000'},
          // headerTitleStyle: {color: '#f24738', fontSize: 20}
        })}      
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Lineup" component={ArtistStackNavigation} />
        <Tab.Screen name="Schedule" component={ScheduleScreen} />
        <Tab.Screen name="FAQ" component={FAQScreen} />
        <Tab.Screen name="Ship" component={BoatInfoScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
      </Tab.Navigator>
  );
}

export default TabsNavigation;