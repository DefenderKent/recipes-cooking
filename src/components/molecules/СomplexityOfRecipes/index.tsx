import React from 'react';
import { Typography } from '@material-ui/core';

import { getLabelInfo } from '../../../utils/getLabelInfo';
import { Difficulty } from '../../../style/mainThem';

interface СomplexityRecipesPros {
    difficulty: keyof typeof Difficulty;
    title?: string;
    style?: string;
    className?: string;
}

export const СomplexityOfRecipes: React.FC<СomplexityRecipesPros> = (props) => {
    console.debug('СomplexityOfRecipesProps', props);
    return (
        <div>
            <div>
                {getLabelInfo(props.difficulty).icon}
                <Typography style={{ marginLeft: '9px' }} variant="body1">
                    {getLabelInfo(props.difficulty, props.title).title}
                </Typography>
            </div>
        </div>
    );
};
