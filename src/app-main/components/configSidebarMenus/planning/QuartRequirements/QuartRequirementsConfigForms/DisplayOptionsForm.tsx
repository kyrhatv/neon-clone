import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Form } from 'react-bootstrap';
import { RootState } from 'app-main/app/store';
import { useSelector, useDispatch } from 'react-redux';

import {
    selectById,
    updateQuartRequirementsConfigs
} from 'app-main/components/configSidebarMenus/planning/QuartRequirements/QuartRequirementsConfigsSlice';

type DisplayOptionsFormProps = {};

const DisplayOptionsForm: FunctionComponent<DisplayOptionsFormProps> = () => {
    const [t] = useTranslation();
    const QuartRequirementsConfigs = useSelector((state: RootState) => selectById(state, 'requirementsConfigs'));

    const dispatch = useDispatch();

    const {
        id,
        showSubDivs,
        showUnderAndOver,
        showNonWork,
        countOnlyEmployees,
        showDetailledRequirementCell
    } = QuartRequirementsConfigs;

    return (
        <Form.Group controlId="sort">
            <Form.Label>
                <h6>{t('ShiftRequirements.configs.displayOptions')}</h6>
            </Form.Label>
            <Form>
                <Form.Check
                    type="switch"
                    id="subdivisionSwitch"
                    checked={showDetailledRequirementCell}
                    onChange={() =>
                        dispatch(
                            updateQuartRequirementsConfigs({
                                id: id,
                                changes: { showDetailledRequirementCell: !showDetailledRequirementCell }
                            })
                        )
                    }
                    label={t('ShiftRequirements.configs.detailledView')}
                />
                <Form.Check
                    type="switch"
                    id="subdivisionSwitch"
                    checked={showSubDivs}
                    onChange={() =>
                        dispatch(
                            updateQuartRequirementsConfigs({
                                id: id,
                                changes: { showSubDivs: !showSubDivs }
                            })
                        )
                    }
                    label={t('ShiftRequirements.configs.subDivs')}
                />
                <Form.Check
                    type="switch"
                    id="unfulfilledSwitch"
                    checked={showUnderAndOver}
                    onChange={() =>
                        dispatch(
                            updateQuartRequirementsConfigs({
                                id: id,
                                changes: { showUnderAndOver: !showUnderAndOver }
                            })
                        )
                    }
                    label={t('ShiftRequirements.configs.underAndOver')}
                />
                <Form.Check
                    type="switch"
                    id="nondisposSwitch"
                    checked={showNonWork}
                    onChange={() =>
                        dispatch(
                            updateQuartRequirementsConfigs({
                                id: id,
                                changes: { showNonWork: !showNonWork }
                            })
                        )
                    }
                    label={t('ShiftRequirements.configs.nonWork')}
                />
                <Form.Check
                    type="switch"
                    checked={countOnlyEmployees}
                    id="exclude-replacement-switch"
                    onChange={() =>
                        dispatch(
                            updateQuartRequirementsConfigs({
                                id: id,
                                changes: { countOnlyEmployees: !countOnlyEmployees }
                            })
                        )
                    }
                    label={t('ShiftRequirements.configs.countOnlyEmployees')}
                />
            </Form>
        </Form.Group>
    );
};

export default DisplayOptionsForm;
