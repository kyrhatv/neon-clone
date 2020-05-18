import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { RootStruct } from './RootStruct';
import { useTranslation } from 'react-i18next';

import moment from 'moment';
import FR from 'translations/momentLocal';

import Features from '../features';

import { PageHeader } from 'hs-components/Layout';
import { MainMenu } from 'hs-components/MainMenuSidebar/MainMenu';

import ConfigSidebar from 'hs-components/ConfigSidebar/ConfigSidebar';
import PlanningConfigSidebar from '../components/configSidebarMenus/planning';

import './style.css';

const Root: FunctionComponent = () => {
    const [t, i18n] = useTranslation();

    i18n.language === 'en' ? moment.locale('en') : moment.locale('fr', FR);
    return (
        <Router>
            <MainMenu struct={RootStruct} />
            <ConfigSidebar>
                <Switch>
                    <Route path="/planning">
                        <Route path="/planning" component={PlanningConfigSidebar} />
                    </Route>
                    <Route path="/timesheets">
                        <p>Profile</p>
                    </Route>
                </Switch>
            </ConfigSidebar>
            <div className="e-main-content">
                <PageHeader />
                <Switch>
                    <Route path="/planning" component={Features.Planning} />
                    <Route path="/timesheets" component={Features.Timesheets} />
                    <Route path="/organisation" component={Features.Organisation} />
                    <Route path="/analyze" component={Features.Analyze} />
                    <Route path="/request" component={Features.Requests} />
                    <Route path="/parameters" component={Features.Parameters} />
                    <Route path="/profile" component={Features.Profile} />
                    <Route path={'/'}>
                        <Redirect to="/planning/dashboard" />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default Root;
