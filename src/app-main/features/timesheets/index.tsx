import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dashboard } from '../timesheets/dashboard/Dashboard';
import { PageContent } from 'hs-components/Layout';

import Ribbon from '../../components/ribbon';
import { TIMESHEETS_RIBBON_ID } from 'hs-utils/constants/constants';

const Timesheets = (routerProps: { match: { path: any } }) => {
    return (
        <div className="page-container">
            <Ribbon id={TIMESHEETS_RIBBON_ID} />
            <PageContent>
                <Switch>
                    <Route path={`${routerProps.match.path}/dashboard`} component={Dashboard}></Route>
                    <Route path={`${routerProps.match.path}/timesheets`} component={Dashboard}></Route>
                    <Route exact path={`${routerProps.match.path}/`}>
                        <h1>Timesheets</h1>
                    </Route>
                </Switch>
            </PageContent>
        </div>
    );
};

export default Timesheets;
