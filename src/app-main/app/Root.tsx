import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RootStruct } from './RootStruct';
import { useTranslation } from 'react-i18next';

import moment from 'moment';
import FR from 'translations/momentLocal';

import { PageHeader } from 'hs-components/Layout';
import { MainMenu } from 'hs-components/MainMenuSidebar/MainMenu';
// import i18n from 'translations/i18n';

import { ConfigsRouter, MainContentRouter } from 'app-main/app/router';
import './style.css';

const Root: FunctionComponent = () => {
    const [t, i18n] = useTranslation();

    i18n.language === 'en' ? moment.locale('en') : moment.locale('fr', FR);
    return (
        <Router>
            <MainMenu struct={RootStruct} />
            <ConfigsRouter />
            <div className="e-main-content">
                <PageHeader />
                <MainContentRouter />
            </div>
        </Router>
    );
};

export default Root;
