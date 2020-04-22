import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app-main/app/store';

import { PLANNING_RIBBON_ID, TIMESHEETS_RIBBON_ID } from 'hs-utils/constants/constants';

export type Ribbon = {
    id: string;
    companyCode: string;
    // start: Date;
    // end: Date;
    selectedDate: Date;
    // planificationPeriodDTO: boolean;
};

const ribbonsAdapter = createEntityAdapter<Ribbon>({});
const emptyInitialState = ribbonsAdapter.getInitialState();

const ENTITIES: Ribbon[] = [
    { id: PLANNING_RIBBON_ID, companyCode: 'hora', selectedDate: new Date() },
    // start: new Date(), end: new Date(),
    { id: TIMESHEETS_RIBBON_ID, companyCode: 'hora', selectedDate: new Date() }
    // start: new Date(), end: new Date(),
];

const INITIAL_STATE = ribbonsAdapter.upsertMany(emptyInitialState, ENTITIES);

const ribbonsSlice = createSlice({
    name: 'ribbons',
    initialState: INITIAL_STATE,
    reducers: {
        updateRibbon: ribbonsAdapter.updateOne
    }
});

export const { updateRibbon } = ribbonsSlice.actions;

const ribbonsSelectors = ribbonsAdapter.getSelectors<RootState>((state) => state.ribbons);

export const { selectById } = ribbonsSelectors;
export default ribbonsSlice.reducer;
