export interface HomeStackNavigator extends Record<string, object | undefined> {
  Login: undefined;
  Home: undefined;
  User: undefined;
  Recipe: undefined;
}

export interface RecipeCatogoryType {
  id: number;
  name: string;
  count: number;
  image: string | null;
}

export interface RecipeType {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
  author: string | null;
  likes: number;
  hasDone: number;
  steps: StepType[];
  bannerImage: string | null;
}

export interface StepType {
  id: number;
  name: string;
  description: string;
  image: string | null;
}

export interface UserType {
  id: number;
  name: string;
  avartar: string | null;
  followers: number;
  recipeCount: number;
  hasDoneCount: number;
}
