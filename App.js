// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import TabsNavigation from './navigation/TabsNavigation';
// const App = () => {
//   return (
//     <NavigationContainer>
//       <TabsNavigation />
//     </NavigationContainer>
//   )
// }

// export default App;


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import TabsNavigation from './navigation/TabsNavigation';
import DrawerNavigation from './navigation/DrawerNavigation';
const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  )
}

export default App;
