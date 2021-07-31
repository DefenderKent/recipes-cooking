import { Cuisine, Recipe, RecipeShort } from '../../api/types';

export interface Options extends Cuisine {
    isSelected: boolean;
}
export type RecipesState = {
    allItems: {
        items: RecipeShort[];
        filterItems: RecipeShort[];
        filters: Options[];
        calorieRange: number[];
        startRange: number[];
        isLoading: boolean;
    };
    selectedItem: {
        item: Recipe;
        isLoading: boolean;
    };
};
