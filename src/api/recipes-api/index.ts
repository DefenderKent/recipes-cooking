import { axios } from '../axios';
import { IGetFilters, IRecipe } from '../types';

export default class RecipesApi {
    async getRecipe(recipeID: number) {
        const response = await axios.get<IRecipe>(`/recipes/${recipeID}`);
        return response.data;
    }

    async getRecipes() {
        const response = await axios.get<IRecipe[]>('/recipes');
        return response.data;
    }
    async getFilters(options: IGetFilters) {
        const response = await axios.post<IRecipe[]>('/recipes/filter', options);
        return response.data;
    }
}
