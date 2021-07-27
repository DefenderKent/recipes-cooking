import { Recipe, RecipeShort } from '../../api/types';

export type RecipesState = {
    allItems: {
        items: RecipeShort[];
        filterItems: RecipeShort[];
        isLoading: boolean;
    };
    selectedItem: {
        item: Recipe;
        isLoading: boolean;
    };
};
