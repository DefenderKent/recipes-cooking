import {makeStyles, Typography} from '@material-ui/core';
import React, {useEffect} from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Carousel from 'react-material-ui-carousel';
import {useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {useAppSelector} from "../../../../store/hooks";
import {CountBullet} from "../../../../components";
import {receiveRecipe, recipes} from "../../../../store/recipes/recipesSlice";
import {СomplexityOfRecipes} from "../../../../molecules";
import {hoursAndMinutes} from "../../../../utils/hoursAndMinutes";




const useStyles = makeStyles({
    // container: { paddingTop: 635 },
    container: {paddingTop: 0},
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
 const RecipeDetail: React.FC = () => {
    const {id} = useParams<{ id: string }>();
    const recipe = useAppSelector(recipes);
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(receiveRecipe(Number(id)));
    }, []);
    return (
        <div className={classes.container}>
            <div className={classes.containerDescr}>
                <Typography className={classes.title} variant="h2">
                    {recipe.selectedItem.isLoading ? <Skeleton/> : recipe.selectedItem.item.title}
                </Typography>
                <Typography variant="inherit" component="h6">
                    {recipe.selectedItem.item.description}
                </Typography>
                <div className={classes.infoLabel}>
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
                    <СomplexityOfRecipes difficulty="cuisine" title={recipe.selectedItem.item.cuisine.title}/>
                </div>
                <div className={classes.ingredients}>
                    <Typography className={classes.title} variant="inherit" component="h3">
                        Ingredients
                    </Typography>
                    <ul>
                        {recipe.selectedItem.item.ingredients.map((item) => (
                            <li className={classes.li}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className={classes.ingredients}>
                    <Typography className={classes.title} variant="inherit" component="h3">
                        Instructions
                    </Typography>
                    <div>
                        {recipe.selectedItem.item.instructions.map((item, index) => (
                            <div className={classes.countBullet}>
                                <CountBullet className={classes.text} count={index + 1}/>
                                <Typography variant="inherit" component="h6">
                                    {item}
                                </Typography>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={classes.containerSlider}>
                {recipe.selectedItem.isLoading ? (
                    <Skeleton variant="rect" width={'100%'} height="auto"/>
                ) : (
                    <Carousel className={classes.slider} navButtonsAlwaysInvisible>
                        {recipe.selectedItem.item.images.map((item) => (
                            <img src={item} alt="BigImg" width={'100%'}/>
                        ))}
                    </Carousel>
                )}
            </div>
        </div>
    );
};

 export  default  RecipeDetail