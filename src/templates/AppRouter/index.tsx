import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { mainRoutes } from '../../navigation/routes';
import { MainHeader } from '../../organisms/MainHeader';

export const StyledAppRouter = styled.div`
    max-width: 1114px;
    margin: 0 auto;
    padding: 0 15px;
`;
interface IProps {
    scrollY?: number;
}

interface StateType {
    scrollY: number;
}
export class AppRouter extends React.Component<IProps, StateType> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            scrollY: 0,
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
        this.setState({
            scrollY: window.scrollY,
        });
    };

    render() {
        return (
            <StyledAppRouter id="wrapper">
                <MainHeader scrolled={this.state.scrollY} />

                <Switch>
                    {mainRoutes.map(({ path, Component }, index) => (
                        <Route key={`${path + index}`} path={path} component={Component} exact />
                    ))}

                    <Redirect to="/" />
                </Switch>
            </StyledAppRouter>
        );
    }
}
