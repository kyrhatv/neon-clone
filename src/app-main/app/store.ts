import { Action, configureStore, ThunkAction, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from 'app-main/features/planning/test/counterSlice';

import menusReducer from 'hs-components/sf-sidebar/menusSlice';

import ribbonsReducer from '../../app-main/components/ribbon/ribbonsSlice';
import stateSelectorReducer from '../../app-main/components/stateSelector/stateSelectorSlice';

import quartRequirementsConfigsReducer from '../components/configSidebarMenus/planning/QuartRequirements/QuartRequirementsConfigsSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        menus: menusReducer,
        ribbons: ribbonsReducer,
        stateSelectors: stateSelectorReducer,
        quartRequirementsConfigs: quartRequirementsConfigsReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
