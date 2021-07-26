import React from 'react';
import styled from 'styled-components';
import CSS from 'csstype';

//Сделал, что бы комфортее было с react-native переходить :)
interface ViewProps {
    display?: CSS.Property.Display;
    direction?: CSS.Property.Direction;
    aligan?: CSS.Property.AlignItems;
    justify?: CSS.Property.JustifyContent;
    style?: CSS.Properties;
    margin?: CSS.Property.Margin;
    className?: string;
}
const StyledView = styled.div<ViewProps>`
    display: ${({ display }) => display || 'flex'};
    flex-direction: ${({ direction }) => direction || 'row'};
    align-items: ${({ aligan }) => aligan || 'stretch'};
    justify-content: ${({ justify }) => justify || 'stretch'};
    margin: ${({ margin }) => margin || '0'};
`;
export const View: React.FC<ViewProps> = (props) => <StyledView {...props} />;
