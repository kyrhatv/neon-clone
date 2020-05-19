import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PageContent } from 'hs-components/Layout';

import Ribbon from '../../components/ribbon';

import Dashboard from './dashboard/Dashboard';
import Summary from './summary';
import Details from './details';
import Period from './period';
import Corrections from './corrections';
import BatchEntry from './batch-entry';
import History from './history';

import { TIMESHEETS_RIBBON_ID } from 'hs-utils/constants/constants';

const Timesheets = (routerProps: { match: { path: any } }) => {
    return (
        <div className="page-container">
            <Ribbon id={TIMESHEETS_RIBBON_ID} />
            <PageContent>
                <Switch>
                    <Route path={`${routerProps.match.path}/dashboard`} component={Dashboard} />
                    <Route path={`${routerProps.match.path}/summary`} component={Summary} />
                    <Route path={`${routerProps.match.path}/details`} component={Details} />
                    <Route path={`${routerProps.match.path}/period`} component={Period} />
                    <Route path={`${routerProps.match.path}/corrections`} component={Corrections} />
                    <Route path={`${routerProps.match.path}/batchEntry`} component={BatchEntry} />
                    <Route path={`${routerProps.match.path}/history`} component={History} />
                    <Route exact path={`${routerProps.match.path}/`} component={Dashboard} />
                    <Route exact path={`${routerProps.match.path}`} component={Dashboard} />
                </Switch>
            </PageContent>
        </div>
    );
};

export default Timesheets;
