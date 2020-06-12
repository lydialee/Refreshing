module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          assets: "../assets",
          constants: "../constants",
          navigation: "../navigation",
          components: "../components",
          screens: "../screens",
        },
      },
    ],
  ],
};
