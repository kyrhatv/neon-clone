import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Employees from './employees';
import { PageContent } from 'hs-components/Layout';

const Organisation = (routerProps: { match: { path: any } }) => {
    return (
        <PageContent>
            <Switch>
                <Route path={`${routerProps.match.path}/employees`} component={Employees}></Route>
                <Route exact path={`${routerProps.match.path}/`}>
                    <h1>autreaffaire</h1>
                </Route>
            </Switch>
        </PageContent>
    );
};

export default Organisation;
