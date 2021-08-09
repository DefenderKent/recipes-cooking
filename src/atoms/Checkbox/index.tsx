import React from 'react';
import CSS from 'csstype';
import {
    Checkbox as CheckboxUI,
    CheckboxProps as CheckboxPropsUI,
    FormControlLabel,
    FormControlLabelProps,
    makeStyles,
    Typography,
} from '@material-ui/core';
import { Colors } from '../../style/paletteOptions';

interface CheckboxProps extends Omit<FormControlLabelProps, 'label' | 'control' | 'className'> {
    textLabel: string;
    style?: CSS.Properties;
    classNameContainer?: string;
    classNameTypography?: string;
    checkboxPropsUI: CheckboxPropsUI;
}

const useStyles = makeStyles({
    formContainer: {
        padding: '4px 0',
        justifyContent: 'space-between',
        borderBottom: `1px solid ${Colors.grey2}`,
    },
});
export const Checkbox: React.FC<CheckboxProps> = ({
    textLabel,
    classNameContainer,
    classNameTypography,
    checkboxPropsUI,
    ...props
}) => {
    const classes = useStyles();
    return (
        <FormControlLabel
            {...props}
            className={`${classes.formContainer} ${classNameContainer}`}
            control={<CheckboxUI {...checkboxPropsUI} />}
            label={
                <Typography variant="subtitle1" component="span" className={classNameTypography}>
                    {textLabel}
                </Typography>
            }
        />
    );
};
