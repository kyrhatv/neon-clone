import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PageContent } from 'app-main/components/Layout';

import Dashboard from './dashboard';
import Schedules from './schedules';
import Lines from './lines';
import Replacements from './replacements';
import ReplacementsByEmployee from './replacementsByEmployee';
import QuartRequirements from './quart-requirements';
import MasterSchedules from './masterSchedules';
import Orders from './orders';
import Positions from './positions';
import Projects from './projects';

import Ribbon from 'app-main/components/ribbon';

import { PLANNING_RIBBON_ID } from 'hs-utils/constants/constants';

import './style.css';

const Planning = (routerProps: { match: { path: any } }) => {
    return (
        <div className="page-container">
            <Ribbon id={PLANNING_RIBBON_ID} />
            <PageContent>
                <Switch>
                    <Route path={`${routerProps.match.path}/dashboard`} component={Dashboard} />
                    <Route path={`${routerProps.match.path}/schedules`} component={Schedules} />
                    <Route path={`${routerProps.match.path}/lines`} component={Lines} />
                    <Route path={`${routerProps.match.path}/replacements`} component={Replacements} />
                    <Route
                        path={`${routerProps.match.path}/replacementsByEmployee`}
                        component={ReplacementsByEmployee}
                    />
                    <Route path={`${routerProps.match.path}/quartRequirements`} component={QuartRequirements} />
                    <Route path={`${routerProps.match.path}/masterSchedules`} component={MasterSchedules} />
                    <Route path={`${routerProps.match.path}/orders`} component={Orders} />
                    <Route path={`${routerProps.match.path}/positions`} component={Positions} />
                    <Route path={`${routerProps.match.path}/projects`} component={Projects} />
                    <Route path={`${routerProps.match.path}`} component={Dashboard} />
                </Switch>
            </PageContent>
        </div>
    );
};

export default Planning;
