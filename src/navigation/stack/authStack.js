import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    SignIn,
  } from '../../containers';

const Stack = createStackNavigator();
function AuthStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    );
  }
  
  export default AuthStack;