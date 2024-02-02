import { attach, createEffect, createEvent, createStore, sample } from 'effector';
import { useEvent } from 'effector-react';
import { IGetFilters, IRecipe } from 'src/api/types';
import Api from 'src/api';

export const recipesLoadFx = createEffect<void, IRecipe[], Error>(async () => {
    const res = await Api.instance.recipes.getRecipes();
    return res;
});
export const searchLoadFx = createEffect<IGetFilters, IRecipe[], Error>(async (payload) => {
    const res = await Api.instance.recipes.getFilters(payload);
    return res;
});

export const $recipe = createStore<IRecipe[]>([])
    .on(recipesLoadFx.doneData, (_, recipes) => recipes)
    .on(searchLoadFx.doneData, (_, recipes) => recipes);

export const pageMounted = createEvent();

export const search = createEvent<IGetFilters>();

sample({
    clock: search,
    target: [searchLoadFx],
});

sample({
    clock: pageMounted,
    target: [recipesLoadFx],
});
