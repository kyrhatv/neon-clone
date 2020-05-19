import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from 'hs-components/Icon';
import { Form, InputGroup } from 'react-bootstrap';
import { RootState } from 'app-main/app/store';
import { useSelector, useDispatch } from 'react-redux';

import { selectById, updateQuartRequirementsConfigs } from '../QuartRequirementsConfigsSlice';

type FilterByOrderCommandFormProps = {};

const FilterByOrderCommandForm: FunctionComponent<FilterByOrderCommandFormProps> = () => {
    const [t] = useTranslation();
    const QuartRequirementsConfigs = useSelector((state: RootState) => selectById(state, 'requirementsConfigs'));

    const dispatch = useDispatch();

    const { id, filterByOrderSearch } = QuartRequirementsConfigs;

    return (
        <Form.Group controlId="commandFilter">
            <Form.Label>
                <h6>{t('ShiftRequirements.configs.filterByOrder')}</h6>
            </Form.Label>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">
                        <Icon iconName="search" />
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                    size="sm"
                    type="search"
                    value={filterByOrderSearch}
                    onChange={(e) =>
                        dispatch(
                            updateQuartRequirementsConfigs({
                                id: id,
                                changes: { filterByOrderSearch: e.target.value }
                            })
                        )
                    }
                    placeholder="Nom ou Client"
                    aria-describedby="inputGroupPrepend"
                />
            </InputGroup>
        </Form.Group>
    );
};

export default FilterByOrderCommandForm;
