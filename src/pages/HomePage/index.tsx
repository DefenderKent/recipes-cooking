import React, { useEffect } from 'react';
import { CardRecipe } from '../../organisms';

import { View } from '../../templates';
import { makeStyles } from '@material-ui/core';
import { useAppDispatch } from '../../app/hooks';
import { receiveRecipe, receiveRecipes } from '../../store/recipes/recipesSlice';

const useStyles = makeStyles({
    container: {
        background: 'yellow',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingTop: 60,
    },
    card: {
        marginBottom: 24,
    },
});
export const HomePage: React.FC = () => {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(receiveRecipes());
        dispatch(receiveRecipe(1));
    }, []);
    return (
        <View className={classes.container}>
            <CardRecipe
                title="Test"
                supTitle="supTest"
                image="https://i1.sndcdn.com/artworks-sylkYPAwTp95iXqn-ehwUOA-t500x500.jpg"
                tag={['45 min', '450 kCal', 'Caribbean']}
                className={classes.card}
            />
        </View>
    );
};
