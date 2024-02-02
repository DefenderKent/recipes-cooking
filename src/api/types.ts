import { Difficulty } from '../style/mainThem';

export interface Cuisine {
    id: number;
    title: string;
}

export interface IRecipe {
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

export type RecipeShort = Omit<IRecipe, 'difficulty' | 'ingredients' | 'instructions'>;

export interface IGetFilters {
    query: string;
    cuisineId: Cuisine['id'][];
    caloriesMax: number;
    caloriesMin: number;
}
