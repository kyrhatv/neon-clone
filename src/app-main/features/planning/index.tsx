import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PageContent } from 'hs-components/Layout';

import Lines from './lines';
import { Counter } from './test/Counter';
import Dashboard from './dashboard';
import Ribbon from '../../components/ribbon';

import { PLANNING_RIBBON_ID } from 'hs-utils/constants/constants';

const Planning = (routerProps: { match: { path: any } }) => {
    return (
        <>
            <Ribbon id={PLANNING_RIBBON_ID} />
            <PageContent>
                <Switch>
                    <Route path={`${routerProps.match.path}/dashboard`} component={Dashboard} />
                    <Route path={`${routerProps.match.path}/schedules`} component={Counter} />
                    <Route path={`${routerProps.match.path}/lines`} component={Lines} />
                    <Route path={`${routerProps.match.path}/replacements`}>
                        <p>Planning > Replacements</p>
                    </Route>
                    <Route exact path={`${routerProps.match.path}/`}>
                        <Redirect to={`${routerProps.match.path}/dashboard`} />
                    </Route>
                </Switch>
            </PageContent>
        </>
    );
};

export default Planning;
