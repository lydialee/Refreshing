import { RecipeType, UserType, RecipeCatogoryType } from "../navigation/types";

const categories: RecipeCatogoryType[] = [
  {
    id: 1,
    name: "cocktail",
    count: 50,
    image: "../assets/images/categories/cocktail.jpg",
  },
  {
    id: 2,
    name: "mocktail",
    count: 98,
    image: "../assets/images/categories/mocktail.jpg",
  },
  {
    id: 3,
    name: "boba",
    count: 28,
    image: "../assets/images/categories/boba.jpg",
  },
  {
    id: 4,
    name: "coffee",
    count: 123,
    image: "../assets/images/categories/coffee.jpg",
  },
];

const recipes: RecipeType[] = [
  {
    id: 1,
    title: "Pain killer",
    description: "This is Pain killer! yay",
    tags: ["alcohol", "tiki", "sweet", "rum"],
    category: "cocktail",
    author: "Lydia",
    likes: 10000,
    hasDone: 57,
    steps: [],
    bannerImage: "../assets/images/recipes/painkiller-banner.jpg",
  },
  {
    id: 2,
    title: "Whiskey Sour",
    description: "This is Whiskey Sour! yay",
    tags: ["alcohol", "sour", "eggwhites", "rum"],
    category: "cocktail",
    author: "Lydia",
    likes: 10000,
    hasDone: 57,
    steps: [],
    bannerImage: "../assets/images/recipes/whiskeysour_banner.jpg",
  },
  {
    id: 3,
    title: "Classic Margarita",
    description: "This is Classic Margarita! yay",
    tags: ["alcohol", "tiki", "sweet", "rum"],
    category: "cocktail",
    author: "Lydia",
    likes: 10000,
    hasDone: 57,
    steps: [],
    bannerImage: "../assets/images/recipes/classicmargarita_banner.jpg",
  },
  {
    id: 4,
    title: "Tom Collins",
    description: "This is Tom Collins! yay",
    tags: ["alcohol", "tiki", "sweet", "rum"],
    category: "cocktail",
    author: "Lydia",
    likes: 10000,
    hasDone: 57,
    steps: [],
    bannerImage: "../assets/images/recipes/tomcollins_banner.jpg",
  },
  {
    id: 5,
    title: "Mojito",
    description: "This is Mojito! yay",
    tags: ["alcohol", "tiki", "sweet", "rum"],
    category: "cocktail",
    author: "Lydia",
    likes: 10000,
    hasDone: 57,
    steps: [],
    bannerImage: "../assets/images/recipes/mojito_banner.jpg",
  },
];

const users: UserType[] = [
  {
    id: 1,
    name: "Lydia",
    avartar: "../assets/images/users/Lydia.jpg",
    followers: 1000,
    recipeCount: 209,
    hasDoneCount: 15,
  },
  {
    id: 2,
    name: "Justin",
    avartar: "../assets/images/users/Justin.jpg",
    followers: 1000,
    recipeCount: 209,
    hasDoneCount: 15,
  },
  {
    id: 3,
    name: "Tommy",
    avartar: "../assets/images/users/Tommy.jpg",
    followers: 1000,
    recipeCount: 209,
    hasDoneCount: 15,
  },
];

export { categories, recipes, users };
