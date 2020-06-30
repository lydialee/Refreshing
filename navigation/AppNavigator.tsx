import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import RecipeDetail from "../screens/Recipe/RecipeDetail";
import User from "../screens/Favorites/Favorites";
import Favorites from "../screens/User/User";
import { lightTheme } from "../constants";

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="RecipeDetail" component={RecipeDetail} />
    </HomeStack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <>
      {/* <NavigationContainer theme={lightTheme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Hhaha" }}
          />
          <Stack.Screen name="RecipeDetail" component={RecipeDetail} />
        </Stack.Navigator>
      </NavigationContainer> */}
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Favorites" component={Favorites} />
          <Tab.Screen name="User" component={User} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
