// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from "./assets/screens/HomeScreen";

// const App = () => {
//   return (
//     <NavigationContainer>
//       <HomeScreen />
//     </NavigationContainer>
//   );
// };

// export default App;

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabsNavigation from './navigation/TabsNavigation';
const App = () => {
  return (
    <NavigationContainer>
      <TabsNavigation />
    </NavigationContainer>
  )
}

export default App;
