import React from 'react';

import Typography from '@material-ui/core/Typography';


interface TitleType {
    count: number;
    style?: string;
    className?: string;
}


export const CountBullet: React.FC<TitleType> = ({count}) => (

    <Typography variant="inherit" component="h5">
        {count}
    </Typography>

);