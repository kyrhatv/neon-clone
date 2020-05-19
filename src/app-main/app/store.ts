import { Action, configureStore, ThunkAction, getDefaultMiddleware } from '@reduxjs/toolkit';

import menusReducer from 'hs-components/sf-sidebar/menusSlice';

import ribbonsReducer from 'app-main/components/ribbon/ribbonsSlice';
import stateSelectorReducer from 'app-main/components/stateSelector/stateSelectorSlice';

import quartRequirementsConfigsReducer from 'app-main/components/configSidebarMenus/planning/QuartRequirements/QuartRequirementsConfigsSlice';

export const store = configureStore({
    reducer: {
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
