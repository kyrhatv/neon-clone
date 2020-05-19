import quartRequirementsConfigsReducer from 'app-main/features/planning/configSidebar/QuartRequirements/QuartRequirementsConfigsSlice';
import { combineReducers } from '@reduxjs/toolkit';

const planningConfigs = combineReducers({
    quartRequirements: quartRequirementsConfigsReducer
});

export default planningConfigs;
