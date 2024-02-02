import { createEffect } from 'effector';
import RecipesApi from './recipes-api';
import { IRecipe } from './types';
/**
 * Get singleton Api instance
 * @returns {Api}
 */
export default class Api {
    public static get instance(): Api {
        this._instance = this._instance || new Api();
        return this._instance;
    }
    private static _instance: Api;

    recipes: RecipesApi = new RecipesApi();
}
