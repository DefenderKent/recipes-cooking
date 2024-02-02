import React, { useEffect } from 'react';
import { Outlet, useLocation, useParams, useSearchParams } from 'react-router-dom';

const RecipeDetail: React.FC = () => {
    const { id, ...params } = useParams<'id'>();
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page');
    const getPatams = (searchM: URLSearchParams) => {
        const params = {} as Record<string, string>;
        new URLSearchParams(searchM).forEach((value, key) => {
            params[key] = value;
        });
        return params;
    };

    const psss = getPatams(searchParams);

    console.debug('companId searchParams', searchParams.get('companId'));
    console.debug('RecipeDetail params', params);
    console.debug('RecipeDetail psss', psss);

    return (
        <div id="recipe">
            <h2>RecipeDetail {id}</h2>
        </div>
    );
};

export default RecipeDetail;
