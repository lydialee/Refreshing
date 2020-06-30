import React from "react";
import { View, Text, Button } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { HomeStackNavigator } from "../../navigation/types";

interface Props {
  navigation: NativeStackNavigationProp<HomeStackNavigator, "Home">;
}

export default function Home({ navigation }: Props) {
  const handleDetail = () => navigation.navigate("RecipeDetail");

  return (
    <View>
      <Text>This is rlly Home Screen!</Text>
      <Button title="Go To Recipe details" onPress={handleDetail} />
    </View>
  );
}
