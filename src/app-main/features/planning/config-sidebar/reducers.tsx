import quartRequirementsConfigsReducer from 'app-main/features/planning/quart-requirements/config-sidebar-container/QuartRequirementsConfigsSlice';
import { combineReducers } from '@reduxjs/toolkit';

const planningConfigs = combineReducers({
    quartRequirements: quartRequirementsConfigsReducer
});

export default planningConfigs;
