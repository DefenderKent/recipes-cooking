import React, {useEffect} from 'react';
import {CircularProgress, IconButton} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import {recipes as recipesOld} from "../../../../store/recipes/recipesSlice";
import {useAppSelector} from "../../../../store/hooks";
import {CardRecipe} from "../../../../organisms";
import {hoursAndMinutes} from "../../../../utils/hoursAndMinutes";
import {MainRoutes} from "src/services/routes";
import {useRecipesStore} from "src/features/Recipe/hooks";
import {useCommunication} from "src/features/Recipe/hooks/useCommunication";
import {HeaderWrap} from "../../../../organisms/HeaderWrap";
import {FilterModal} from "../../../../molecules/FilterModal";
import {SearchInput} from "../../../../molecules";
import FilterIcon from '@material-ui/icons/FilterList';

import {useClasses} from "./styles";


const Home: React.FC = () => {
    const classes = useClasses();

    const recipe = useAppSelector(recipesOld);
    const recipesStore = useRecipesStore()
    const isLoading = useCommunication('fetchRecipes')

    useEffect(() => {
        recipesStore.fetchRecipes()
    }, []);
    console.debug("recipes", recipe)
    const [isHidden, setHidden] = React.useState(false);
    const toggleModal = React.useCallback(() => {
        setHidden((prev) => !prev)
    }, [])
    return (
        <>
            <HeaderWrap title={"Air Recipes"} subtitle={"Best Recipes for Best People"}>
                <div className={classes.inputContainer}>
                    <SearchInput className={classes.input} search={() => ({})}/>
                    <IconButton
                        className={classes.colorIconButton}
                        aria-label="delete"
                        centerRipple={false}
                        onClick={toggleModal}
                        color="inherit"
                    >
                        <FilterIcon className={classes.colorIcon}/>
                    </IconButton>
                </div>
                <div className={classes.img}></div>
                <FilterModal
                    isVisible={isHidden}
                    onToggle={toggleModal}
                />
            </HeaderWrap>
            <Grid className={classes.container} container spacing={3}>
                {isLoading ? <CircularProgress/> : null}
                {recipesStore.filterRecipes?.map((item) => (
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
        </>
    );
};

export default Home