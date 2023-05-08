import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import FirstScreen from './Screens/FirstScreen';
import secondscreen from './Screens/SecondScreen';

const Stack = createNativeStackNavigator()

const MyStack = () => {
    return(
        <NavigationContainer>
          <Stack.Navigator>
               <Stack.Screen 
                name='First'
                component={FirstScreen}
                options={{title :"Welcome"}}
               />
               <Stack.Screen 
                name='Second'
                component={secondscreen}
                options={{title :"SecondScreen"}}
               />
          </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStack;