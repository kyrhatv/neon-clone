import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { RootStruct } from './RootStruct';
import { useTranslation } from 'react-i18next';

import moment from 'moment';
import FR from 'translations/momentLocal';

import Timesheets from '../features/timesheets';
import Planning from '../features/planning';
import Organisation from '../features/organisation';

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
                <>
                    <Switch>
                        <Route path="/planning">
                            <Route path="/planning" component={PlanningConfigSidebar} />
                        </Route>
                        <Route path="/timesheets">
                            <p>Profile</p>
                        </Route>
                    </Switch>
                </>
            </ConfigSidebar>
            <div className="e-main-content">
                <PageHeader />
                <Switch>
                    <Route path="/planning" component={Planning} />
                    <Route path="/timesheets" component={Timesheets} />
                    <Route path="/organisation" component={Organisation} />
                    <Route path="/about">
                        <p>About</p>
                    </Route>
                    <Route path="/profile">
                        <p>Profile</p>
                    </Route>
                    <Route path={'/'}>
                        <Redirect to="/planning/dashboard" />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default Root;
