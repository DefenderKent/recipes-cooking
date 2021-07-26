import React from 'react';
import styled from 'styled-components';
import CSS from 'csstype';
import Typography from '@material-ui/core/Typography';

import { Colors } from '../../style/globalStyles';

interface TitleType {
    count: number;
    style?: CSS.Properties;
}

export const StyledCountBullet = styled.div`
    padding: 2px 5px;
    border-radius: 16px;
    border: 1px solid ${Colors.shade20};
`;
export const CountBullet: React.FC<TitleType> = ({ count, ...props }) => (
    <StyledCountBullet {...props}>
        <Typography variant="inherit" component="h5">
            {count}
        </Typography>
    </StyledCountBullet>
);
