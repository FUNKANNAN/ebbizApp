import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RegistrationScreen from './src/screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import HomeSreen from './src/screens/HomeSreen/HomeSreen';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'LoginScreen'}>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{
            title: 'Registration Screen',
            headerStyle: {
              backgroundColor: '#304FFE',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: '#fff',
              fontSize: 22,
            },
          }}
        />
        <Stack.Screen
          name="HomeSreen"
          component={HomeSreen}
          options={{
            headerTitleAlign: 'center',
            title: 'Home Screen',
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#304FFE',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: '#fff',
              fontSize: 22,
            },
            headerBackImage: null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
