import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavContainer} from '../../containers';

const Stack = createStackNavigator();
function AppStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="NavContainer" component={NavContainer} />
      </Stack.Navigator>
    );
  }
  
  export default AppStack;