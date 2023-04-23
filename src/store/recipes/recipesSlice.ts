import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import Api from '../../api';
import { RootState } from '../types';
import { RecipesState } from './types';

export const receiveRecipes = createAsyncThunk('RecipesApi/getRecipes', async () => {
    const recipes = await Api.instance.recipes.getRecipes()
    console.log('reciveRecipes:Data', recipes);
    return  recipes
});
export const receiveRecipe = createAsyncThunk('RecipesApi/getRecipe', async (recipeID: number) => {
    const recipe  = await  Api.instance.recipes.getRecipe(recipeID)
    return recipe;
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
            state.allItems.calorieRange = action.payload;
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
                state.allItems
                console.debug("action",action.payload)


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
