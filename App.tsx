import React, { useState } from "react";

import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import AppNavigator from "./navigation/AppNavigator";
import { ThemeProvider } from "@shopify/restyle";
import theme from "./theme";

// import all used images
const images = [
  require("./assets/images/users/Lydia.jpg"),
  require("./assets/images/users/Justin.jpg"),
  require("./assets/images/users/Tommy.jpg"),
  require("./assets/images/categories/boba.jpg"),
  require("./assets/images/categories/cocktail.jpg"),
  require("./assets/images/categories/coffee.jpg"),
  require("./assets/images/categories/mocktail.jpg"),
  require("./assets/images/recipes/classicmargarita_banner.jpg"),
  require("./assets/images/recipes/mojito_banner.jpg"),
  require("./assets/images/recipes/painkiller_banner.jpg"),
  require("./assets/images/recipes/tomcollins_banner.jpg"),
  require("./assets/images/recipes/whiskeysour_banner.jpg"),
];

const App = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const handleResourcesAsync: any = async () => {
    // we're caching all the images
    // for better performance on the app

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  };

  return (
    <ThemeProvider theme={theme}>
      {!isLoadingComplete && (
        <AppLoading
          startAsync={handleResourcesAsync}
          onError={(error) => console.warn(error)}
          onFinish={() => setIsLoadingComplete(true)}
        />
      )}
      {isLoadingComplete && <AppNavigator />}
    </ThemeProvider>
  );
};

export default App;
