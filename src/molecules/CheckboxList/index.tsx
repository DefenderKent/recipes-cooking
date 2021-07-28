import React, { useState } from 'react';
import CSS from 'csstype';
import { Checkbox, createStyles, FormControlLabel, FormGroup, makeStyles } from '@material-ui/core';

import { useAppSelector } from '../../store/hooks';
import { recipes } from '../../store/recipes/recipesSlice';

interface CheckboxListProps {
    handleFilters: (checked: number[]) => void;
    style?: CSS.Properties;
    className?: string;
}

const useStyles = makeStyles(() =>
    createStyles({
        formContainer: {
            justifyContent: 'space-between',
        },
    }),
);
export const CheckboxList: React.FC<CheckboxListProps> = ({ handleFilters }) => {
    const classes = useStyles();
    const recipe = useAppSelector(recipes);
    const cuisineIDs = recipe.allItems.filters.map((cuisine) => cuisine.id);
    const [checked, setChecked] = useState(cuisineIDs as number[]);

    const handleToggle = (value: number) => {
        const currentIndex = checked.indexOf(value);
        console.log('currentIndex', currentIndex);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
        handleFilters(newChecked);
    };

    return (
        <FormGroup>
            {recipe.allItems.filters.map((item) => (
                <FormControlLabel
                    key={item.id}
                    labelPlacement="start"
                    className={classes.formContainer}
                    control={
                        <Checkbox
                            color="default"
                            checked={checked.indexOf(item.id) !== -1 && true}
                            onChange={() => {
                                handleToggle(item.id);
                            }}
                            name="checkedA"
                        />
                    }
                    label={item.title}
                />
            ))}
        </FormGroup>
    );
};
