import { HomePage, RecipePage } from '../pages';

export enum MainRoutes {
    home = '/',
    recipe = '/detail_',
}

export const mainRoutes: { path: string; Component: React.FC }[] = [
    { path: MainRoutes.home, Component: HomePage },
    { path: MainRoutes.recipe + ':id', Component: RecipePage },
];
