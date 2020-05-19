import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Form } from 'react-bootstrap';
import { RootState } from 'app-main/app/store';
import {
    useSelector
    // , useDispatch
} from 'react-redux';

import {
    selectById
    // ,updateQuartRequirementsConfigs
} from '../QuartRequirementsConfigsSlice';

type FilterByAffDivFormProps = {};

const FilterByAffDivForm: FunctionComponent<FilterByAffDivFormProps> = () => {
    const [t] = useTranslation();
    const QuartRequirementsConfigs = useSelector((state: RootState) => selectById(state, 'requirementsConfigs'));

    const { filterByAffDivSelection } = QuartRequirementsConfigs;

    return (
        <Form.Group controlId="div-aff-selector">
            <Form.Label>
                <h6>{t('ShiftRequirements.configs.filterByAffDiv')}</h6>
            </Form.Label>
            <Form>
                <Form.Control as="select" value={filterByAffDivSelection} size="sm" custom>
                    <option>Tous</option>
                    <option value="Montréal">Montréal</option>
                    <option>Chicoutimi</option>
                    <option>Abscence</option>
                    <option>NON DISPO</option>
                    <option>RH</option>
                    <option>VACANCES</option>
                    <option>Développement</option>
                    <option>Implantation</option>
                    <option>Support</option>
                </Form.Control>
            </Form>
        </Form.Group>
    );
};

export default FilterByAffDivForm;
