import React from 'react';
import { Route, Switch } from 'react-router-dom';

import RequestsList from './requestsList';
import RequestDeclaration from './requestDeclaration';
import AbscenceSimplified from './simplifiedAbscence';
import { PageContent } from 'hs-components/Layout';

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
