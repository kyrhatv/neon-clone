import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from 'hs-components/Icon/Icon';
import { Button, Form, InputGroup, Container } from 'react-bootstrap';
import InlineSpace from 'hs-components/hs-component-space';
import { RootState } from 'app-main/app/store';
import { useSelector, useDispatch } from 'react-redux';

import {
    selectById,
    updateQuartRequirementsConfigs
} from 'app-main/components/configSidebarMenus/planning/QuartRequirements/QuartRequirementsConfigsSlice';

import './style.css';

type QuartRequirementConfigFormProps = {};

const QuartRequirementConfigForm: FunctionComponent<QuartRequirementConfigFormProps> = () => {
    const [t] = useTranslation();
    const QuartRequirementsConfigs = useSelector((state: RootState) => selectById(state, 'requirementsConfigs'));

    const dispatch = useDispatch();

    const {
        id,
        filterByOrderSearch,
        filterCriteria,
        SortCriteria,
        showSubDivs,
        showUnderAndOver,
        showNonWork,
        countOnlyEmployees,
        showDetailledRequirementCell,
        filterByAffDivSelection
    } = QuartRequirementsConfigs;

    return (
        <>
            <Container style={{ paddingTop: '15px' }} fluid>
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
                <div style={{ paddingBottom: '5px' }}>
                    <Button variant="primary" size="sm" block>
                        <Icon iconName="cogs" />
                        <InlineSpace />
                        {t('ShiftRequirements.configs.PlanningParameters')}
                    </Button>
                </div>
            </Container>
        </>
    );
};

export default QuartRequirementConfigForm;
