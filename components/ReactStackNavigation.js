import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./Login";
import { Home } from "./Home";

const Stack = createNativeStackNavigator();
const ReactNavigation = () => {
  const handleButtonPress = () => {
    console.log("Button Pressed");
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "pink",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerLeft: () => (
              <Button onPress={handleButtonPress} title="login" />
            ),
            headerRight: () => (
              // <Button onPress={handleButtonPress} title="signup" />
              // <BtnComponent />
              <TextInput placeholder="Enter your name" />
            ),
            title: "User Login",
            headerStyle: {
              backgroundColor: "red",
            },
            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ReactNavigation;

const BtnComponent = () => {
  return <Button title="SignUp" />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
