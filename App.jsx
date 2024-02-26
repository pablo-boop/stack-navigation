//React Native Components
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//Navigations
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Screens
import Contact from './src/screens/Contact';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home' component={Home} 
          options={{
            title: 'Inicial',
            headerStyle: {
              backgroundColor: '#e6e6e6'
            },
            headerTitleStyle: {
              fontWeight: '400',
              color: '#4682b4'
            },
            headerTitleAlign: 'center'
          }}  
        />
        <Stack.Screen 
          name='Profile' component={Profile} 
          options={{
            title: 'Perfil',
            headerStyle: {
              backgroundColor: '#e6e6e6'
            },
            headerTitleStyle: {
              fontWeight: '400',
              color: '#4682b4'
            },
            headerTitleAlign: 'center'
          }}  
        />
        <Stack.Screen 
          name='Contact' component={Contact} 
          options={{
            title: 'Contato',
            headerStyle: {
              backgroundColor: '#e6e6e6'
            },
            headerTitleStyle: {
              fontWeight: '400',
              color: '#4682b4'
            },
            headerTitleAlign: 'center',
          }}  
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
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
