import React from 'react';
import styled from 'styled-components';
import CSS from 'csstype';

import { Hat } from '../../assets/Hat';
import { Text } from '../../atoms/Text';
import { Difficulty } from '../../style/globalStyles';
import { View } from '../../templates';
import { getDifficulty } from '../../utils/getDifficulty';

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
                <Text style={{ marginLeft: '9px' }}>{getDifficulty(props.difficulty).title}</Text>
            </View>
        </СomplexityRecipesStyled>
    );
};
