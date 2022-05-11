import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../assets/screens/HomeScreen';
import LineupScreen from '../assets/screens/LineupScreen';
import ScheduleScreen from '../assets/screens/ScheduleScreen';
import FAQScreen from '../assets/screens/FAQScreen';
import BoatInfoScreen from '../assets/screens/BoatInfoScreen';
import FavoritesScreen from '../assets/screens/FavoritesScreen';
import ArtistScreen from '../assets/screens/ArtistScreen';
import CustomDrawer from '../assets/components/CustomDrawer';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

MaterialIcons.loadFont();
Ionicons.loadFont();


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
      <Drawer.Navigator 
        initialRouteName="Home"
        screenOptions={({ route }) => ({
            headerStyle: {backgroundColor: 'black'},
            headerTitleStyle: {color: '#169eba', fontSize: 20},
            drawerLabelStyle: {fontSize: 15, marginLeft: -13},
            drawerActiveBackgroundColor: '#003f4d',
            drawerActiveTintColor: '#3ddeff',
            drawerInactiveTintColor: '#169eba',
            headerTintColor: '#169eba',           
        })}       
        drawerContent={props => <CustomDrawer {...props} />}
      >
        <Drawer.Screen name="Home" component={HomeScreen} 
            options={{
                drawerIcon: () => (
                    <MaterialIcons name={'home-outline'} size={20} color={'#169eba'} />
                )
            }}
        />
        <Drawer.Screen name="Lineup" component={LineupScreen} 
            options={{
                drawerIcon: () => (
                    <MaterialIcons name={'playlist-music-outline'} size={20} color={'#169eba'} />
                )
            }}        
        />
        <Drawer.Screen name="Schedule" component={ScheduleScreen} 
            options={{
                drawerIcon: () => (
                    <MaterialIcons name={'calendar-clock-outline'} size={20} color={'#169eba'} />
                )
            }}        
        />
        <Drawer.Screen name="FAQs" component={FAQScreen} 
            options={{
                drawerIcon: () => (
                    <MaterialIcons name={'head-question-outline'} size={20} color={'#169eba'} />
                )
            }}        
        />
        <Drawer.Screen name="Ship Info" component={BoatInfoScreen} 
            options={{
                drawerIcon: () => (
                    <Ionicons name={'boat-outline'} size={20} color={'#169eba'} />
                )
            }}        
        />
        <Drawer.Screen name="Favorites" component={FavoritesScreen} 
            options={{
                drawerIcon: () => (
                    <MaterialIcons name={'star-outline'} size={20} color={'#169eba'} />
                )
            }}        
        />
        <Drawer.Screen name="Artist" component={ArtistScreen}   options={{
            drawerItemStyle: { height: 0 }
        }}/>
      </Drawer.Navigator>
  );
}

export default DrawerNavigation;