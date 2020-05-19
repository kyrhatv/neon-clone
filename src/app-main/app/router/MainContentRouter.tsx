import React, { FunctionComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Features from 'app-main/features';

type MainContentRouterProps = {};

const MainContentRouter: FunctionComponent<MainContentRouterProps> = () => {
    return (
        <Switch>
            <Route path="/planning" component={Features.Planning} />
            <Route path="/timesheets" component={Features.Timesheets} />
            <Route path="/organisation" component={Features.Organisation} />
            <Route path="/analyze" component={Features.Analyze} />
            <Route path="/request" component={Features.Requests} />
            <Route path="/parameters" component={Features.Parameters} />
            <Route path="/profile" component={Features.Profile} />
            <Route path={'/'}>
                <Redirect to="/planning/dashboard" />
            </Route>
        </Switch>
    );
};

export default MainContentRouter;
