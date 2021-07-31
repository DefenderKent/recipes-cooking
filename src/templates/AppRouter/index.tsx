import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { mainRoutes } from '../../navigation/routes';
import { MainHeader } from '../../organisms/MainHeader';

export const StyledAppRouter = styled.div`
    max-width: 1110px;
    margin: 0 auto;
    padding: 0 15px;
`;
export class AppRouter extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.resizeHeaderOnScroll);
    }
    resizeHeaderOnScroll() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 200,
            headerEl: any = document.getElementById('js-header');

        if (distanceY > shrinkOn) {
            headerEl.classList.add('smaller');
        } else {
            headerEl.classList.remove('smaller');
        }
    }
    render() {
        return (
            <StyledAppRouter id="wrapper">
                <MainHeader />

                <Switch>
                    {mainRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} component={Component} exact />
                    ))}

                    <Redirect to="/" />
                </Switch>
            </StyledAppRouter>
        );
    }
}
