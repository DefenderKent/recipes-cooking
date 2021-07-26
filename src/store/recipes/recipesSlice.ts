import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../types';
import { RecipesState } from './types';

const initialState: RecipesState = {
    counter: 0,
    isLoading: false,
};
const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        increment(state) {
            state.counter += 1;
        },
        decrement(state) {
            state.counter -= 1;
        },
        loading(state, action) {
            state.isLoading = action.payload;
        },
    },
});

export const { increment, decrement } = recipesSlice.actions;
export const recipes = (state: RootState) => state.recipes;

export default recipesSlice.reducer;
