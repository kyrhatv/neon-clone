import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ReportConfigs from './report-configuration';
import Reports from './reports';
import { PageContent } from 'app-main/components/Layout';

const Analyze = (routerProps: { match: { path: any } }) => {
    return (
        <PageContent>
            <Switch>
                <Route path={`${routerProps.match.path}/report-configuration`} component={ReportConfigs}></Route>
                <Route path={`${routerProps.match.path}/reports`} component={Reports}></Route>
                <Route exact path={`${routerProps.match.path}/`} component={ReportConfigs} />
            </Switch>
        </PageContent>
    );
};

export default Analyze;
