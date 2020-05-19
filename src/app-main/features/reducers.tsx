import planningConfigs from 'app-main/features/planning/config-sidebar/reducers';
import { combineReducers } from '@reduxjs/toolkit';

const configSidebar = combineReducers({
    planning: planningConfigs
});

export default configSidebar;
