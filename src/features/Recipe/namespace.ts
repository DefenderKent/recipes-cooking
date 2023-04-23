export enum ERecipesCommunications {
    fetchRecipes = 'fetchRecipes',
}

export type TRecipesCommunications = {
    [key in ERecipesCommunications]: boolean;
};

export  type TRecipesOption = { cuisines: number[], caloricity: number[] }
export type TRecipesState<T> = {
    recipes: T[]
    filterRecipes:T[];
    currentRecipe: T | null
    fetchRecipes: () => Promise<void>;
    selectRecipes: (recipes: T) => void;
    onFilterRecipes: (options:TRecipesOption)=>void
    communications: TRecipesCommunications
}