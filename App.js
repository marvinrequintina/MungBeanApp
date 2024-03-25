import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';


import LandingPage from './screens/LandingPage';
import MenuPage from './screens/MenuPage';
import ConfirmationPage from './screens/ConfirmationPage';
import CameraPage from './screens/CameraPage';
import GalleryPage from './screens/GalleryPage';

const Stack = createNativeStackNavigator()
export default function App() {

  
  const [fontsLoaded] = useFonts({
    FredRegular: require('./assets/fonts/Fredoka-Regular.ttf'),
    FredBold: require('./assets/fonts/Fredoka-Bold.ttf'),
    PopRegular: require('./assets/fonts/Poppins-Regular.ttf'),
    PopBold: require('./assets/fonts/Poppins-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async ()=> {
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded){
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTintColor:"#124217"}}>
        
        <Stack.Screen name='Landing' component={LandingPage} options={{headerShown: false}}/>
        <Stack.Screen 
          name='Menu' 
          component={MenuPage} 
          options={{title: "MENU",headerTitleAlign:'center',headerTitleStyle:{fontFamily:'FredBold',color: '#124217', fontSize:25}}}/>
        <Stack.Screen name='Confirmation' component={ConfirmationPage} options={{title: ""}}/>
        <Stack.Screen name='Camera' component={CameraPage} options={{headerShown: false}}/>
        <Stack.Screen name='Gallery' component={GalleryPage} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


