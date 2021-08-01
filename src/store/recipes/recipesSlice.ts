import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getRecipe, getRecipes } from '../../api/recipes';
import { RootState } from '../types';
import { RecipesState } from './types';

export const receiveRecipes = createAsyncThunk('recipes/getRecipes', async () => {
    const { data } = await getRecipes();
    console.log('reciveRecipes:Data', data);
    return data.recipes;
});
export const receiveRecipe = createAsyncThunk('recipes/getRecipe', async (recipeID: number) => {
    const { data } = await getRecipe(recipeID);
    return data.recipe;
});
const initialState: RecipesState = {
    allItems: {
        items: [],
        filterItems: [],
        filters: [],
        calorieRange: [],
        startRange: [],
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
        updateCalorieRange: (state, action: PayloadAction<number[]>) => {
            state.allItems.calorieRange = action.payload;
        },
        clearFilter: (state) => {
            state.allItems.calorieRange = state.allItems.startRange;
            state.allItems.filters.map((item) => (item.isSelected = false));
        },
        filterRecipe: (state, action: PayloadAction<number[]>) => {
            state.allItems.filterItems = state.allItems.items.filter((item) => {
                for (let index = 0; index < state.allItems.filters.length; index++) {
                    const element = state.allItems.filters[index];
                    if (
                        item.cuisine.id === element.id &&
                        element.isSelected &&
                        action.payload[0] <= item.caloricity &&
                        item.caloricity <= action.payload[1]
                    ) {
                        return element;
                    }
                }
            });
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
                state.allItems.startRange = [
                    Math.min.apply(
                        null,
                        action.payload.map((item) => item.caloricity),
                    ),
                    Math.max.apply(
                        null,
                        action.payload.map((item) => item.caloricity),
                    ),
                ];
                state.allItems.calorieRange = state.allItems.startRange;
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
export const { searchRecipe, filterRecipe, updateOptions, updateCalorieRange, clearFilter } = recipesSlice.actions;
export const recipes = (state: RootState) => state.recipes;

export default recipesSlice.reducer;
