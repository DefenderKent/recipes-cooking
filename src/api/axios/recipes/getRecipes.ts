import { axios } from '..';
import { RecipeShortObject } from '../../types';

export const getRecipes = () => {
    return axios.get<RecipeShortObject>('list.json');
};
