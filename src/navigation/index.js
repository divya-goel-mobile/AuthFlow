import * as React from 'react';
import {View} from "react-native";
import AuthStack from './stack/authStack';
import AppStack from './stack/appStack'
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import { RESTORE_TOKEN, SIGN_OUT } from '../redux/actionTypes';
import AsyncStorage from '@react-native-community/async-storage';
import {authAction} from '../redux/action';
const Stack = createStackNavigator();
const LoginStack = createStackNavigator();

function AuthNavigation() {
    return (
      <NavigationContainer>
        <LoginStack.Navigator screenOptions={{ headerShown: false }}>
          <LoginStack.Screen name="AuthStack" component={AuthStack} />
        </LoginStack.Navigator>
      </NavigationContainer>
    );
  }

  function AppNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="AppStack" component={AppStack} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  class StackContainer extends React.PureComponent {

    getAccessToken = async () => {
        let token = await AsyncStorage.getItem("AUTH_TOKEN");
        if (token) {
          this.props._authAction(RESTORE_TOKEN, "bearer: token");
        } else {
            this.props._authAction(SIGN_OUT);
        }
    };

    componentDidMount() {
        this.getAccessToken();
    }

    checkNavigation = () => {

        // We will check that which flow needs to be show
        // IF token present then app Navigation else Login screen
        // Loading screen is like a filler so that async storage can provide detail
        if (this.props.auth.isLoading) {
            return <View style={{backgroundColor:"grey", flex: 1}} />;
        } 
        else if (this.props.auth.userToken !== null) {
           return <AppNavigation />;
        } else {
          return <AuthNavigation />;
        }
      };

    render() {
        return this.checkNavigation();
      }
  };

  const mapStateToProps = (state) => {
    return {
      auth: state.auth,
    };
  };
  const mapDispatchToProps = {
    _authAction: authAction,
  };
  export default connect(mapStateToProps, mapDispatchToProps)(StackContainer);
  