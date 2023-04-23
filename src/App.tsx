import React from 'react';

import {Redirect, Route, Switch} from "react-router-dom";
import {mainRoutes} from "./services/routes";

const App = () =>
    (
        <Switch>
            {mainRoutes.map(({path, Component}, index) => (
                <Route key={`${path + index}`} path={path} component={Component} exact/>
            ))}
            <Redirect to="/"/>
        </Switch>
    );

export default App;
