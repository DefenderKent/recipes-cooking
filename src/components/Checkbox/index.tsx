import React from 'react';
import {
    Checkbox as CheckboxUI,
    CheckboxProps as CheckboxPropsUI,
    FormControlLabel,
    FormControlLabelProps,
    Typography,
} from '@material-ui/core';

interface CheckboxProps extends Omit<FormControlLabelProps, 'label' | 'control' | 'className'> {
    textLabel: string;
    classNameContainer?: string;
    classNameTypography?: string;
    checkboxPropsUI: CheckboxPropsUI;
}

export const Checkbox: React.FC<CheckboxProps> = ({
    textLabel,
    classNameContainer,
    classNameTypography,
    checkboxPropsUI,
    ...props
}) => {
    return (
        <FormControlLabel
            {...props}
            control={<CheckboxUI {...checkboxPropsUI} />}
            label={
                <Typography variant="subtitle1" component="span" className={classNameTypography}>
                    {textLabel}
                </Typography>
            }
        />
    );
};
