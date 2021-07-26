import React from 'react';
import styled from 'styled-components';
import CSS from 'csstype';

interface TextType {
    color?: CSS.Property.Color;
    fontStyle?: CSS.Property.FontStyle;
    fontSize?: CSS.Property.FontSize;
    fontWeight?: CSS.Property.FontWeight;
    lineHeight?: CSS.Property.LineHeight;

    style?: CSS.Properties;
}

export const StyledText = styled.h6<TextType>`
    font-size: ${({ fontSize }) => fontSize || 16}px;
    font-style: ${({ fontStyle }) => fontStyle || 'normal'};
    font-weight: ${({ fontWeight }) => fontWeight || '400'};
    line-height: ${({ lineHeight }) => lineHeight || 24}px; ;
`;
export const Text: React.FC<TextType> = (props) => <StyledText {...props} />;
