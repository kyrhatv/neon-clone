import planningConfigs from 'app-main/features/planning/configSidebar/reducers';
import { combineReducers } from '@reduxjs/toolkit';

const configSidebar = combineReducers({
    planning: planningConfigs
});

export default configSidebar;
