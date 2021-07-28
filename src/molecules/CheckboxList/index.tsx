import React, { useState } from 'react';

import CSS from 'csstype';
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import { useAppSelector } from '../../store/hooks';
import { recipes, filterRecipe } from '../../store/recipes/recipesSlice';
import { useDispatch } from 'react-redux';

interface CheckboxListProps {
    handleFilters: (checked: any[]) => void;
    style?: CSS.Properties;
    className?: string;
}

export const CheckboxList: React.FC<CheckboxListProps> = ({ handleFilters }) => {
    handleFilters;
    const dispatch = useDispatch();
    const recipe = useAppSelector(recipes);
    const Itdsa = recipe.allItems.items.map((items) => items.cuisine.id);
    const [filters, setFilters] = useState(Itdsa as any[]);

    console.log('filters', filters);

    return (
        <FormGroup>
            {recipe.allItems.items.map((item) => (
                <FormControlLabel
                    key={item.id}
                    control={
                        <Checkbox
                            checked={filters.includes(item.cuisine.id)}
                            onChange={() => {
                                const checkedTest = filters.includes(item.cuisine.id);

                                setFilters((prev) => {
                                    if (checkedTest) {
                                        dispatch(filterRecipe(prev.filter((sc) => sc !== item.cuisine.id)));
                                        return prev.filter((sc) => sc !== item.cuisine.id);
                                    }
                                    dispatch(filterRecipe([...prev, item.cuisine.id]));
                                    return [...prev, item.cuisine.id];
                                });
                            }}
                            name="checkedA"
                        />
                    }
                    label={item.cuisine.title}
                />
            ))}
        </FormGroup>
    );
};
