import React from 'react';
import CSS from 'csstype';
import Typography from '@material-ui/core/Typography';

import { Colors } from '../../style/paletteOptions';
import { makeStyles } from '@material-ui/core';

interface RecipeCellProps {
    text: string;
    style?: CSS.Properties;
    className?: string;
}

const useStyles = makeStyles({
    container: {
        padding: '8px 12px;',
        borderRadius: 16,
        backgroundColor: Colors.base1,
    },
});
export const RecipeCell: React.FC<RecipeCellProps> = ({ text, className, ...props }) => {
    const classes = useStyles();
    return (
        <Typography className={`${classes.container} ${className}`} component="span" {...props}>
            {text}
        </Typography>
    );
};
