import RecipesApi from "./RecipesApi";

export default class Api {
    public static get instance(): Api {
        this._instance = this._instance || new Api();
        return this._instance;
    }
    private static _instance: Api;

    recipes = new RecipesApi()
}