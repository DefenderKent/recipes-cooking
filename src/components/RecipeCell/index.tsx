import React from 'react';
import CSS from 'csstype';
import Typography from '@material-ui/core/Typography';

import { Colors } from '../../style/paletteOptions';

interface RecipeCellProps {
    text: string;
    style?: CSS.Properties;
    className?: string;
}

export const RecipeCell: React.FC<RecipeCellProps> = ({ text, className, ...props }) => {
      return (
        <Typography component="span" {...props}>
            {text}
        </Typography>
    );
};
