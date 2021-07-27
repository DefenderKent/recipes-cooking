import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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
                state.allItems.isLoading = false;
                state.allItems.filterItems = action.payload;
                state.allItems.items = action.payload;
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
export const { searchRecipe } = recipesSlice.actions;
export const recipes = (state: RootState) => state.recipes;

export default recipesSlice.reducer;
