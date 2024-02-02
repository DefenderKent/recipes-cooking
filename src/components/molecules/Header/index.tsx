import { Box, Button, TextField } from '@material-ui/core';
import { useEffect } from 'react';
import { Navigate, Outlet, redirect, useNavigate } from 'react-router-dom';
import { Typography } from 'src/components/atoms';
import { search } from 'src/features/Recipe/model';

export const Header: React.FC = ({ children }) => {
    return (
        <Box p={'128px 0 60px'}>
            <div>
                <Typography variant="h1">Рецепты от Дедушки Наваро</Typography>
                <Typography variant="subtitle1">Best Recipes for Best People</Typography>
                <Navigate to="/recipes" replace={true} />
                {children}
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </Box>
    );
};
