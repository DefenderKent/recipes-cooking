import React from 'react';
import {Typography} from '@material-ui/core';

import {useClasses} from "./styles";

interface HeaderInputProps {
    title?: string
    subtitle?: string
}



export const HeaderWrap: React.FC<HeaderInputProps> = ({title, subtitle, children}) => {
    const classes = useClasses();
    return (
        <div className={classes.leftColumn}>
            <Typography variant="h1">{title}</Typography>
            <Typography variant="subtitle1" color="textSecondary">
                {subtitle}
            </Typography>
            {children}
        </div>
    );
};
