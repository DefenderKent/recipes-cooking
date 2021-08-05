import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

import { View } from '../../templates';
import { Colors } from '../../style/mainThem';
import Image from '../../assets/image.png';
import { clearFilter, filterRecipe, recipes, searchRecipe, updateOptions } from '../../store/recipes/recipesSlice';
import { FilterModal } from '../../molecules/FilterModal';
import { useAppSelector } from '../../store/hooks';
import { HeaderInput } from './HeaderInput';

interface MainHeaderProps {
    scrolled: number;
    className?: string;
}
const useStyles = makeStyles({
    root: {},
    leftColumn: {
        paddingTop: 128,
        marginRight: 20,
    },

    colorIconButton: {
        color: Colors.shade20,
        border: `1px solid ${Colors.shade20}`,
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
    clearfix: {},
});

export const MainHeader: React.FC<MainHeaderProps> = ({ scrolled }) => {
    scrolled;
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
        console.log('calorieRange', calorieRange);

        dispatch(filterRecipe(calorieRange));
        onToggle();
    };
    const onClear = () => {
        dispatch(clearFilter());
    };

    return (
        <View
            id="global-nav"
            className={`${classes.root} nav ${scrolled > 70 && 'scrolled-nav-mid'} ${scrolled > 100 && 'scrolled-nav'}`}
        >
            <HeaderInput search={search} onToggle={onToggle} />
            {/* <View className={classes.img}></View> */}
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
    );
};
