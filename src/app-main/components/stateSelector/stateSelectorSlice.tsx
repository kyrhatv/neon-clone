import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app-main/app/store';

import { PLANNING_RIBBON_ID, TIMESHEETS_RIBBON_ID } from 'hs-utils/constants/constants';

export type StateSelector = {
    id: string;
    companyCode: string;
    selectedDate: Date;
};

const stateSelectorsAdapter = createEntityAdapter<StateSelector>({});
const emptyInitialState = stateSelectorsAdapter.getInitialState();

const ENTITIES: StateSelector[] = [
    { id: PLANNING_RIBBON_ID, companyCode: 'hora', selectedDate: new Date() },
    { id: TIMESHEETS_RIBBON_ID, companyCode: 'hora', selectedDate: new Date() }
];

const INITIAL_STATE = stateSelectorsAdapter.upsertMany(emptyInitialState, ENTITIES);

const stateSelectorSlice = createSlice({
    name: 'stateSelectors',
    initialState: INITIAL_STATE,
    reducers: {
        updateSelectorSlice: stateSelectorsAdapter.updateOne
    }
});

export const { updateSelectorSlice } = stateSelectorSlice.actions;

const stateSelectorSelectors = stateSelectorsAdapter.getSelectors<RootState>((state) => state.ui.ribbons);

export const { selectById } = stateSelectorSelectors;
export default stateSelectorSlice.reducer;
