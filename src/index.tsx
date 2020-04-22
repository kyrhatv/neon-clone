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
import { setCulture } from '@syncfusion/ej2-base';
import { loadCldr } from '@syncfusion/ej2-base';

import * as gregorian from 'cldr-data/main/fr-CA/ca-gregorian.json';
import * as numbers from 'cldr-data/main/fr-CA/numbers.json';
import * as timeZoneNames from 'cldr-data/main/fr-CA/timeZoneNames.json';
import * as numberingSystems from 'cldr-data/supplemental/numberingSystems.json';
import * as weekData from 'cldr-data/supplemental/weekData.json';

import { L10n } from '@syncfusion/ej2-base';
enableRipple(true);

setCulture('fr-CA');

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames, weekData);
//load the locale object to set the localized placeholder value
L10n.load({
    'fr-CA': {
        datepicker: {
            placeholder: 'Prendre une date',
            today: "Aujourd'hui"
        }
    }
});

library.add(fas);

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
