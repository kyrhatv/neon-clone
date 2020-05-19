import { combineReducers } from '@reduxjs/toolkit';

import menusReducer from 'hs-components/sf-sidebar/menusSlice';
import ribbonsReducer from 'app-main/components/ribbon/ribbonsSlice';
import stateSelectorReducer from 'app-main/components/stateSelector/stateSelectorSlice';
import configSidebarReducer from 'app-main/features/reducers';

const ui = combineReducers({
    menus: menusReducer,
    ribbons: ribbonsReducer,
    stateSelectors: stateSelectorReducer,
    configSidebar: configSidebarReducer
});

export default ui;
