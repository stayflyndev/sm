import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './components/auth/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import {auth} from './firebase/firebase'
import { ScreenStackHeaderLeftView } from 'react-native-screens';


// Screens and Routes 
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Landing'>
      <Stack.Screen name="Landing" component={Landing} options={{headerShown: false}}/>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />

    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
