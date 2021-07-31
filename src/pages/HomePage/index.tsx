import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import { View } from '../../templates';
import { CardRecipe } from '../../organisms';
import { receiveRecipes, recipes } from '../../store/recipes/recipesSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { hoursAndMinutes } from '../../utils/hoursAndMinutes';
import { MainRoutes } from '../../navigation/routes';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingTop: 660,
    },
    card: {
        marginRight: 12,
        marginBottom: 24,
        '&:nth-child(3n)': {
            marginRight: 0,
        },
        '&:nth-last-child(-n + 3):nth-child(3n + 1)~ card': {
            marginRight: 0,
        },
    },
    navLink: {
        textDecoration: 'none',
        display: 'flex',
    },
});
export const HomePage: React.FC = () => {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const recipe = useAppSelector(recipes);
    useEffect(() => {
        dispatch(receiveRecipes());
    }, []);

    return (
        <View className={classes.container}>
            {recipe.allItems.filterItems.map((item) => (
                <NavLink className={classes.navLink} to={`${MainRoutes.recipe + item.id}`}>
                    <CardRecipe
                        key={item.id}
                        title={item.title}
                        supTitle={item.description}
                        image={item.thumbnail}
                        tag={[`${hoursAndMinutes(item.cookTime)}`, `${item.caloricity} kCal`, `${item.cuisine.title}`]}
                        className={classes.card}
                    />
                </NavLink>
            ))}
        </View>
    );
};
