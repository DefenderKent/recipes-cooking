import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './recipes/recipesSlice';

export const store = configureStore({
    reducer: {
        recipes: recipesReducer,
    },
});
