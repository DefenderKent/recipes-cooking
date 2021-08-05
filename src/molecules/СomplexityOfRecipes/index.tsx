import React from 'react';
import styled from 'styled-components';
import CSS from 'csstype';
import { Typography } from '@material-ui/core';

import { View } from '../../templates';
import { getLabelInfo } from '../../utils/getLabelInfo';
import { Difficulty } from '../../style/mainThem';

interface СomplexityRecipesPros {
    difficulty: keyof typeof Difficulty;
    title?: string;
    style?: CSS.Properties;
    className?: string;
}
const СomplexityRecipesStyled = styled.div<СomplexityRecipesPros>`
    color: ${({ difficulty }) => getLabelInfo(difficulty).color}};
`;

export const СomplexityOfRecipes: React.FC<СomplexityRecipesPros> = (props) => {
    return (
        <СomplexityRecipesStyled {...props}>
            <View>
                {getLabelInfo(props.difficulty).icon}
                <Typography style={{ marginLeft: '9px' }} variant="body1" component="body">
                    {getLabelInfo(props.difficulty, props.title).title}
                </Typography>
            </View>
        </СomplexityRecipesStyled>
    );
};
