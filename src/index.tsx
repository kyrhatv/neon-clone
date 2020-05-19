import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@syncfusion/ej2-base/styles/bootstrap4.css';
import '@syncfusion/ej2-react-layouts/styles/bootstrap.css';
import 'styles/syncFusion-bootstrap4/bootstrap4.css';

import Root from './app-main/app/Root';
import './translations/i18n';

import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './app-main/app/store';
import { enableRipple } from '@syncfusion/ej2-base';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas);
library.add(far);

enableRipple(true);

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
