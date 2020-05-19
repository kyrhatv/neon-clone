import React from 'react';
import { Route, Switch } from 'react-router-dom';

import RequestsList from './requests-list';
import RequestDeclaration from './request-declaration';
import AbscenceSimplified from './simplified-abscence';
import { PageContent } from 'app-main/components/Layout';

const Analyze = (routerProps: { match: { path: any } }) => {
    return (
        <PageContent>
            <Switch>
                <Route path={`${routerProps.match.path}/list`} component={RequestsList}></Route>
                <Route path={`${routerProps.match.path}/declaration`} component={RequestDeclaration}></Route>
                <Route path={`${routerProps.match.path}/simplifiedAbscence`} component={AbscenceSimplified} />
                <Route exact path={`${routerProps.match.path}/`} component={RequestsList} />
            </Switch>
        </PageContent>
    );
};

export default Analyze;
