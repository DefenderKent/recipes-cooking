import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { mainRoutes } from '../../navigation/routes';
import { MainHeader } from '../../organisms/MainHeader';

export const StyledAppRouter = styled.div`
    max-width: 1084px;
    margin: 0 auto;
    padding: 0 15px;
`;
export const AppRouter: React.FC = () => {
    return (
        <StyledAppRouter>
            <MainHeader />
            <Switch>
                {mainRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} component={Component} exact />
                ))}

                <Redirect to="/" />
            </Switch>
        </StyledAppRouter>
    );
};
