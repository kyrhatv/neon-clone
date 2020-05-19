import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import PlanningConfigSidebar from 'app-main/features/planning/config-sidebar';
import ConfigSidebar from 'app-main/components/ConfigMenu/ConfigSidebar';
import ParametersButton from 'app-main/components/ConfigMenu/ParametersButton';

type ConfigsRouterProps = {};

const ConfigsRouter: FunctionComponent<ConfigsRouterProps> = () => {
    return (
        <ConfigSidebar footerContent={<ParametersButton />}>
            <Switch>
                <Route path="/planning">
                    <Route path="/planning" component={PlanningConfigSidebar} />
                </Route>
                <Route path="/timesheets">
                    <p>Profile</p>
                </Route>
            </Switch>
        </ConfigSidebar>
    );
};

export default ConfigsRouter;
