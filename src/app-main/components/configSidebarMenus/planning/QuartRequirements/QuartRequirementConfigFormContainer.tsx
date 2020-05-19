import React, { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Container } from 'react-bootstrap';

import ConfigSearchbar from 'app-main/components/configSidebarMenus/ConfigMenu/ConfigSearchbar';

import {
    FilterByOrderCommandForm,
    SortCriteriaForm,
    FilterCriteriaForm,
    DisplayOptionsForm,
    FilterByAffDivForm
} from './QuartRequirementsConfigForms';

type QuartRequirementConfigFormContainerProps = {};

const QuartRequirementConfigFormContainer: FunctionComponent<QuartRequirementConfigFormContainerProps> = () => {
    const [t] = useTranslation();

    const [searchInput, setSearchInput] = useState('');
    const [showAll, setShowAll] = useState(true);

    const searchChangedHandler = (value) => {
        value === '' ? setShowAll(true) : setShowAll(false);
        setSearchInput(value.toString());
    };

    const searchData: string[] = [
        t('ShiftRequirements.configs.filterByOrder'),
        t('ShiftRequirements.configs.filterCriteria'),
        t('ShiftRequirements.configs.SortCriteria'),
        t('ShiftRequirements.configs.displayOptions'),
        t('ShiftRequirements.configs.filterByAffDiv')
    ];

    const configs = [
        {
            id: 'filterByOrder',
            displayText: t('ShiftRequirements.configs.filterByOrder'),
            component: <FilterByOrderCommandForm />
        },
        {
            id: 'filterCriteria',
            displayText: t('ShiftRequirements.configs.filterCriteria'),
            component: <SortCriteriaForm />
        },
        {
            id: 'SortCriteria',
            displayText: t('ShiftRequirements.configs.SortCriteria'),
            component: <FilterCriteriaForm />
        },
        {
            id: 'displayOptions',
            displayText: t('ShiftRequirements.configs.displayOptions'),
            component: <DisplayOptionsForm />
        },
        {
            id: 'filterByAffDiv',
            displayText: t('ShiftRequirements.configs.filterByAffDiv'),
            component: <FilterByAffDivForm />
        }
    ];

    return (
        <Container style={{ paddingTop: '15px' }} fluid>
            <Form.Group controlId="serachConfigs">
                <ConfigSearchbar
                    onSearchChanged={searchChangedHandler}
                    placeHolder={t('ShiftRequirements.configs.filterConfigs')}
                    searchData={searchData}
                />
            </Form.Group>
            {configs.map((config) => {
                return showAll || config.displayText.toLowerCase().includes(searchInput.toLowerCase())
                    ? config.component
                    : null;
            })}
        </Container>
    );
};

export default QuartRequirementConfigFormContainer;
