import React from 'react';
import CSS from 'csstype';
import { Checkbox, createStyles, FormControlLabel, FormGroup, makeStyles } from '@material-ui/core';

import { Options } from '../../store/recipes/types';

interface CheckboxListProps {
    handleOptions: (id: number, isSelected: boolean) => void;
    style?: CSS.Properties;
    className?: string;
    options: Options[];
}

const useStyles = makeStyles(() =>
    createStyles({
        formContainer: {
            justifyContent: 'space-between',
        },
    }),
);
export const CheckboxList: React.FC<CheckboxListProps> = ({ handleOptions, options }) => {
    const classes = useStyles();

    return (
        <FormGroup>
            {options.map((item) => (
                <FormControlLabel
                    key={item.id}
                    labelPlacement="start"
                    className={classes.formContainer}
                    control={
                        <Checkbox
                            color="default"
                            checked={item.isSelected}
                            onChange={() => {
                                handleOptions(item.id, item.isSelected);
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
