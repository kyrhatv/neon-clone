import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PageContent } from 'hs-components/Layout';

import Lines from './lines';
import { Counter } from './test/Counter';
import QuartRequirements from './quart-requirements';

import Dashboard from './dashboard';
import Ribbon from '../../components/ribbon';

import { PLANNING_RIBBON_ID } from 'hs-utils/constants/constants';

import './style.css';

const Planning = (routerProps: { match: { path: any } }) => {
    return (
        <div className="page-container">
            <Ribbon id={PLANNING_RIBBON_ID} />
            <PageContent>
                <Switch>
                    <Route path={`${routerProps.match.path}/dashboard`} component={Dashboard} />
                    <Route path={`${routerProps.match.path}/schedules`} component={Counter} />
                    <Route path={`${routerProps.match.path}/quartRequirements`} component={QuartRequirements} />
                    <Route path={`${routerProps.match.path}/lines`} component={Lines} />
                    <Route path={`${routerProps.match.path}/replacements`}>
                        <p>Planning > Replacements</p>
                    </Route>
                </Switch>
            </PageContent>
        </div>
    );
};

export default Planning;
