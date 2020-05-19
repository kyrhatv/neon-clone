import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, InputGroup } from 'react-bootstrap';
import { RootState } from 'app-main/app/store';
import { useSelector } from 'react-redux';

import { selectById } from '../QuartRequirementsConfigsSlice';

type SortCriteriaFormProps = {};

const SortCriteriaForm: FunctionComponent<SortCriteriaFormProps> = () => {
    const [t] = useTranslation();

    const QuartRequirementsConfigs = useSelector((state: RootState) => selectById(state, 'requirementsConfigs'));

    const { SortCriteria } = QuartRequirementsConfigs;

    return (
        <Form.Group controlId="sort">
            <Form.Label>
                <h6>{t('ShiftRequirements.configs.SortCriteria')}</h6>
            </Form.Label>
            <InputGroup>
                <Form.Control as="select" value={SortCriteria} size="sm" custom>
                    <option value={undefined}>No Sort Selected</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </Form.Control>
            </InputGroup>
        </Form.Group>
    );
};

export default SortCriteriaForm;
