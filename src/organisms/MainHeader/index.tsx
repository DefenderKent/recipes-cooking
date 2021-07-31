import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { View } from '../../templates';
import { Text } from '../../atoms';
import { Typography } from '@material-ui/core';
import { SearchInput } from '../../molecules';
import IconButton from '@material-ui/core/IconButton';

import { Colors } from '../../style/globalStyles';
import Image from '../../assets/image.png';
import FilterIcon from '@material-ui/icons/FilterList';
import { useDispatch } from 'react-redux';
import { clearFilter, filterRecipe, recipes, searchRecipe, updateOptions } from '../../store/recipes/recipesSlice';
import { FilterModal } from '../../molecules/FilterModal';
import { useAppSelector } from '../../store/hooks';

interface MainHeaderProps {
    className?: string;
}
const useStyles = makeStyles({
    root: {
        justifyContent: 'center',
        height: 292,
        width: 'max-content',
    },
    leftColumn: {
        paddingTop: 128,
        marginRight: 20,
    },

    colorIconButton: {
        color: Colors.shade20,
    },
    colorIcon: {
        color: Colors.base0,
    },
    img: {
        backgroundImage: `url(${Image})`,
        backgroundPosition: 'left',
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
        width: 814,
        display: 'flex',
        justifyContent: 'space-between',
    },
    inputContainer: {
        paddingTop: 32,
    },
    input: {
        marginRight: 16,
    },
});

export const MainHeader: React.FC<MainHeaderProps> = ({ className }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const search = (query: string) => dispatch(searchRecipe(query));
    const [isVisible, setVisible] = useState(false);
    const recipe = useAppSelector(recipes);

    const onToggle = () => {
        setVisible((prev) => !prev);
    };
    const handleOptions = (id: number, isSelected: boolean) => {
        dispatch(updateOptions({ id, isSelected: !isSelected }));
    };
    const [calorieRange, setCalorieRange] = React.useState<number[]>(recipe.allItems.startRange);

    const handleChange = (newValue: number[]) => {
        setCalorieRange(newValue as number[]);
    };
    const onFilterRecipe = (calorieRange: number[]) => {
        dispatch(filterRecipe(calorieRange));
        onToggle();
    };
    const onClear = () => {
        dispatch(clearFilter());
    };
    return (
        <View className={`${classes.root} ${className}`}>
            <View className={classes.leftColumn}>
                <View direction="column">
                    <Typography variant="inherit" component="h1">
                        Air Recipes
                    </Typography>
                    <Text color={Colors.shade50}>Best Recipes for Best People</Text>
                    <View className={classes.inputContainer}>
                        <SearchInput className={classes.input} search={search} />
                        <IconButton
                            className={classes.colorIconButton}
                            aria-label="delete"
                            centerRipple={false}
                            onClick={onToggle}
                            color="inherit"
                        >
                            <FilterIcon className={classes.colorIcon} />
                        </IconButton>
                    </View>
                </View>
                <FilterModal
                    options={recipe.allItems.filters}
                    handleOptions={handleOptions}
                    handleCalorieRange={(props) => handleChange(props)}
                    isVisible={isVisible}
                    onToggle={onToggle}
                    calorieRange={calorieRange.length ? calorieRange : recipe.allItems.startRange}
                    startRange={recipe.allItems.startRange}
                    filterRecipe={onFilterRecipe}
                    onClear={onClear}
                />
            </View>
            <View className={classes.img}></View>
        </View>
    );
};
