import React from "react";
import { StyleSheet } from "react-native";
import Home from "./src/screen/home";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Signup from "./src/screen/SignUp";
import Login from "./src/screen/login";
import Welcome from "./src/screen/welcome";
import ForgotPassword from "./src/screen/forgotPassword";
import { Colors } from "./src/color/color";
import { StatusBar } from "expo-status-bar";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="forgot" component={ForgotPassword} />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
