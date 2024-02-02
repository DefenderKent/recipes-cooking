import { Box, Button, TextField } from '@material-ui/core';
import { useEffect } from 'react';
import { Navigate, Outlet, redirect, useNavigate } from 'react-router-dom';
import { Typography } from 'src/components/atoms';
import { search } from 'src/features/Recipe/model';

const Filters: React.FC = ({ children, ...props }) => {
    return (
        <TextField
            id="outlined-basic"
            onChange={() => {
                search({
                    query: 'test122',
                    cuisineId: [1, 2, 3],
                    caloriesMax: 1000,
                    caloriesMin: 300,
                });
            }}
            label="Поиск 🔍"
            variant="outlined"
        ></TextField>
    );
};

export default Filters;
