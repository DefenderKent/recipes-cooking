import React from 'react';
import CSS from 'csstype';
import { FormGroup } from '@material-ui/core';
import { Checkbox } from 'src/components';
import { Cuisine } from '../../../api/types';
import { Controller } from 'react-hook-form';

interface CheckboxListProps {
    style?: CSS.Properties;
    className?: string;
    options?: Cuisine[];
    control: any;
    setValue: any;
}

export const CheckboxList: React.FC<CheckboxListProps> = ({ control, options }) => {
    const [value, setValue] = React.useState(options?.map((s) => s.id) || []);
    return null
};
