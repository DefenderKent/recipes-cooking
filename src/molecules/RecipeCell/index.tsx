import React from 'react';
import styled from 'styled-components';
import CSS from 'csstype';
import Typography from '@material-ui/core/Typography';

import { Colors } from '../../style/globalStyles';

interface RecipeCellProps {
    text: string;
    style?: CSS.Properties;
    className?: string;
}

export const StyledDiv = styled.div`
    padding: 8px 12px;
    border-radius: 16px;
    background: ${Colors.base1};
`;

export const RecipeCell: React.FC<RecipeCellProps> = ({ style, text, ...props }) => (
    <StyledDiv style={style} {...props}>
        <Typography variant="inherit" component="h4">
            {text}
        </Typography>
    </StyledDiv>
);
