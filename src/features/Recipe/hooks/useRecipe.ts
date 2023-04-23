import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import {IRecipe} from "../../../api/types";
import Api from "../../../api";
import {immer} from "zustand/middleware/immer";
import {ERecipesCommunications, TRecipesState} from "../namespace";
import {initState} from "../initState";

export const useRecipesStore = create<TRecipesState<IRecipe>>()(devtools(immer((set) => ({
    ...initState,
    fetchRecipes: async () => {
        set(state => {
            state.communications[ERecipesCommunications.fetchRecipes] = true
        })
        const recipes = await Api.instance.recipes.getRecipes()
        set({recipes,filterRecipes:recipes})
        set(state => {
            state.communications[ERecipesCommunications.fetchRecipes] = false
        })
    },
    selectRecipes: (recipes) => set(state => {
        state.currentRecipe = recipes
    }),
    onFilterRecipes: (options) => set(state => {
        console.log("options", options)

        state.recipes = state.recipes.filter((recipe) => {

            const isChooseCuisine = options.cuisines.includes(recipe.id)
            const isWithinRange = options.caloricity[0] <= recipe.caloricity && options.caloricity[1] <= recipe.caloricity

            return isChooseCuisine && isWithinRange
        })

    }),
}))));
