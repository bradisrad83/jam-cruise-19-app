import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './navigation/DrawerNavigation';
import TabsNavigation from './navigation/TabsNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Artists from './assets/Artists';

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@favorites')
    if(!value) { 
      const artists = Artists.artists.map((artist) => {
        return {
          "id": artist.id,
          "favorite": false,
        }
      });
      storeData(JSON.stringify(artists));
    }
  } catch(e) {
    console.log('error exists');
  }
}

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@favorites', value)
  } catch (e) {
    // saving error
  }
}


const App = () => {
  getData();
  return (
    <NavigationContainer>
      <TabsNavigation />
    </NavigationContainer>
  )
}

export default App;
