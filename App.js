
import React, { Component } from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import mainMenu from './src/mainMenu';
import recipelist from './src/recipelist';
import recipePhotos from './src/recipePhotos';
import Comms from './src/comments';

 const Stack = createStackNavigator();

 class App extends Component {
   render() {
     return (
       <NavigationContainer>
         <Stack.Navigator initialRouteName = "MainPage">
            <Stack.Screen name= "MainPage" component={mainMenu} />
            <Stack.Screen name= "List" component={recipelist} />
            <Stack.Screen name= "Photos" component={recipePhotos} />
            <Stack.Screen name= "Comments" component={Comms} />
         </Stack.Navigator>
       </NavigationContainer>
     );
   }
 }

export default App;
