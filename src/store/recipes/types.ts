import { Cuisine, Recipe, RecipeShort } from '../../api/types';

export type RecipesState = {
    allItems: {
        items: RecipeShort[];
        filterItems: RecipeShort[];
        filters: Cuisine[];
        calorieRange: number[];
        isLoading: boolean;
    };
    selectedItem: {
        item: Recipe;
        isLoading: boolean;
    };
};
