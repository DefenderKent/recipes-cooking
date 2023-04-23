import {ERecipesCommunications} from "./namespace";

export const initState = {
    recipes: [],
    filterRecipes: [],
    currentRecipe: null,
    communications: {
        [ERecipesCommunications.fetchRecipes]: false
    }
}