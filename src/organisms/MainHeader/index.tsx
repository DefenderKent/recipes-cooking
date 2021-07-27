import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { View } from '../../templates';
import { Text } from '../../atoms';
import { Typography } from '@material-ui/core';
import { CheckboxList, SearchInput } from '../../molecules';
import IconButton from '@material-ui/core/IconButton';

import { Colors } from '../../style/globalStyles';
import Image from '../../assets/image.png';
import FilterIcon from '@material-ui/icons/FilterList';
import { useDispatch } from 'react-redux';
import { recipes, searchRecipe } from '../../store/recipes/recipesSlice';
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
    const [filters, setFilters] = useState([1, 2] as any);
    const recipesState = useAppSelector(recipes);
    const handleFilters = (filter: any[], category: any) => {
        recipesState.allItems.items;
        console.log('filters', filter, category);
        const newFilters = { ...filters };
        newFilters[category] = filter;
        if (category === 'price') {
        }
        setFilters(newFilters);
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
                            aria-label="delete2"
                            centerRipple={false}
                            onClick={() => console.log('aasas')}
                            color="inherit"
                        >
                            <FilterIcon className={classes.colorIcon} />
                        </IconButton>
                    </View>
                </View>
                <CheckboxList handleFilters={(filters) => handleFilters(filters, 'test')} />
            </View>
            <View className={classes.img}></View>
        </View>
    );
};
