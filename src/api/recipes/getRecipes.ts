import { axios } from '../axios';
import { RecipeShortObject } from '../types';

export const getRecipes = () => {
    return axios.get<RecipeShortObject>('list.json');
};
