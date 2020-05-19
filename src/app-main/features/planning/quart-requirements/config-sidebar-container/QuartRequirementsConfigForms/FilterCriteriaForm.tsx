import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, InputGroup } from 'react-bootstrap';
import { RootState } from 'app-main/app/store';
import {
    useSelector
    // , useDispatch
} from 'react-redux';

import {
    selectById
    // ,updateQuartRequirementsConfigs
} from '../QuartRequirementsConfigsSlice';

type FilterCriteriaFormProps = {};

const FilterCriteriaForm: FunctionComponent<FilterCriteriaFormProps> = () => {
    const [t] = useTranslation();
    const QuartRequirementsConfigs = useSelector((state: RootState) => selectById(state, 'requirementsConfigs'));
    const { filterCriteria } = QuartRequirementsConfigs;

    return (
        <Form.Group controlId="filter">
            <Form.Label>
                <h6>{t('ShiftRequirements.configs.filterCriteria')}</h6>
            </Form.Label>
            <InputGroup>
                <Form.Control as="select" value={filterCriteria} size="sm" custom>
                    <option>No Filter Selected</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </InputGroup>
        </Form.Group>
    );
};

export default FilterCriteriaForm;
