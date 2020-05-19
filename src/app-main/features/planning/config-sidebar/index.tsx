import React from 'react';
import { Route, Switch } from 'react-router-dom';

import QuartRequirementConfigForm from '../quart-requirements/config-sidebar-container';

const PlanningConfigSidebar = (routerProps: { match: { path: any } }) => {
    return (
        <Switch>
            <Route path={`${routerProps.match.path}/dashboard`}>DASHBOARD CONFIG</Route>
            <Route path={`${routerProps.match.path}/schedules`}> schedules Config</Route>
            <Route path={`${routerProps.match.path}/lines`}>lines config</Route>
            <Route path={`${routerProps.match.path}/replacements`}>
                <p>Planning - Replacements</p>
            </Route>
            <Route path={`${routerProps.match.path}/replacementsByEmployee`}>
                <p>Planning - Replacements by employees</p>
            </Route>
            <Route path={`${routerProps.match.path}/quartRequirements`} component={QuartRequirementConfigForm} />
            <Route path={`${routerProps.match.path}/masterSchedules`}>
                <p>Planning - master Schedule</p>
            </Route>
            <Route path={`${routerProps.match.path}/orders`}>
                <p>Planning - orders</p>
            </Route>
            <Route path={`${routerProps.match.path}/positions`}>
                <p>Planning - Replacements</p>
            </Route>
            <Route path={`${routerProps.match.path}/projects`}>
                <p>Planning - Replacements</p>
            </Route>
            <Route path={`${routerProps.match.path}`}>DASHBOARD CONFIG</Route>
        </Switch>
    );
};

export default PlanningConfigSidebar;
