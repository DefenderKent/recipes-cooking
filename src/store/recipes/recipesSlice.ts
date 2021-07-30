import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getRecipe, getRecipes } from '../../api/axios/recipes';
import { RootState } from '../types';
import { RecipesState } from './types';
export const receiveRecipes = createAsyncThunk('recipes/getRecipes', async () => {
    const { data } = await getRecipes();
    console.log('reciveRecipes:Data', data);
    return data.recipes;
});
export const receiveRecipe = createAsyncThunk('recipes/getRecipe', async (recipeID: number) => {
    const { data } = await getRecipe(recipeID);
    console.log('reciveRecipes:Data', data);
    return data.recipe;
});
const initialState: RecipesState = {
    allItems: {
        items: [],
        filterItems: [],
        filters: [],
        calorieRange: [],
        isLoading: false,
    },
    selectedItem: {
        item: {
            id: 0,
            title: '',
            description: '',
            caloricity: 0,
            thumbnail: '',
            images: [],
            cuisine: { id: 0, title: '' },
            cookTime: 0,
            difficulty: 'easy',
            ingredients: [],
            instructions: [],
        },
        isLoading: false,
    },
};
// recipe.allItems.items.filter((item) => item.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        updateOptions: (state, action: PayloadAction<{ id: number; isSelected: boolean }>) => {
            state.allItems.filters = state.allItems.filters.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, isSelected: action.payload.isSelected };
                }
                return item;
            });
        },
        filterRecipe: (state, action) => {
            console.log('filterRecipe:', action.payload);

            if (action.payload.filters.length === 1) {
                state.allItems.filterItems = state.allItems.items;
            }

            state.allItems.filterItems = state.allItems.items.filter(
                (item) =>
                    action.payload.filters.includes(item.cuisine.id) &&
                    action.payload.range[0] <= item.caloricity &&
                    item.caloricity <= action.payload.range[1],
            );
        },
        searchRecipe: (state, action) => {
            if (action.payload === '') {
                state.allItems.filterItems = state.allItems.items;
            }
            state.allItems.filterItems = state.allItems.items.filter(
                (item) => item.title.toLocaleLowerCase().indexOf(action.payload.toLocaleLowerCase()) > -1,
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(receiveRecipes.pending, (state) => {
                state.allItems.isLoading = true;
            })
            .addCase(receiveRecipes.fulfilled, (state, action) => {
                state.allItems.filterItems = action.payload;
                state.allItems.items = action.payload;
                (state.allItems.filters = action.payload
                    .map((item) => {
                        return { ...item.cuisine, isSelected: true };
                    })
                    .filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i)),
                    (state.allItems.isLoading = false);
                state.allItems.calorieRange = [
                    Math.min.apply(
                        null,
                        action.payload.map((item) => item.caloricity),
                    ),
                    Math.max.apply(
                        null,
                        action.payload.map((item) => item.caloricity),
                    ),
                ];
            })
            .addCase(receiveRecipe.pending, (state) => {
                state.selectedItem.isLoading = true;
            })
            .addCase(receiveRecipe.fulfilled, (state, action) => {
                state.selectedItem.isLoading = false;

                state.selectedItem.item = action.payload;
            });
    },
});
export const { searchRecipe, filterRecipe, updateOptions } = recipesSlice.actions;
export const recipes = (state: RootState) => state.recipes;

export default recipesSlice.reducer;
