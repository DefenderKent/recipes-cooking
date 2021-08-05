import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import { CardRecipe } from '../../organisms';
import { receiveRecipes, recipes } from '../../store/recipes/recipesSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { hoursAndMinutes } from '../../utils/hoursAndMinutes';
import { MainRoutes } from '../../navigation/routes';

const useStyles = makeStyles({
    container: {
        paddingTop: 635,
        paddingLeft: 2,
        paddingRight: 2,
    },

    navLink: {},
});
export const HomePage: React.FC = () => {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const recipe = useAppSelector(recipes);
    useEffect(() => {
        dispatch(receiveRecipes());
    }, []);

    return (
        <Grid className={classes.container} container spacing={3}>
            {recipe.allItems.filterItems.map((item) => (
                <Grid item xs={4} key={item.id}>
                    <NavLink className={classes.navLink} to={`${MainRoutes.recipe + item.id}`}>
                        <CardRecipe
                            title={item.title}
                            supTitle={item.description}
                            image={item.thumbnail}
                            tag={[
                                `${hoursAndMinutes(item.cookTime)}`,
                                `${item.caloricity} kCal`,
                                `${item.cuisine.title}`,
                            ]}
                        />
                    </NavLink>
                </Grid>
            ))}
        </Grid>
    );
};
