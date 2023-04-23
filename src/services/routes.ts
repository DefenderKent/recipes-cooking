
import {Home, RecipeDetail} from "../features/Recipe/Pages";
import React from "react";


export enum MainRoutes {
    home = '/',
    recipe = '/detail/',
}

export const mainRoutes: { path: string; Component: React.FC }[] = [
    { path: MainRoutes.home, Component: Home },
    { path: MainRoutes.recipe + ':id', Component: RecipeDetail },
];
