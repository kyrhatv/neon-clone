import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app-main/app/store';

export type QuartRequirementsConfigs = {
    id: string;
    filterByOrderSearch: string | undefined;
    filterCriteria: string | undefined;
    SortCriteria: string | undefined;
    showSubDivs: boolean;
    showUnderAndOver: boolean;
    showNonWork: boolean;
    countOnlyEmployees: boolean;
    filterByAffDivSelection: string | undefined;
    showDetailledRequirementCell: boolean;
};

const quartRequirementsConfigsAdapter = createEntityAdapter<QuartRequirementsConfigs>({});
const emptyInitialState = quartRequirementsConfigsAdapter.getInitialState();

const INITIAL_STATE = quartRequirementsConfigsAdapter.addOne(emptyInitialState, {
    id: 'requirementsConfigs',
    filterByOrderSearch: '',
    filterCriteria: undefined,
    SortCriteria: undefined,
    showSubDivs: true,
    showUnderAndOver: false,
    showNonWork: true,
    countOnlyEmployees: true,
    showDetailledRequirementCell: true,
    filterByAffDivSelection: undefined
});

const quartRequirementsConfigsSlice = createSlice({
    name: 'quartRequirementsConfigs',
    initialState: INITIAL_STATE,
    reducers: {
        updateQuartRequirementsConfigs: quartRequirementsConfigsAdapter.updateOne
    }
});

export const { updateQuartRequirementsConfigs } = quartRequirementsConfigsSlice.actions;

const quartRequirementsConfigsSelectors = quartRequirementsConfigsAdapter.getSelectors<RootState>(
    (state) => state.ui.configSidebar.planning.quartRequirements
);

export const { selectById } = quartRequirementsConfigsSelectors;
export default quartRequirementsConfigsSlice.reducer;
