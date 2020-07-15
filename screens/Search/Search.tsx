import React from "react";
import { Button, View, Text } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/native-stack";
import { HomeStackNavigator } from "../../navigation/types";

interface Props {
  navigation: NativeStackNavigationProp<HomeStackNavigator, "Home">;
}

const Search = ({ navigation }: Props) => {
  const handleSearch = () => navigation.navigate("SearchResult");

  return (
    <View>
      <Text>This is Search Page!</Text>
      <Button title="Go To Search Results" onPress={handleSearch} />
    </View>
  );
};

export default Search;
