import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app-main/app/store';

import { MAIN_MENU_ID, OPTIONS_MENU_ID } from 'hs-utils/constants/constants';

export type Menu = {
    id: string;
    isShown: boolean;
    currentModule:
        | undefined
        | 'features.planning.title'
        | 'features.timesheets.title'
        | 'features.organisation.title'
        | 'features.analyze.title'
        | 'features.request.title'
        | 'parameter';
    isPinned: boolean;
};

const menusAdapter = createEntityAdapter<Menu>({});
const emptyInitialState = menusAdapter.getInitialState();

const ENTITIES: Menu[] = [
    { id: MAIN_MENU_ID, isShown: false, currentModule: undefined, isPinned: false },
    { id: OPTIONS_MENU_ID, isShown: false, currentModule: undefined, isPinned: false }
];

const INITIAL_STATE = menusAdapter.upsertMany(emptyInitialState, ENTITIES);

const menusSlice = createSlice({
    name: 'menus',
    initialState: INITIAL_STATE,
    reducers: {
        updateMenu: menusAdapter.updateOne
    }
});

export const { updateMenu } = menusSlice.actions;

const menusSelectors = menusAdapter.getSelectors<RootState>((state) => state.ui.menus);

export const { selectById } = menusSelectors;
export default menusSlice.reducer;
