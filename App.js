import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import  CustomDrawer  from './navigation/CustomDrawer'

import {createStore ,applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./stores/rootReducer";
import SplashScreen from 'react-native-splash-screen'

import {
    Home,
    OnBoarding,
    SignIn,
    SignUp,
    ForgotPassword,
    Otp
} from './screens'

const Stack = createStackNavigator();
const store = configureStore(
    {reducer:
        rootReducer
    },
        applyMiddleware(thunk)
    
)

const App = () => {
    React.useEffect(() => {
        SplashScreen.hide();
    }, [])
    
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName={'OnBoarding'}
                >
                <Stack.Screen
                    name="Home"
                    component={CustomDrawer}
                />

                <Stack.Screen
                    name="OnBoarding"
                    component={OnBoarding}
                />

                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                />

                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                />

                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                />

                <Stack.Screen
                    name="Otp"
                    component={Otp}
                />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App