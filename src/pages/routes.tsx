import { TemplateHome } from 'src/features/Template/Pages';
import React from 'react';
import { Outlet, RouteObject, createBrowserRouter, redirect, useNavigate } from 'react-router-dom';
import entities from 'src/features';

import { RecipeDetail, RecipeHome } from './recipe';
import Filters from '../features/Recipe/Filters';
import { Box, TextField } from '@material-ui/core';
import { search } from 'src/features/Recipe/model';
import { Header } from 'src/components';

export enum ERecipeRoutes {
    recipes = 'recipes',
    recipeDetail = ':id',
    recipeEdit = 'edit',
}

export enum ETemplatesRoutes {
    template = 'templates',
    templateDetail = ':templateId',
    templateDetailEdit = 'edit',
}

//Общий компонент
interface IProps {
    title: string;
}
const Layout: React.FC<IProps> = (props) => {
    const { title } = props;
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate('..', { relative: 'path' })}>Назад</button>
            <h2>{title}</h2>
            {/* Outlet часть навигации */}
            <Outlet />
        </div>
    );
};

const routes: RouteObject[] = [
    {
        path: '/',

        element: (
            <Box margin={10}>
                <Header />
            </Box>
        ),
        children: [
            {
                path: ERecipeRoutes['recipes'],
                element: <Layout title="recipe" />,
                loader: entities.recipes.loaders.initRecipes,
                children: [
                    {
                        index: true,
                        element: <RecipeHome />,
                    },
                    { path: ERecipeRoutes['recipeDetail'], element: <RecipeDetail /> },
                    { path: ERecipeRoutes['recipeEdit'], element: <div>EDIT</div> },
                ],
            },

            {
                path: ETemplatesRoutes['template'],
                element: <Layout title="template" />,
                children: [
                    { index: true, element: <TemplateHome /> },
                    { path: ETemplatesRoutes['templateDetail'], element: <div>templateDetail</div> },
                    { path: ETemplatesRoutes['templateDetailEdit'], element: <div>EDDDIT</div> },
                ],
            },

            { path: '*', element: <div>NotFound</div> },
        ],
    },
];

export const router = createBrowserRouter(routes);
