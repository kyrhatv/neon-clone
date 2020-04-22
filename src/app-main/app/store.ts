import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import counterReducer from 'app-main/features/planning/test/counterSlice';

import menusReducer from 'hs-components/sf-sidebar/menusSlice';

import ribbonsReducer from '../../app-main/components/ribbon/ribbonsSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        menus: menusReducer,
        ribbons: ribbonsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
