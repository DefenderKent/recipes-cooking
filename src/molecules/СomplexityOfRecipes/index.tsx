import React from 'react';
import styled from 'styled-components';
import CSS from 'csstype';

import { Hat } from '../../assets/Hat';
import { Difficulty } from '../../style/globalStyles';
import { View } from '../../templates';
import { getDifficulty } from '../../utils/getDifficulty';
import { Typography } from '@material-ui/core';

interface СomplexityRecipesPros {
    difficulty: keyof typeof Difficulty;
    style?: CSS.Properties;
}
const СomplexityRecipesStyled = styled.div<СomplexityRecipesPros>`
    color: ${({ difficulty }) => getDifficulty(difficulty).color}};
`;

export const СomplexityOfRecipes: React.FC<СomplexityRecipesPros> = (props) => {
    return (
        <СomplexityRecipesStyled {...props}>
            <View>
                <Hat color={getDifficulty(props.difficulty).color} />
                <Typography style={{ marginLeft: '9px' }} variant="body1" component="body">
                    {getDifficulty(props.difficulty).title}
                </Typography>
            </View>
        </СomplexityRecipesStyled>
    );
};
