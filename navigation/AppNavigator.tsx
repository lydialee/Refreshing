import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import RecipeDetail from "../screens/Recipe/RecipeDetail";
import { lightTheme } from "../constants";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer theme={lightTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Hhaha" }}
        />
        <Stack.Screen name="RecipeDetail" component={RecipeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
