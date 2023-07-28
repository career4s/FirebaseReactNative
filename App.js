import React,{useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/Home.js';
import AuthScreen from './screens/Auther.js';
import RealtimeDBScreen from './screens/RealtimeDatabase.js';
import CloudFirestoreScreen from './screens/CloudFirestore.js';
import CloudStorageScreen from './screens/CloudStorage.js';
import AdmobScreen from './screens/Admob.js';
import FunctionsScreen from './screens/Functions.js';
import AnalyticsScreen from './screens/Analytics.js';
import Notification from './screens/Notification'; 
//import analytics from './Setup';
const Stack = createNativeStackNavigator();

const App = () => {
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();
  return (
    <NavigationContainer
      // // ref={navigationRef}
      // // onReady={() =>
      // //   (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      // // }
      // // onStateChange={() => {
      // //   const previousRouteName = routeNameRef.current;
      // //   const currentRouteName = navigationRef.current.getCurrentRoute().name;

      // //   if (previousRouteName !== currentRouteName) {
      // //     // The line below uses the expo-firebase-analytics tracker
      // //     // https://docs.expo.io/versions/latest/sdk/firebase-analytics/
      // //     // Change this line to use another Mobile analytics SDK

      // //     analytics().setCurrentScreen(currentRouteName);
      // //   }

      // //   // Save the current route name for later comparision
      // //   routeNameRef.current = currentRouteName;
      // }}
      >
      <Stack.Navigator headerMode="none" initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="RealtimeDB" component={RealtimeDBScreen} />
        <Stack.Screen name="CloudFirestoreDB" component={CloudFirestoreScreen} />
        <Stack.Screen name="CloudStorage" component={CloudStorageScreen} />
        <Stack.Screen name="Admob" component={AdmobScreen} />
        <Stack.Screen name="Functions" component={FunctionsScreen} />
        <Stack.Screen name="Analytics" component={AnalyticsScreen} />
        <Stack.Screen name="Notifications" component={Notification} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
