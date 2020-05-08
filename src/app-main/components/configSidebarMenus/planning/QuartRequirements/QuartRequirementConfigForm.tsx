import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from 'hs-components/Icon/Icon';
import { Button, Row, Col, Form, InputGroup, Container } from 'react-bootstrap';

import DivisionAffectationSelector from '../../../DivisionAffectationSelector';
import InlineSpace from 'hs-components/hs-component-space';

import './style.css';
type QuartRequirementConfigFormProps = {};

const QuartRequirementConfigForm: FunctionComponent<QuartRequirementConfigFormProps> = ({}) => {
    const [t] = useTranslation();

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
                        <Form.Control as="select" size="sm" custom>
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
                        <Form.Control as="select" size="sm" custom>
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
                        <h6>{t('ShiftRequirements.configs.displayOptions')}</h6>
                    </Form.Label>

                    <Form>
                        <Form.Check
                            type="switch"
                            id="subdivisionSwitch"
                            label={t('ShiftRequirements.configs.subDivs')}
                        />
                        <Form.Check
                            type="switch"
                            id="unfulfilledSwitch"
                            label={t('ShiftRequirements.configs.underAndOver')}
                        />
                        <Form.Check type="switch" id="nondisposSwitch" label={t('ShiftRequirements.configs.nonWork')} />
                        <Form.Check
                            type="switch"
                            id="exclude-replacement-switch"
                            label={t('ShiftRequirements.configs.countOnlyEmployees')}
                        />
                    </Form>
                </Form.Group>
                <Form.Group controlId="div-aff-selector">
                    <Form.Label>
                        <h6>{t('ShiftRequirements.configs.filterByAffDiv')}</h6>
                    </Form.Label>
                    <Form>
                        <Form.Control as="select" size="sm" custom>
                            <option>Montréal</option>
                            <option>Chicoutimi</option>
                            <option>Abscence</option>
                            <option>NON DISPO</option>
                            <option>RH</option>
                            <option>VACANCES</option>
                            <option>Développement</option>
                            <option>Implantation</option>
                            <option>Support</option>
                        </Form.Control>

                        {/* <DivisionAffectationSelector /> */}
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
