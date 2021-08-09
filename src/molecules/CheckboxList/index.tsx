import React from 'react';
import CSS from 'csstype';
import { FormGroup } from '@material-ui/core';

import { Options } from '../../store/recipes/types';
import { Checkbox } from '../../atoms';

interface CheckboxListProps {
    handleOptions: (id: number, isSelected: boolean) => void;
    style?: CSS.Properties;
    className?: string;
    options: Options[];
}

export const CheckboxList: React.FC<CheckboxListProps> = ({ handleOptions, options }) => {
    return (
        <FormGroup>
            {options.map((item) => {
                const toggle = () => handleOptions(item.id, item.isSelected);
                return (
                    <Checkbox
                        key={item.id}
                        labelPlacement="start"
                        textLabel={item.title}
                        checkboxPropsUI={{
                            onChange: toggle,
                            color: 'default',
                            checked: item.isSelected,
                            name: `Checkbox–${item.id}`,
                        }}
                    />
                );
            })}
        </FormGroup>
    );
};
