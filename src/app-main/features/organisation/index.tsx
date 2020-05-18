import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Employees from './employees';
import Hierarchy from './hierarchy';
import { PageContent } from 'hs-components/Layout';

const Organisation = (routerProps: { match: { path: any } }) => {
    return (
        <PageContent>
            <Switch>
                <Route path={`${routerProps.match.path}/employees`} component={Employees}></Route>
                <Route path={`${routerProps.match.path}/hierarchy`} component={Hierarchy}></Route>
                <Route exact path={`${routerProps.match.path}/`} component={Employees}></Route>
            </Switch>
        </PageContent>
    );
};

export default Organisation;
