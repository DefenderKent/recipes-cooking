import React, { useState } from 'react';

import CSS from 'csstype';
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import { useAppSelector } from '../../store/hooks';
import { recipes } from '../../store/recipes/recipesSlice';

interface CheckboxListProps {
    handleFilters: (checked: any[]) => void;
    style?: CSS.Properties;
    className?: string;
}

export const CheckboxList: React.FC<CheckboxListProps> = ({ handleFilters }) => {
    handleFilters;
    const recipe = useAppSelector(recipes);
    const Itdsa = recipe.allItems.items.map((items) => items.cuisine.id);
    const [filters, setFilters] = useState(Itdsa as any[]);
    const [filters2, setFilters2] = useState(recipe.allItems.items as any[]);

    console.log('filters2', filters2);

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
                                console.log('checkedTest:', checkedTest);
                                const data = filters2.filter((test) => test.cuisine.id !== item.cuisine.id);
                                setFilters2(data);
                                setFilters((prev) =>
                                    checkedTest
                                        ? prev.filter((sc) => sc !== item.cuisine.id)
                                        : [...prev, item.cuisine.id],
                                );
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
