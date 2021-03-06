import { axios } from '../axios';
import { RootObject } from '../types';

export const getRecipe = (recipeID: number) => {
    return axios.get<RootObject>(`detail_${recipeID}.json`);
};
