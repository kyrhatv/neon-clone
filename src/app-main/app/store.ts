import { Action, configureStore, ThunkAction, getDefaultMiddleware } from '@reduxjs/toolkit';

import ui from 'app-main/app/state/ui';

export const store = configureStore({
    reducer: {
        ui: ui
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
