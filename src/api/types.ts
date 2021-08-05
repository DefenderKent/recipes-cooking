import { Difficulty } from '../style/mainThem';

export interface Cuisine {
    id: number;
    title: string;
}

export interface Recipe {
    id: number;
    title: string;
    description: string;
    caloricity: number;
    thumbnail: string;
    images: string[];
    cuisine: Cuisine;
    cookTime: number;
    difficulty: keyof typeof Difficulty;
    ingredients: string[];
    instructions: string[];
}

export interface RootObject {
    recipe: Recipe;
}

export type RecipeShort = Omit<Recipe, 'difficulty' | 'ingredients' | 'instructions'>;

export interface RecipeShortObject {
    recipes: RecipeShort[];
}
