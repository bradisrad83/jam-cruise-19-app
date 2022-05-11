import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../assets/screens/HomeScreen';
import LineupScreen from '../assets/screens/LineupScreen';
import ScheduleScreen from '../assets/screens/ScheduleScreen';
import FAQScreen from '../assets/screens/FAQScreen';
import BoatInfoScreen from '../assets/screens/BoatInfoScreen';
import FavoritesScreen from '../assets/screens/FavoritesScreen';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
      <Drawer.Navigator initialRouteName="Home"
        screenOptions={({ route }) => ({
            headerStyle: {backgroundColor: 'black'},
            headerTitleStyle: {color: '#169eba', fontSize: 20},
        })}       
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Lineup" component={LineupScreen} />
        <Drawer.Screen name="Schedule" component={ScheduleScreen} />
        <Drawer.Screen name="FAQs" component={FAQScreen} />
        <Drawer.Screen name="Ship Info" component={BoatInfoScreen} />
        <Drawer.Screen name="Favorites" component={FavoritesScreen} />
      </Drawer.Navigator>
  );
}

export default DrawerNavigation;