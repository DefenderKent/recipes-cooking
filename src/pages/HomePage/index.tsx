import React, { useEffect } from 'react';
import { CardRecipe } from '../../organisms';

import { View } from '../../templates';
import { makeStyles } from '@material-ui/core';

import { receiveRecipe, receiveRecipes, recipes } from '../../store/recipes/recipesSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { hoursAndMinutes } from '../../utils/hoursAndMinutes';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingTop: 60,
    },
    card: {
        marginRight: 18,
        marginBottom: 24,
        '&:nth-child(3n)': {
            marginRight: 0,
        },
        '&:nth-last-child(-n + 3):nth-child(3n + 1)~ card': {
            marginRight: 0,
        },
    },
});
export const HomePage: React.FC = () => {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const recipe = useAppSelector(recipes);
    useEffect(() => {
        dispatch(receiveRecipes());
        dispatch(receiveRecipe(1));
    }, []);

    return (
        <View className={classes.container}>
            {recipe.allItems.filterItems.map((item) => (
                <CardRecipe
                    key={item.id}
                    title={item.title}
                    supTitle={item.description}
                    image={item.thumbnail}
                    tag={[`${hoursAndMinutes(item.cookTime)}`, `${item.caloricity} kCal`, `${item.cuisine.title}`]}
                    className={classes.card}
                />
            ))}
        </View>
    );
};
