import React from 'react';
import { Route, Switch } from 'react-router-dom';

import QuartRequirementConfigForm from './QuartRequirements/QuartRequirementConfigForm';

const PlanningConfigSidebar = (routerProps: { match: { path: any } }) => {
    return (
        <Switch>
            <Route path={`${routerProps.match.path}/dashboard`}>DASHBOARDCONFIG</Route>
            <Route path={`${routerProps.match.path}/quartRequirements`} component={QuartRequirementConfigForm} />
            <Route path={`${routerProps.match.path}/replacements`}>
                <p>Planning - Replacements</p>
            </Route>
        </Switch>
    );
};

export default PlanningConfigSidebar;
