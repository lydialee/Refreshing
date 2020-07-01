import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "../screens/Home";
import RecipeDetail from "../screens/Recipe/RecipeDetail";
import User from "../screens/Favorites/Favorites";
import Favorites from "../screens/User/User";
import { lightTheme } from "../constants";

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="RecipeDetail" component={RecipeDetail} />
    </HomeStack.Navigator>
  );
};

const FavoritesStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Favorites" component={Favorites} />
      <HomeStack.Screen name="RecipeDetail" component={RecipeDetail} />
    </HomeStack.Navigator>
  );
};

const UserStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="User" component={User} />
      <HomeStack.Screen name="RecipeDetail" component={RecipeDetail} />
    </HomeStack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "";
            if (route.name === "Home") {
              iconName = "ios-aperture";
            } else if (route.name === "Favorites") {
              iconName = "ios-star";
            } else if (route.name === "User") {
              iconName = "ios-contact";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
          showLabel: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Favorites" component={FavoritesStackScreen} />
        <Tab.Screen name="User" component={UserStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
