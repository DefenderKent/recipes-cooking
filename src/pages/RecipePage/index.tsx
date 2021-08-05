import { makeStyles, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Carousel from 'react-material-ui-carousel';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { View } from '../../templates/View';

import { CountBullet, СomplexityOfRecipes } from '../../molecules';
import { receiveRecipe, recipes } from '../../store/recipes/recipesSlice';
import { useAppSelector } from '../../store/hooks';
import { hoursAndMinutes } from '../../utils/hoursAndMinutes';

const useStyles = makeStyles({
    container: { paddingTop: 635 },
    containerDescr: {
        flex: 1,
        marginRight: 20,
    },
    containerSlider: {
        flex: 1,
    },
    infoLabel: {
        alignItems: 'center',
        paddingTop: 16,
        marginBottom: 30,
    },
    ingredients: {
        justifyContent: 'space-between',

        paddingTop: 16,
        marginBottom: 30,
    },
    li: {
        marginLeft: 30,
        marginBottom: 16,
        fontSize: 16,
    },
    labelElement: {
        marginRight: 33,
    },
    title: {
        marginBottom: 16,
    },
    countBullet: {
        alignItems: 'start',
        marginBottom: 12,
    },
    text: {
        marginRight: 8,
    },
    slider: {},
});
export const RecipePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const recipe = useAppSelector(recipes);
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(receiveRecipe(Number(id)));
    }, []);
    return (
        <View className={classes.container} justify="space-between">
            <View className={classes.containerDescr} direction="column">
                <Typography className={classes.title} variant="inherit" component="h2">
                    {recipe.selectedItem.isLoading ? <Skeleton /> : recipe.selectedItem.item.title}
                </Typography>
                <Typography variant="inherit" component="h6">
                    {recipe.selectedItem.item.description}
                </Typography>
                <View className={classes.infoLabel}>
                    {
                        <СomplexityOfRecipes
                            difficulty={recipe.selectedItem.item.difficulty}
                            className={classes.labelElement}
                        />
                    }
                    <СomplexityOfRecipes
                        difficulty="time"
                        title={hoursAndMinutes(recipe.selectedItem.item.cookTime)}
                        className={classes.labelElement}
                    />
                    <СomplexityOfRecipes
                        difficulty="kCal"
                        title={`${recipe.selectedItem.item.caloricity} kCal`}
                        className={classes.labelElement}
                    />
                    <СomplexityOfRecipes difficulty="cuisine" title={recipe.selectedItem.item.cuisine.title} />
                </View>
                <View className={classes.ingredients} direction="column">
                    <Typography className={classes.title} variant="inherit" component="h3">
                        Ingredients
                    </Typography>
                    <ul>
                        {recipe.selectedItem.item.ingredients.map((item) => (
                            <li className={classes.li}>{item}</li>
                        ))}
                    </ul>
                </View>
                <View className={classes.ingredients} direction="column">
                    <Typography className={classes.title} variant="inherit" component="h3">
                        Instructions
                    </Typography>
                    <View direction="column">
                        {recipe.selectedItem.item.instructions.map((item, index) => (
                            <View className={classes.countBullet}>
                                <CountBullet className={classes.text} count={index + 1} />
                                <Typography variant="inherit" component="h6">
                                    {item}
                                </Typography>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
            <View className={classes.containerSlider}>
                {recipe.selectedItem.isLoading ? (
                    <Skeleton variant="rect" width={'100%'} height="auto" />
                ) : (
                    <Carousel className={classes.slider} navButtonsAlwaysInvisible>
                        {recipe.selectedItem.item.images.map((item) => (
                            <img src={item} alt="BigImg" width={'100%'} />
                        ))}
                    </Carousel>
                )}
            </View>
        </View>
    );
};
